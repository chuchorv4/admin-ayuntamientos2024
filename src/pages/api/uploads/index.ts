import type { NextApiRequest, NextApiResponse } from "next"
import formidable from "formidable"
import { API_URL } from "@const/environments"
import fs from "node:fs"
import FormData from "form-data"

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  switch (request.method) {
    case "POST": {
      const form = formidable()
      form.parse(request, (error, fields, files) => {
        if (error) {
          response.status(500).json({ error: error.message })
          return
        }

        const formData = new FormData()
        formData.append("_id", fields._id?.[0])

        if (files?.file?.[0]) {
          const file = files.file[0] as formidable.File
          const fileStream = fs.createReadStream(file.filepath)

          formData.append("file", fileStream, file.originalFilename ?? "file")
        }

        formData.submit(`${API_URL}/uploads`, (errorApi, responseApi) => {
          if (errorApi) {
            response.status(500).json({ error: errorApi.message })
            return
          }

          let body = ""
          responseApi.on("data", chunk => {
            body += chunk
          })

          responseApi.on("end", () => {
            response.status(201).json(JSON.parse(body))
          })
        })
      })

      break
    }
    default: {
      response.setHeader("Allow", ["GET", "POST"])
      response.status(405).end(`Method ${request.method} Not Allowed`)
    }
  }
}
