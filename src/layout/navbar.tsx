/* eslint-disable @next/next/no-img-element */
import SwitchTheme from "@components/layout/switch-theme"
import { useSession, signOut } from "next-auth/react"

const handleLogout = () => {
  signOut()
}

const Navbar: React.FC = () => {
  const session = useSession()

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Ayuntamientos</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <SwitchTheme />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="avatar" src={session.data?.user.picture} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
