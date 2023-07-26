import { NavBar } from './components/organisms/navigations/NavBar'
import { Sidebar } from './components/organisms/navigations/Sidebar'
import { SongList } from './components/organisms/sections/SongList'
import './spotify.css'

const Spotify = () => {
  return (
    <>
      <div className="grid grid-rows-3 grid-cols-6 h-screen bg-gray-900">
        <Sidebar />
        <main className="col-span-5 row-span-3 overflow-auto">
          <NavBar />

          <SongList title="Recently played" />
          <SongList title="Popular Song" />
        </main>
      </div>
    </>  
  )
}

export default Spotify