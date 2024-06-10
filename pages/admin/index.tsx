import { Button, Divider, SimpleGrid, Title } from '@mantine/core';
import axios from 'axios';
import PostFormDialog from '../../components/post/PostFormDialog';
import { useState } from 'react';
import PostItem from '../../components/post/PostItem';
import { IconPlus } from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';
import { IResponseStatus } from '../../interfaces/response.interface';

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
  const [isCreating, setCreating] = useState(false);
  const [description, setDescription] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [dateTime, setDateTime] = useState(null);

  const addToImages = (url: string) => {
    if (!url) return;
    setImages([...images, url]);
  };

  const deleteImage = (url: string) => {
    if (!url) return;
    const newImages = images?.filter((image) => image !== url);
    setImages(newImages);
  };

  const handleSubmit = async () => {
    const data = {
      images,
      description,
      date: dateTime,
    };
    setCreating(true);
    const res = await axios.post(`${process.env.API_BASEURL}/post`, data);
    setCreating(false);
    if (res.data.status === IResponseStatus.success) {
      notifications.show({
        title: 'Bài viết',
        message: 'Tạo mới thành công',
        color: 'blue',
      });
      setOpened(false);
    } else {
      notifications.show({
        title: 'Bài viết',
        message: 'Tạo mới không thành công',
        color: 'red',
      });
    }
  };

  const onClose = () => {
    setOpened(false);
    resetForm();
  };

  const resetForm = () => {
    setDescription('');
    setImages([]);
    setDateTime(null);
  };

  return (
    <div className="max-w-[1200px] mx-auto mt-10 p-4">
      <div className="border rounded-lg ">
        <div className="px-4 my-4 flex items-center justify-between">
          <Title size={20} className="font-semibold">
            Danh sách bài viết
          </Title>
          <Button className="mb-0" leftSection={<IconPlus size={16} />} onClick={() => setOpened(true)}>
            Tạo mới
          </Button>
        </div>
        <Divider />
        <SimpleGrid pt={16} px={16} cols={{ base: 1 }}>
          {data.map((post: any, index) => {
            return <PostItem data={post} key={index} />;
          })}
        </SimpleGrid>
      </div>
      <PostFormDialog
        opened={opened}
        isLoading={isCreating}
        onClose={onClose}
        onSubmit={handleSubmit}
        description={description}
        setDescription={setDescription}
        images={images}
        addToImages={addToImages}
        onDeleteImage={deleteImage}
        dateTime={dateTime}
        setDateTime={setDateTime}
      />
    </div>
  );
}
