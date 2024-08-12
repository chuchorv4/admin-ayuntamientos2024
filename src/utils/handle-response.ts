import { NextApiResponse } from "next"
import { Observable } from "rxjs"

export const createHandleResponse =
  (response: NextApiResponse) =>
  <T>(fetch: Observable<T>, status = 200) => {
    fetch.subscribe({
      next: data => response.status(status).json(data),
      error: error => response.status(500).json({ error }),
    })
  }
