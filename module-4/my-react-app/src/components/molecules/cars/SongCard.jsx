export const SongCard = () => {
  return (
    <div className="bg-gray-800 rounded p-4 shadow">
      <img
        className="w-full mb-4 rounded"
        src="https://i.scdn.co/image/ab67706f00000002d073e656e546e43bc387ad79"
        alt=""
      />
      <div className="text-white mb-1 text-lg">
        Peaceful Piano
      </div>
      <span className="text-sm text-gray-400 line-clamp-2">Peaceful piano to help you slow down, breathe, and relax. </span>
    </div>
  )
}