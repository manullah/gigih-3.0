export const NavBar = () => {
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
      </header>
    </main>
  )
}