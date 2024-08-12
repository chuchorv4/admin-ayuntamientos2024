import type { NextApiRequest, NextApiResponse } from "next"
import { FetchService } from "@utils/fetch-service"
import { createHandleResponse } from "@utils/handle-response"
import { domainPath } from "@interfaces/domains"

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { id } = request.query

  const fetchService = new FetchService()
  const handleResponse = createHandleResponse(response)

  switch (request.method) {
    case "GET": {
      handleResponse(fetchService.get(domainPath, id as string))
      break
    }
    case "PUT": {
      handleResponse(
        fetchService.update(domainPath, id as string, request.body)
      )
      break
    }
    case "DELETE": {
      handleResponse(fetchService.delete(domainPath, id as string))
      break
    }
    default: {
      response.setHeader("Allow", ["GET", "PUT", "DELETE"])
      response.status(405).end(`Method ${request.method} Not Allowed`)
    }
  }
}
