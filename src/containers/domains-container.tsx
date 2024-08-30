import CardDomain from "@components/domains/card-domain"
import ModalDomains from "@components/domains/modal-domains"
import { Domain } from "@interfaces/domains"
import {
  addDomain,
  getDomains,
  updateDomain,
  removeDomain,
} from "@redux/slices/domains"
import { useAppDispatch, useAppSelector } from "@utils/hooks"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"

const DomainContainer = () => {
  const session = useSession()
  const isAdmin = !!session?.data?.user?.admin

  const [isOpenModalDomains, setIsOpenModalDomains] = useState(false)
  const [domain, setDomain] = useState<Domain>()
  const [isEditing, setIsEditing] = useState(false)

  const domains = useAppSelector(state => state.domains)
  const dispatch = useAppDispatch()

  const handleCreateDomain = (data: Domain) => {
    if (isEditing) {
      dispatch(updateDomain(data))
    }
    if (!isEditing) {
      dispatch(addDomain(data))
    }
    setIsEditing(false)
    handleCloseModalDomains()
    setDomain(undefined)
  }

  const handleOpenModalDomains = () => setIsOpenModalDomains(true)
  const handleCloseModalDomains = () => setIsOpenModalDomains(false)

  const handleOpenUpdateDomain = (domain: Domain) => {
    setDomain(domain)
    setIsEditing(true)
    handleOpenModalDomains()
  }

  const handleDeleteDomain = (id: string) => {
    dispatch(removeDomain(id))
  }

  useEffect(() => {
    dispatch(getDomains())
  }, [dispatch])
  return (
    <>
      <div className="grid gap-3 grid-cols-3">
        {domains.map(domain => (
          <>
            <CardDomain
              domain={domain}
              isAdmin={isAdmin}
              handleDeleteDomain={handleDeleteDomain}
              updateDomain={handleOpenUpdateDomain}
            />
          </>
        ))}
      </div>
      {isAdmin && (
        <button className="btn btn-primary" onClick={handleOpenModalDomains}>
          Crear Sitio
        </button>
      )}
      <ModalDomains
        isOpen={isOpenModalDomains}
        onClose={handleCloseModalDomains}
        onSubmit={handleCreateDomain}
        domain={domain}
      />
    </>
  )
}

export default DomainContainer
