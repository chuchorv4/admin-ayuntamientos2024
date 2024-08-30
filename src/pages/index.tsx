import DomainsContainer from "../containers/domains-container"

const Main = () => {
  return (
    <>
      <h2 className="text-4xl font-bold my-2">Mis Sitios</h2>
      <div className="container mx-auto my-4 p-4 card bg-secondary bg-opacity-50">
        <DomainsContainer />
      </div>
    </>
  )
}

export default Main
