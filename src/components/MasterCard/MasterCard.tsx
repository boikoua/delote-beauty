import { IMaster } from '@/types/IMaster';
import styles from './MasterCard.module.scss';

type Props = {
  item: IMaster;
};

const MasterCard: React.FC<Props> = ({ item }) => {
  const { photo, name, specialty } = item;

  return (
    <article className={styles.card} data-aos="zoom-in">
      <div className={styles.border}></div>

      <div
        className={styles.img}
        style={{ backgroundImage: `url('${photo}')` }}
      ></div>

      <h3 className={styles.title}>{name}</h3>

      <p className={styles.specialty}>{specialty}</p>
    </article>
  );
};

export default MasterCard;
