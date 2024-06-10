import { Button, Divider, SimpleGrid, Text, Title } from '@mantine/core';
import axios from 'axios';
import PostFormDialog from '../../components/post/PostFormDialog';
import { useState } from 'react';
import PostItem from '../../components/post/PostItem';
import { IconPlus } from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';
import { IResponseStatus } from '../../interfaces/response.interface';
import { modals } from '@mantine/modals';
import dayjs, { Dayjs } from 'dayjs';

const fetData = async () => {
  const res = await axios.get(`${process.env.API_BASEURL}/post`);
  return res?.data?.data || [];
};

export async function getServerSideProps() {
  const data = await fetData();
  return { props: { data } };
}

export default function AdminPostList({ data }: { data: any[] }) {
  const [posts, setPosts] = useState(data || []);
  const [opened, setOpened] = useState(false);
  const [currId, setCurr] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [description, setDescription] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [dateTime, setDateTime] = useState<Date | Dayjs | null>(null);

  const addToImages = (url: string) => {
    if (!url) return;
    setImages([...images, url]);
  };

  const deleteImage = (url: string) => {
    if (!url) return;
    const newImages = images?.filter((image) => image !== url);
    setImages(newImages);
  };

  const handleCreate = async () => {
    const data = {
      images,
      description,
      date: dateTime,
    };
    setLoading(true);
    const res = await axios.post(`${process.env.API_BASEURL}/post`, data);
    setLoading(false);
    if (res.data.status === IResponseStatus.success) {
      notifications.show({
        title: 'Bài viết',
        message: 'Tạo mới thành công',
        color: 'green',
      });
      setPosts([res.data.data, ...posts]);
      setOpened(false);
      resetForm();
    } else {
      notifications.show({
        title: 'Bài viết',
        message: 'Tạo mới không thành công',
        color: 'red',
      });
    }
  };

  const handleUpdate = async () => {
    const data = {
      images,
      description,
      date: dateTime,
    };
    setLoading(true);
    const res = await axios.patch(`${process.env.API_BASEURL}/post/${currId}`, data);
    setLoading(false);
    if (res.data.status === IResponseStatus.success) {
      notifications.show({
        title: 'Bài viết',
        message: 'Cập nhật thành công',
        color: 'green',
      });
      const newPost = posts.map((post) => (post._id === currId ? res.data.data : post));
      setPosts(newPost);
    } else {
      notifications.show({
        title: 'Bài viết',
        message: 'Cập nhật không thành công',
        color: 'red',
      });
    }
    setCurr('');
    setOpened(false);
    resetForm();
  };

  const handleDelete = async (id: string) => {
    if (!id) return;
    const res = await axios.delete(`${process.env.API_BASEURL}/post/${id}`);
    if (res.data.status === IResponseStatus.success) {
      notifications.show({
        title: 'Bài viết',
        message: 'Xóa mới thành công',
        color: 'blue',
      });
      const newPost = posts.filter((post) => post._id !== id);
      setPosts(newPost);
    } else {
      notifications.show({
        title: 'Bài viết',
        message: 'Xóa mới không thành công',
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

  const onUpdate = async (id: string) => {
    if (!id) return;
    const res = await axios.get(`${process.env.API_BASEURL}/post/${id}`);
    if (res.data.status === IResponseStatus.success) {
      const data = res.data.data;
      setDescription(data.description);
      setImages(data.images);
      setDateTime(dayjs(data.date).toDate());
      setCurr(id);
      setOpened(true);
    }
  };

  const confirmDelete = (id: string) =>
    modals.openConfirmModal({
      title: 'Xác nhận',
      children: <Text size="sm">Bạn có chắc chắn muốn xóa bài viết này?</Text>,
      labels: { confirm: 'Đồng ý', cancel: 'Hủy' },
      onConfirm: () => handleDelete(id),
    });

  const onSubmit = () => {
    if (currId) {
      handleUpdate();
    } else {
      handleCreate();
    }
  };

  return (
    <div className="max-w-[1000px] mx-auto mt-10 p-4">
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
        <SimpleGrid p={16} cols={{ base: 1 }}>
          {posts.map((post: any, index) => {
            return <PostItem data={post} key={index} onDelete={confirmDelete} onUpdate={onUpdate} />;
          })}
        </SimpleGrid>
      </div>
      <PostFormDialog
        opened={opened}
        isLoading={isLoading}
        onClose={onClose}
        onSubmit={onSubmit}
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
