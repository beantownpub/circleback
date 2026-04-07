import { Outlet, Link } from 'react-router-dom';
import logo from '@/assets/circleback@4x.png';
import styles from './Layout.module.css';

function Layout() {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <nav className={styles.headerNav}>
          <Link to="/" className={styles.logoLink}>
            <img src={logo} alt="CircleBack Kitchen & Bar" className={styles.logoImage} />
          </Link>
        </nav>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} CircleBack Kitchen &amp; Bar</p>
      </footer>
    </div>
  );
}

export default Layout;
