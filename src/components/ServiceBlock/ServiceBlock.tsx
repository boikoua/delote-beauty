import { servicesCategories } from '@/api/servicesCategories';
import ServiceCard from '../ServiceCard';
import styles from './ServiceBlock.module.scss';

const ServiceBlock = () => {
  const showServices = servicesCategories.map((item) => (
    <ServiceCard key={item.id} item={item} />
  ));

  return <section className={styles.block}>{showServices}</section>;
};

export default ServiceBlock;
