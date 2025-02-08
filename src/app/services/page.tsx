import { priceData } from '@/api/priceData';
import styles from './page.module.scss';
import Accordion from '@/components/Accordion';

const Services = () => {
  const showServices = priceData.map((item) => (
    <Accordion key={item.id} item={item} />
  ));

  return (
    <main className={styles.main}>
      <div className="container">
        <h2 className={styles.title}>Наші послуги</h2>

        <div className={styles.services}>{showServices}</div>
      </div>
    </main>
  );
};

export default Services;
