import Image from 'next/image';
import styles from './page.module.scss';

const NotFound = () => {
  return (
    <main className={styles.main}>
      <div className="container">
        <Image
          className={styles.img}
          src="/images/not-found.png"
          alt="Not Found Page"
          width={600}
          height={450}
        />
      </div>
    </main>
  );
};

export default NotFound;
