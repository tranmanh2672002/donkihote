import Header from '../components/Header';
import Footer from '../components/Footer';
import BackgroundPattern from '../components/BackgroundPattern';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <BackgroundPattern />
      <main>{children}</main>
      <Footer />
    </>
  );
}
