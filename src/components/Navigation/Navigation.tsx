'use client';

import Link from 'next/link';
import styles from './Navigation.module.scss';
import Logo from '../Logo';
import { usePathname } from 'next/navigation';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import BurgerMenu from '../BurgerMenu';

const Navigation = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  return (
    <>
      <nav className={styles.nav}>
        <div className="container">
          <div className={styles.desktop}>
            <ul className={styles.items}>
              <li className={styles.item}>
                <Link
                  className={cn(styles.link, {
                    [styles.active]: pathname === '/',
                  })}
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

          <div className={styles.mobile}>
            <Logo />

            <span className="icon-burger" onClick={openMenu}></span>
          </div>
        </div>
      </nav>

      <BurgerMenu isOpen={isOpen} closeMenu={closeMenu} />
    </>
  );
};

export default Navigation;
