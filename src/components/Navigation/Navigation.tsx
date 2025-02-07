import Link from 'next/link';
import styles from './Navigation.module.scss';
import Logo from '../Logo';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <div className="container">
        <ul className={styles.items}>
          <li className={styles.item}>
            <Link className={`${styles.link} ${styles.active}`} href="/">
              Головна
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} href="/masters">
              Майстри
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} href="/services">
              Послуги
            </Link>
          </li>
          <li className={styles.item}>
            <Logo />
          </li>
          <li className={styles.item}>
            <Link className={styles.link} href="/promo">
              Акції
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} href="/feedback">
              Відгуки
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} href="/contacts">
              Контакти
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
