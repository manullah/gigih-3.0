import { Link } from "react-router-dom"
import { useSpotifyLogin } from "../../../domains/spotify/hooks/useSpotifyHook"

export const NavBar = (props) => {
  // eslint-disable-next-line react/prop-types
  const { displayName } = props
  const { accessToken, doLogout } = useSpotifyLogin()

  return (
    <main className="col-span-5 row-span-3 overflow-auto">
      <header
        className="px-6 py-4 mb-6 bg-gray-800 flex items-center justify-between sticky top-0 z-10"
      >
        <div className="flex items-center">
          <button
            className="h-8 w-8 bg-gray-500 rounded-full text-white flex mr-4 opacity-50 cursor-not-allowed"
          >
            <svg className="h-5 w-5 m-auto" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M15.54 21.15L5.095 12.23 15.54 3.31l.65.76-9.555 8.16 9.555 8.16"
              ></path>
            </svg>
          </button>
          <button className="h-8 w-8 bg-gray-500 rounded-full text-white flex">
            <svg className="h-5 w-5 m-auto" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M7.96 21.15l-.65-.76 9.555-8.16L7.31 4.07l.65-.76 10.445 8.92"
              ></path>
            </svg>
          </button>
        </div>

        {accessToken
          ? (
            <div className="flex gap-4 items-center">
              <p className="text-white">{displayName}</p>
              <button
                type="button"
                className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white py-2.5 px-4 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                onClick={doLogout}
              >
                <span className="inline-block">Logout</span>
              </button>
            </div>
          )
          : (
            <Link to='/login'>
              <button
                type="button"
                className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white py-2.5 px-4 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              >
                <span className="inline-block">Signin</span>
              </button>
            </Link>
          )
        }
      </header>
    </main>
  )
}