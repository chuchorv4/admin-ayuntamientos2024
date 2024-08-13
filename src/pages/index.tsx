import { useSession } from "next-auth/react"
import DomainContainer from "../containers/domain-container"

const Main = () => {
  const session = useSession()

  return (
    <>
      <h2 className="text-4xl font-bold">Mis Sitios</h2>

      {session?.data?.user.admin && <DomainContainer></DomainContainer>}
    </>
  )
}

export default Main
