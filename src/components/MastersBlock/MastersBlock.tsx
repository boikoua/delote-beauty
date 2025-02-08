import { mastersData } from '@/api/mastersData';
import styles from './MastersBlock.module.scss';
import MasterCard from '../MasterCard';

const MastersBlock = () => {
  const showMasters = mastersData.map((item) => (
    <MasterCard key={item.id} item={item} />
  ));

  return <section className={styles.block}>{showMasters}</section>;
};

export default MastersBlock;
