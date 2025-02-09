import { brandsData } from '@/api/brandsData';
import styles from './Brands.module.scss';

const Brands = () => {
  const showBrands = brandsData.map((item) => (
    <li
      className={styles.item}
      key={item.id}
      style={{
        backgroundImage: `url('${item.logo}')`,
      }}
    ></li>
  ));

  return (
    <section className={styles.brands} data-aos="fade-up-right">
      <ul className={styles.items}>{showBrands}</ul>
    </section>
  );
};

export default Brands;
