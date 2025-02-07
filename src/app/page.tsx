import AboutUs from '@/components/AboutUs';
import Header from '@/components/Header';
import ServiceBlock from '@/components/ServiceBlock';
// import styles from './page.module.scss';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <AboutUs />
          <ServiceBlock />
        </div>
      </main>
      <footer></footer>
    </>
  );
}
