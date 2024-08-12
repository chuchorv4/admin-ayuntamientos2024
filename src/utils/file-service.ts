// import { FetchService } from "./fetch-service"

// export class FileUpload extends FetchService {
//   constructor(url?: string) {
//     super(url, {})
//   }
//   uploadFile(file: File, id: string) {
//     const formData = new FormData()
//     console.log(file)
//     formData.append("file", file)
//     formData.append("_id", id)
//     console.log(formData)
//     return this.post<FormData>("/uploads", formData)
//   }
// }

export class FileUpload {
  async uploadFile(file: File, id: string) {
    const formData = new FormData()
    formData.append("file", file)
    formData.append("_id", id)
    const response = await fetch("/api/uploads", {
      method: "POST",
      body: formData,
    })

    const result = await response.json()
    return result
  }
}
