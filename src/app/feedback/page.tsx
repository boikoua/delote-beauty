import FeedbackCard from '@/components/FeedbackCard';
import styles from './page.module.scss';
import { feedbacksData } from '@/api/feedbacksData';

const Feedback = () => {
  const showFeedbacks = feedbacksData.map((item) => (
    <FeedbackCard item={item} key={item.id} />
  ));

  return (
    <main className={styles.main}>
      <div className="container">
        <h2 className={styles.title}>Відгуки клієнтів</h2>

        <div className={styles.wrapper}>{showFeedbacks}</div>
      </div>
    </main>
  );
};

export default Feedback;
