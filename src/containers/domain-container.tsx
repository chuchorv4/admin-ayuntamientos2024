import ModalDomains from "@components/domains/modal-domains"
import { Domain } from "@interfaces/domains"
import { addDomain, getDomains } from "@redux/slices/domains"
import { useAppDispatch, useAppSelector } from "@utils/hooks"
import { useEffect, useState } from "react"

const DomainContainer = () => {
  const [isOpenModalDomains, setIsOpenModalDomains] = useState(false)
  const domains = useAppSelector(state => state.domains)
  const dispatch = useAppDispatch()

  const handleCreateDomain = (data: Domain) => {
    dispatch(addDomain(data))
    handleCloseModalDomains()
  }

  const handleOpenModalDomains = () => setIsOpenModalDomains(true)
  const handleCloseModalDomains = () => setIsOpenModalDomains(false)

  useEffect(() => {
    dispatch(getDomains())
  })
  return (
    <>
      <h1>Domain Container</h1>
      <button className="btn btn-primary" onClick={handleOpenModalDomains}>
        Crear Sitio
      </button>
      <ModalDomains
        isOpen={isOpenModalDomains}
        onClose={handleCloseModalDomains}
        onSubmit={handleCreateDomain}
      />
    </>
  )
}

export default DomainContainer
