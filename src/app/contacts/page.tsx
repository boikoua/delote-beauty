import styles from './page.module.scss';

const Contacts = () => {
  return (
    <main className={styles.main}>
      <div className="container">
        <h2 className={styles.title}>Наші контакти</h2>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17261.981852018034!2d36.244491204243495!3d49.973690620828044!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a08844a13f33%3A0x152f8a2a64879db!2z0KHQsNC70L7QvSDQmtGA0LDRgdC-0YLRiyBCQVJCRVJSWQ!5e0!3m2!1sru!2sua!4v1738950953638!5m2!1sru!2sua"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  );
};

export default Contacts;
