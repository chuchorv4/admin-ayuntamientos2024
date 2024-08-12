import type { NextApiRequest, NextApiResponse } from "next"
import { FetchService } from "@utils/fetch-service"
import { domainPath } from "@interfaces/domains"
import { createHandleResponse } from "@utils/handle-response"

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const fetchService = new FetchService()
  const handleResponse = createHandleResponse(response)

  switch (request.method) {
    case "GET": {
      handleResponse(fetchService.get(domainPath))
      break
    }
    case "POST": {
      handleResponse(fetchService.post(domainPath, request.body), 201)
      break
    }
    default: {
      response.setHeader("Allow", ["GET", "POST"])
      response.status(405).end(`Method ${request.method} Not Allowed`)
    }
  }
}
