import Footer from './Footer';
import Header from './Header';
import styles from './index.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.root}>
      <Header />
      {children}
      <Footer />
    </main>
  );
}