import Playlists from "./components/Playlists"
import PlayerBar from "./components/PlayerBar"

export default function Page() {
  return (
    <div>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '30px' }}>Your Library</h2>
        <Playlists header="Your Playlists" />
        <Playlists header="Followed Playlists" />
        <PlayerBar />
    </div>
  )
}
