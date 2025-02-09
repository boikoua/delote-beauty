import { IService } from '@/types/IService';
import styles from './ServiceCard.module.scss';

type Props = {
  item: IService;
};

const ServiceCard: React.FC<Props> = ({ item }) => {
  const { img, title } = item;

  return (
    <article className={styles.card} data-aos="zoom-in">
      <div className={styles.border}></div>

      <div
        className={styles.img}
        style={{ backgroundImage: `url('${img}')` }}
      ></div>

      <h3 className={styles.title}>{title}</h3>
    </article>
  );
};

export default ServiceCard;
