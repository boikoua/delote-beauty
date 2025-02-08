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
        <span
          className="icon-arrow"
          style={{
            transform: openIndex === id ? 'rotate(-90deg)' : 'rotate(90deg)',
          }}
        ></span>{' '}
        {title}
      </button>

      {openIndex === id && (
        <div className={styles.content}>
          <ul className={styles.items}>
            {services.map((service, index) => (
              <li key={index} className={styles.item}>
                {service.name} - {service.price} ₴
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
};

export default Accordion;
