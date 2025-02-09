'use client';

import Link from 'next/link';
import styles from './Navigation.module.scss';
import Logo from '../Logo';
import { usePathname } from 'next/navigation';
import cn from 'classnames';

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <div className="container">
        <ul className={styles.items}>
          <li className={styles.item}>
            <Link
              className={cn(styles.link, { [styles.active]: pathname === '/' })}
              href="/"
            >
              Головна
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              className={cn(styles.link, {
                [styles.active]: pathname === '/masters',
              })}
              href="/masters"
            >
              Майстри
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              className={cn(styles.link, {
                [styles.active]: pathname === '/services',
              })}
              href="/services"
            >
              Послуги
            </Link>
          </li>
          <li className={styles.item}>
            <Logo />
          </li>
          <li className={styles.item}>
            <Link
              className={cn(styles.link, {
                [styles.active]: pathname === '/promo',
              })}
              href="/promo"
            >
              Акції
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              className={cn(styles.link, {
                [styles.active]: pathname === '/feedback',
              })}
              href="/feedback"
            >
              Відгуки
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              className={cn(styles.link, {
                [styles.active]: pathname === '/contacts',
              })}
              href="/contacts"
            >
              Контакти
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
