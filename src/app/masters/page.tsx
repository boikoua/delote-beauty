import MastersBlock from '@/components/MastersBlock';
import styles from './page.module.scss';

const Masters = () => {
  return (
    <main className={styles.main}>
      <div className="container">
        <h2 className={styles.title}>Наші майстри</h2>
        <MastersBlock />
      </div>
    </main>
  );
};

export default Masters;
