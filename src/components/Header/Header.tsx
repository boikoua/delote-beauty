import Image from 'next/image';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header
      className={styles.header}
      style={{ backgroundImage: `url('./images/header-bg.jpg')` }}
    >
      <div className={styles.overlay}>
        <div className="container">
          <h1 className={styles.title}>
            Салон краси «Delote-Beauty» у Харкові
          </h1>

          <p className={styles.scroll}>
            <Image
              src="/images/icons/mouse.svg"
              alt="Scroll icon"
              width={20}
              height={30}
            />
            <span>Прокрутіть вниз</span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
