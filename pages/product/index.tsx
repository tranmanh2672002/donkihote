import ScrollToTop from '../../components/ScrollToTop';
import dynamic from 'next/dynamic';

const DynamicPostList = dynamic(() => import('../../components/product/PostList'), {
  ssr: false,
});

export default function Product() {
  return (
    <>
      <div className="relative z-10 max-w-[800px] m-auto mt-[92px] py-4 px-[20px] sm:px-[40px] lg:px-[40]">
        <DynamicPostList />
      </div>
      <ScrollToTop />
    </>
  );
}
