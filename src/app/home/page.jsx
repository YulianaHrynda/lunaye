import Playlists from './components/Playlists';
import RecentlyPlayed from './components/RecentlyPlayed';
import ArtistSuggestions from './components/ArtistSuggestions';
import PlayerBar from './components/PlayerBar';

export default function Page() {
  return (
    <div>
      <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '30px' }}>Good afternoon</h2>
      <Playlists header="Featured Playlists"/>
      <RecentlyPlayed />
      <ArtistSuggestions />
      <PlayerBar />
    </div>
  )
}
