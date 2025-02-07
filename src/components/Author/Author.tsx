import styles from './Author.module.scss';

const Author = () => {
  return (
    <section className={styles.author}>
      <a href="https://github.com/boikoua" target="_blank">
        <span className="icon-github"></span>
        <span>Dmitry Boiko</span>
      </a>
    </section>
  );
};

export default Author;
