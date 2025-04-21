import Sidebar from './components/Sidebar';
import './globals.css';
import styles from './styles/layout.module.css';

export const metadata = {
  title: 'Lunaye',
  description: 'Spotify-style music dashboard',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={styles.container}>
          <Sidebar />
          <main className={styles.main}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
