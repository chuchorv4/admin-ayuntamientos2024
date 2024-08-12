/* eslint-disable @next/next/no-img-element */
import { Domain } from "@interfaces/domains"
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import clsx from "clsx"
import { FileUpload } from "@utils/file-service"

const REQUIRED = "Campo requerido"

interface FormData extends Omit<Domain, "favicon" | "logo"> {
  favicon: FileList
  logo: FileList
}

interface ModalProperties {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: Domain) => void
}

const handleFileUpload = (
  fileList: FileList,
  setPreview: (image?: string) => void
) => {
  const file = fileList[0]
  if (file) {
    const reader = new FileReader()
    reader.onloadend = () => {
      setPreview(reader.result as string)
    }
    reader.readAsDataURL(file)
  }
}

const ModalDomains: React.FC<ModalProperties> = ({
  isOpen,
  onClose,
  // onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>()

  const [faviconPreview, setFaviconPreview] = useState<string>()
  const [logoPreview, setLogoPreview] = useState<string>()

  const favicon = watch("favicon")
  const logo = watch("logo")
  const fileUpload = new FileUpload()

  useEffect(() => {
    if (favicon) {
      handleFileUpload(favicon, setFaviconPreview)
    }
    if (logo) {
      handleFileUpload(logo, setLogoPreview)
    }
  }, [favicon, logo])

  if (!isOpen) {
    return <></>
  }

  const preOnSubmit = (data: FormData) => {
    // console.log(data)
    fileUpload.uploadFile(data.favicon[0], "favicons").then(_response => {
      // console.log(response)
    })
    // fileUpload.uploadFile(data.favicon[0], "favicons").subscribe({
    //   next: response => {
    //     console.log(response)
    //   },
    //   error: error => {
    //     console.error(error)
    //   },
    //   complete: () => {
    //     console.log("Complete")
    //   },
    // })
    // onSubmit(data)
  }

  return (
    <dialog
      id="my_modal_5"
      className="modal modal-bottom sm:modal-middle bg-secondary bg-opacity-30"
      open
    >
      <form className="modal-box" onSubmit={handleSubmit(preOnSubmit)}>
        <h3 className="font-bold text-lg">Ingresa los datos del dominio</h3>

        <label className="form-control w-full max-w-xl">
          <div className="label">
            <span className="label-text">Nombre</span>
            <span className="label-text-alt">requerido</span>
          </div>
          <input
            type="text"
            id="name"
            placeholder="Ayuntamiento de..."
            className={clsx("input input-bordered w-full max-w-xl", {
              "input-error": errors.name,
            })}
            {...register("name", { required: REQUIRED, maxLength: 60 })}
          />
          <div className="label">
            <span className="label-text-alt"></span>
            {errors.name && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>
        </label>

        <label className="form-control w-full max-w-xl">
          <div className="label">
            <span className="label-text">URL</span>
            <span className="label-text-alt">requerido</span>
          </div>
          <input
            type="text"
            id="url"
            placeholder="https://ayuntamiento.gob.mx"
            className={clsx("input input-bordered w-full max-w-xl", {
              "input-error": errors.url,
            })}
            {...register("url", { required: REQUIRED, maxLength: 60 })}
          />
          <div className="label">
            <span className="label-text-alt"></span>
            {errors.url && (
              <span className="label-text-alt text-red-500">
                {errors.url.message}
              </span>
            )}
          </div>
        </label>

        <label className="form-control w-full max-w-xl">
          <div className="label">
            <span className="label-text">FavIcon</span>
            <span className="label-text-alt">opcional</span>
          </div>
          <input
            type="file"
            accept="image/*"
            className="file-input file-input-bordered w-full max-w-xl"
            id="favicon"
            {...register("favicon", { required: false })}
          />
          {faviconPreview && (
            <img src={faviconPreview} alt="Favicon Preview" className="mt-2" />
          )}
          <div className="label">
            <span className="label-text-alt"></span>
            <span className="label-text-alt"></span>
          </div>
        </label>

        <label className="form-control w-full max-w-xl">
          <div className="label">
            <span className="label-text">Logo</span>
            <span className="label-text-alt">opcional</span>
          </div>
          <input
            type="file"
            accept="image/*"
            className="file-input file-input-bordered w-full max-w-xl"
            id="logo"
            {...register("logo", { required: false })}
          />
          {logoPreview && (
            <img src={logoPreview} alt="Logo Preview" className="mt-2" />
          )}
          <div className="label">
            <span className="label-text-alt"></span>
            <span className="label-text-alt"></span>
          </div>
        </label>

        <label className="form-control w-full max-w-xl">
          <div className="label">
            <span className="label-text">Descripción</span>
            <span className="label-text-alt">opcional</span>
          </div>
          <textarea
            id="description"
            className="textarea textarea-bordered h-24"
            placeholder="Pagina informativa.."
            {...register("description", { required: false, maxLength: 200 })}
          ></textarea>
          <div className="label">
            <span className="label-text-alt"></span>
            {errors.description && (
              <span className="label-text-alt text-red-500">
                {errors.description.message}
              </span>
            )}
          </div>
        </label>

        <div className="modal-action">
          <button className="btn btn-secondary mr-2" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn-primary">Save</button>
        </div>
      </form>
    </dialog>
  )
}

export default ModalDomains
