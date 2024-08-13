/* eslint-disable @next/next/no-img-element */
import ModalDomains from "@components/domains/modal-domains"
import { Domain } from "@interfaces/domains"
import { addDomain, getDomains } from "@redux/slices/domains"
import { useAppDispatch, useAppSelector } from "@utils/hooks"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"

const Main = () => {
  const [isOpenModalDomains, setIsOpenModalDomains] = useState(false)
  const domains = useAppSelector(state => state.domains)
  const session = useSession()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getDomains())
  }, [])

  const handleCreateDomain = (data: Domain) => {
    dispatch(addDomain(data))
    handleCloseModalDomains()
  }

  const handleOpenModalDomains = () => setIsOpenModalDomains(true)
  const handleCloseModalDomains = () => setIsOpenModalDomains(false)

  return (
    <>
      <h2 className="text-4xl font-bold">Mis Sitios</h2>
      <p>{JSON.stringify(domains)}</p>
      <img src={domains[0].logo} alt="" />
      {session?.data?.user.admin && (
        <>
          <button className="btn btn-primary" onClick={handleOpenModalDomains}>
            Crear Sitio
          </button>
          <ModalDomains
            isOpen={isOpenModalDomains}
            onClose={handleCloseModalDomains}
            onSubmit={handleCreateDomain}
          />
        </>
      )}
    </>
  )
}

export default Main
