import axios from 'axios';
import BackgroundPattern from '../../components/BackgroundPattern';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import PostList from '../../components/product/PostList';
import ScrollToTop from '../../components/ScrollToTop';
import { IResponseStatus } from '../../interfaces/response.interface';

// api
export async function getServerSideProps() {
  try {
    const res2 = await axios.get(`${process.env.API_BASEURL}/post`);
    if (res2.data.status === IResponseStatus.success) {
      const data = res2.data.data;
      return { props: { data } };
    }
    return { props: { data: [] } };
  } catch (error) {
    console.log(error);
  }
}

export default function Product({ data }: { data: any[] }) {
  return (
    <>
      <BackgroundPattern />
      <Header />
      <div className="relative z-10 max-w-[800px] m-auto mt-[92px] py-4 px-[20px] sm:px-[40px] lg:px-[40]">
        <PostList data={data} />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}
