/* eslint-disable @next/next/no-img-element */
import { Domain } from "@interfaces/domains"
import Link from "next/link"

const CardDomain = ({
  domain,
  isAdmin,
  updateDomain,
  handleDeleteDomain,
}: {
  domain: Domain
  isAdmin: boolean
  handleDeleteDomain: (id: string) => void
  updateDomain: (domain: Domain) => void
}) => {
  return (
    <>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={domain.logo} alt="Logo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{domain.name}</h2>
          <p>{domain.description}</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-secondary"
              onClick={() => updateDomain(domain)}
            >
              Modificar
            </button>
            {isAdmin && (
              <button
                className="btn btn-danger"
                onClick={() => handleDeleteDomain(domain._id)}
              >
                Borrar
              </button>
            )}
            <Link className="btn btn-primary" href={domain.url}>
              Ver paginas
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardDomain
