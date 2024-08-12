export interface Domain {
  _id: string
  name: string
  url: string
  favicon?: string
  logo?: string
  description?: string
}

export const domainPath = "/domains"
