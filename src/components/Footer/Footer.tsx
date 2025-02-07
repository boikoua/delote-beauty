import Logo from '../Logo';
import styles from './Footer.module.scss';
import Author from '../Author';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <Logo />
          </div>

          <div className={styles.contacts}>
            <h3 className={styles.title}>Контакти</h3>
            <ul className={styles.items}>
              <li className={styles.item}>
                <a href="tel:+380976416244 ">+38 097 641 62 44 </a>
              </li>
              <li className={styles.item}>
                <a href="tel:+380664661447">+38 066 466 14 47</a>
              </li>
              <li className={styles.item}>
                <a href="tel:+380931304816">+38 093 130 48 16</a>
              </li>
              <li className={styles.item}>
                <a
                  href="https://www.google.com/maps/place/%D0%A1%D0%B0%D0%BB%D0%BE%D0%BD+%D0%9A%D1%80%D0%B0%D1%81%D0%BE%D1%82%D1%8B+BARBERRY/@49.9736906,36.2444912,14.25z/data=!4m10!1m2!2m1!1z0YHQsNC70L7QvSDQutGA0LDRgdC-0YLRliDRhtC10L3RgtGAINGF0LDRgNGM0LrQvtCy0LAg0LPRg9Cz0Lsg0LzQv9Cw!3m6!1s0x4127a08844a13f33:0x152f8a2a64879db!8m2!3d49.9779101!4d36.249504!15sCkXRgdCw0LvQvtC9INC60YDQsNGB0L7RgtGWINGG0LXQvdGC0YAg0YXQsNGA0YzQutC-0LLQsCDQs9GD0LPQuyDQvNC_0LAiA4gBAZIBDGJlYXV0eV9zYWxvbuABAA!16s%2Fg%2F11dxkp10w1?entry=ttu&g_ep=EgoyMDI1MDIwNS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Аерокосмічний проспект, 24,
                  <br />
                  Харків, Харківська область, 61001
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.schedule}>
            <h3 className={styles.title}>Режим роботи</h3>
            <ul className={styles.items}>
              <li className={styles.item}>З 10:00 до 21:00 (Пн-Пт)</li>
              <li className={styles.item}>З 11:00 до 20:00 (Сб-Нд)</li>
            </ul>
          </div>

          <div className={styles.socials}>
            <h3 className={styles.title}>Ми у Instagram</h3>

            <a href="https://instagram.com">
              <span className="icon-instagram"></span>
            </a>
          </div>
        </div>

        <Author />
      </div>
    </footer>
  );
};

export default Footer;
