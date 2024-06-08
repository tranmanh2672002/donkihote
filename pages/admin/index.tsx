import { Button } from '@mantine/core';
import axios from 'axios';
import PostFormDialog from '../../components/post/PostFormDialog';
import { useState } from 'react';

const fetData = async () => {
  const res = await axios.get(`${process.env.API_BASEURL}/post`);
  return res?.data?.data || [];
};

export async function getServerSideProps() {
  const data = await fetData();
  return { props: { data } };
}

export default function AdminPostList({ data }: { data: any[] }) {
  const [opened, setOpened] = useState(false);
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [dateTime, setDateTime] = useState(null);

  const handleSubmit = () => {
    // Xử lý dữ liệu và tạo đối tượng ở đây
    console.log('Name:', name);
    console.log('Image:', image);
    console.log('Date Time:', dateTime);
  };

  return (
    <>
      <div>
        <Button color="teal" onClick={() => setOpened(true)}>
          Tạo mới
        </Button>
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
      </div>
      <PostFormDialog
        opened={opened}
        onClose={() => setOpened(false)}
        onSubmit={handleSubmit}
        name={name}
        setName={setName}
        image={image}
        setImage={setImage}
        dateTime={dateTime}
        setDateTime={setDateTime}
      />
    </>
  );
}
