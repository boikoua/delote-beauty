'use client';
import styles from './Accordion.module.scss';
import { IPrice } from '@/types/IPrice';
import { useState } from 'react';

type Props = {
  item: IPrice;
};

const Accordion: React.FC<Props> = ({ item }) => {
  const { id, title, services } = item;

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <article className={styles.accordion}>
      <button className={styles.button} onClick={() => toggleAccordion(id)}>
        {title}
      </button>

      {openIndex === id && (
        <div className={styles.content}>
          <ul className={styles.items}>
            {services.map((service, index) => (
              <li key={index} className={styles.item}>
                {service.name} - {service.price} grn
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
};

export default Accordion;
