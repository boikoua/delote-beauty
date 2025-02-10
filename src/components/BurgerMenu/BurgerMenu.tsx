'use client';

import Link from 'next/link';
import Logo from '../Logo';
import styles from './BurgerMenu.module.scss';
import cn from 'classnames';
import { usePathname } from 'next/navigation';

type Props = {
  isOpen: boolean;
  closeMenu: () => void;
};

const BurgerMenu: React.FC<Props> = ({ isOpen, closeMenu }) => {
  const pathname = usePathname();

  return (
    <div className={cn(styles.burger, { [styles.open]: isOpen })}>
      <div className={styles.container}>
        <div className={styles.top}>
          <Logo />

          <span className="icon-cross" onClick={closeMenu}></span>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.items}>
            <li className={styles.item}>
              <Link
                className={cn(styles.link, {
                  [styles.active]: pathname === '/',
                })}
                href="/"
                onClick={closeMenu}
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
                onClick={closeMenu}
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
                onClick={closeMenu}
              >
                Послуги
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                className={cn(styles.link, {
                  [styles.active]: pathname === '/promo',
                })}
                href="/promo"
                onClick={closeMenu}
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
                onClick={closeMenu}
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
                onClick={closeMenu}
              >
                Контакти
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default BurgerMenu;
