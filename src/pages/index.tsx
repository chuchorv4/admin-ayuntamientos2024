import { useAppSelector } from "@utils/hooks"

const Main = () => {
  const domains = useAppSelector(state => state.domains)

  return (
    <>
      <h2 className="text-4xl font-bold">Mis Sitios</h2>
      <p>{JSON.stringify(domains)}</p>
    </>
  )
}

export default Main
