import { SongCard } from "../../molecules/cars/SongCard"

export const SongList = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title } = props

  return (
    <section className="px-6 grid gap-6 mb-8">
      <div className="flex items-center">
        <div className="flex-1">
          <h3 className="text-2xl text-white">
            <a
              className="border-b border-transparent hover:border-white"
              href=""
            >
              {title}
            </a>
          </h3>
        </div>
        <div>
          <a
            className="text-xs text-gray-100 tracking-widest uppercase hover:underline"
            href=""
          >
            See all
          </a>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-4">
        {[...Array(6).keys()].map((item) => (
          <SongCard key={item} />
        ))}
      </div>
    </section>
  )
}