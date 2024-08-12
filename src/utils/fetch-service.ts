import { API_URL } from "@const/environments"
import { fromFetch } from "rxjs/fetch"

export class FetchService {
  private baseUrl: string
  private headers: HeadersInit = {
    "Content-Type": "application/json",
  }

  constructor(baseUrl?: string, headers?: HeadersInit) {
    this.baseUrl = baseUrl ?? API_URL
    this.headers = headers ?? this.headers
  }

  private constructUrl(path: string, id?: string): string {
    return `${this.baseUrl}${path}${id ? `/${id}` : ""}`
  }

  private fetch<T>(url: string, method: string, body?: T) {
    return fromFetch<T>(url, {
      method,
      headers: this.headers,
      body: body ? JSON.stringify(body) : undefined,
      selector: response => response.json(),
    })
  }

  get<T>(path: string, id?: string) {
    return this.fetch<T>(this.constructUrl(path, id), "GET")
  }

  post<T>(path: string, body: T) {
    return this.fetch<T>(this.constructUrl(path), "POST", body)
  }

  update<T>(path: string, id: string, body: T) {
    return this.fetch<T>(this.constructUrl(path, id), "PUT", body)
  }

  delete<T>(path: string, id: string) {
    return this.fetch<T>(this.constructUrl(path, id), "DELETE")
  }
}
