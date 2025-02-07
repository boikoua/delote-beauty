'use client';

import { worksData } from '@/api/worksData';
import styles from './OurWorks.module.scss';
import { useState } from 'react';
import cn from 'classnames';

const OurWorks = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const showWorks = worksData
    .filter((item) => {
      if (activeCategory === 'all') {
        return item;
      } else {
        return item.category === activeCategory;
      }
    })
    .map((item) => (
      <li
        className={styles.photo}
        key={item.id}
        style={{ backgroundImage: `url('${item.photo}')` }}
      ></li>
    ));

  return (
    <section className={styles.works}>
      <h2 className={styles.title}>Наші роботи</h2>

      <ul className={styles.items}>
        <li
          className={cn(styles.item, {
            [styles.active]: activeCategory === 'all',
          })}
          onClick={() => setActiveCategory('all')}
        >
          Показати усі
        </li>
        <li
          className={cn(styles.item, {
            [styles.active]: activeCategory === 'hairstyles',
          })}
          onClick={() => setActiveCategory('hairstyles')}
        >
          Перукарські послуги
        </li>
        <li
          className={cn(styles.item, {
            [styles.active]: activeCategory === 'manicure',
          })}
          onClick={() => setActiveCategory('manicure')}
        >
          Манікюр
        </li>
        <li
          className={cn(styles.item, {
            [styles.active]: activeCategory === 'pedicure',
          })}
          onClick={() => setActiveCategory('pedicure')}
        >
          Педикюр
        </li>
      </ul>

      <ul className={styles.photos}>{showWorks}</ul>
    </section>
  );
};

export default OurWorks;
