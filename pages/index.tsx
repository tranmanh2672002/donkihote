import axios from 'axios';
import Header from '../components/Header';
import { IResponseStatus } from '../interfaces/response.interface';
import BackgroundPattern from '../components/BackgroundPattern';
import Intro from '../components/home/Intro';
import SavingGrace from '../components/home/SavingGrace';
import Footer from '../components/Footer';
import Product from '../components/home/Product';
import ScrollToTop from '../components/ScrollToTop';

export default function Home({ data }: { data: any[] }) {
  return (
    <>
      <BackgroundPattern />
      <Header />
      <div className="relative z-10 max-w-[1200px] m-auto mt-[92px] py-4 px-[20px] sm:px-[40px] lg:px-[40]">
        <Intro />
        <SavingGrace />
        <Product />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}
