'use client';

import { useParams } from 'next/navigation';
import PlaylistHeader from '../components/PlaylistHeader';
import PlaylistTable from '../components/PlaylistTable';
import PlayerBar from '../../components/PlayerBar';
import { playlists } from '../../../../data/playlists';
import styles from '../styles/playlist.module.css';

export default function PlaylistPage() {
  const { slug } = useParams();
  const data = playlists[slug];

  if (!data) return <div className={styles.notFound}>Playlist not found</div>;

  return (
    <div className={styles.pageContainer}>
      <PlaylistHeader
        title={data.title}
        cover={data.cover}
        duration={data.duration}
        songCount={data.songs.length}
      />
      <PlaylistTable songs={data.songs} />
      <PlayerBar />
    </div>
  );
}
