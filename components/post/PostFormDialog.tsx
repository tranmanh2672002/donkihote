// components/CreateObjectModal.js
import { Modal, Textarea, FileInput, Button } from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';
import { CldUploadWidget } from 'next-cloudinary';

const PostFormDialog = ({ opened, onClose, onSubmit, name, setName, image, setImage, dateTime, setDateTime }: any) => {
  const handleSubmit = () => {
    onSubmit();
    // onClose();
  };

  return (
    <Modal opened={opened} onClose={onClose} title="Tạo bài viết">
      <div>
        <Textarea label="Name" placeholder="Nhập tên đối tượng" value={name} onChange={(event) => setName(event.currentTarget.value)} required />
        <CldUploadWidget
          options={{ sources: ['local', 'url', 'unsplash'] }}
          signatureEndpoint="/api/sign-cloudinary-params"
          uploadPreset="donkihote"
          onSuccess={(result, { widget }) => {
            setImage((result?.info as any)?.secure_url);
            widget.close();
          }}
        >
          {({ open }) => {
            function handleOnClick() {
              open();
            }
            return (
              <Button onClick={handleOnClick} color="teal">
                Upload an Image
              </Button>
            );
          }}
        </CldUploadWidget>
        <DateTimePicker label="Date Time" placeholder="Chọn ngày và giờ" value={dateTime} onChange={setDateTime} required />
        <Button onClick={handleSubmit}>Lưu</Button>
      </div>
    </Modal>
  );
};

export default PostFormDialog;
