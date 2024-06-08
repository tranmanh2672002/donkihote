import axios from 'axios';
import Header from '../components/Header';
import { IResponseStatus } from '../interfaces/response.interface';

export async function getServerSideProps() {
  // const dump = {
  //   images: ['link 1', 'link 2'],
  //   description: 'Description 3',
  // };
  // await axios.post(`${process.env.API_BASEURL}`, dump);
  const res2 = await axios.get(`${process.env.API_BASEURL}/post`);
  if (res2.data.status === IResponseStatus.success) {
    const data = res2.data.data;
    return { props: { data } };
  }
  return { props: { data: [] } };
}

export default function Home({ data }: { data: any[] }) {
  return (
    <>
      <Header />
      <div className="content">
        {data.map((recipe: any) => {
          return (
            <div key={recipe.id}>
              <h1>{recipe.name}</h1>
              <p>{recipe.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
