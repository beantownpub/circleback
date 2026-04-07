import logo from '@/assets/circleback@4x.png';
import styles from './HomePage.module.css';

function HomePage() {
  return (
    <div className={styles.page}>
      <img src={logo} alt="CircleBack Kitchen & Bar" className={styles.logo} />
      <p className={styles.subtitle}>Opening Soon!</p>
    </div>
  );
}

export default HomePage;
