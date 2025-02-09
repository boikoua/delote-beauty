import styles from './page.module.scss';

const Promo = () => {
  return (
    <main className={styles.main}>
      <div className="container">
        <h2 className={styles.title}>Наші акції та бонуси</h2>

        <article className={styles.item} data-aos="zoom-in">
          <h3 className={styles.subtitle}>
            Як працює бонусна програма в салонах Delote Beauty?
          </h3>

          <p className={styles.text}>
            Після кожного відвідування салону краси Wizard на ваш бонусний
            рахунок у вигляді балів нараховується 3-10% від суми оплачених
            послуг.
          </p>

          <p className={styles.text}>1 бонус = 1 гривня</p>
        </article>

        <article className={styles.item} data-aos="zoom-in">
          <h3 className={styles.subtitle}>Типы бонусных карт:</h3>

          <p className={styles.text}>3% від 500 грн. до 14999 грн.</p>

          <p className={styles.text}>5 % від 15000 грн. до 49999 грн.</p>

          <p className={styles.text}>7% від 50000 грн. до 79999 грн.</p>

          <p className={styles.text}>10% від 80 000 грн.</p>
        </article>

        <article className={styles.item} data-aos="zoom-in">
          <h3 className={styles.subtitle}>Для іменинників.</h3>

          <p className={styles.text}>
            Для іменинників у нас подарунок -20% знижки на всі послуги Wizard за
            7 днів до і після дня народження.
          </p>
        </article>

        <article className={styles.item} data-aos="zoom-in">
          <h3 className={styles.subtitle}>Термін бонусів:</h3>

          <p className={styles.text}>
            Бонусний рахунок діє 6 місяців від дати останнього відвідування.
          </p>

          <p className={styles.text}>
            Ви завжди можете дізнатися кількість бонусів на вашому рахунку, і
            іншу інформацію про бонусну програму у адміністратора Delote Beauty.
          </p>
        </article>
      </div>
    </main>
  );
};

export default Promo;
