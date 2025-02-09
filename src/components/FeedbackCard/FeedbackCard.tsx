import Image from 'next/image';
import styles from './FeedbackCard.module.scss';
import { IFeedback } from '@/types/IFeedback';

type Props = {
  item: IFeedback;
};

const FeedbackCard: React.FC<Props> = ({ item }) => {
  const { photo, name, content } = item;

  return (
    <article className={styles.card}>
      <div className={styles.info}>
        <Image
          className={styles.img}
          src={photo}
          alt="Photo"
          width={200}
          height={200}
        />
        <p className={styles.name}>{name}</p>
      </div>

      <p className={styles.text}>{content}</p>
    </article>
  );
};

export default FeedbackCard;
