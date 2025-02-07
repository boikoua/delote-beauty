import AboutUs from '@/components/AboutUs';
import Brands from '@/components/Brands';
import Header from '@/components/Header';
import OurWorks from '@/components/OurWorks';
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
          <Brands />
          <OurWorks />
        </div>
      </main>
    </>
  );
}
