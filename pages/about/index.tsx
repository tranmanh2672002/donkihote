import BackgroundPattern from '../../components/BackgroundPattern';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ScrollToTop from '../../components/ScrollToTop';

export default function Product({ data }: { data: any[] }) {
  return (
    <>
      <BackgroundPattern />
      <Header />
      <div className="relative z-10 max-w-[1200px] m-auto mt-[92px] py-4 px-[20px] sm:px-[40px] lg:px-[40]">About</div>
      <Footer />
      <ScrollToTop />
    </>
  );
}
