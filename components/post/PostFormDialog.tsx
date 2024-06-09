import { Modal, Button, Grid, Flex, Divider, Image, Box } from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';
import { CldUploadWidget } from 'next-cloudinary';
import Tiptap from './Tiptap';
import styles from '../../styles/scss/postDialog.module.scss';
import { IconUpload, IconX } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

const PostFormDialog = ({
  opened,
  onClose,
  onSubmit,
  description,
  setDescription,
  images,
  addToImages,
  onDeleteImage,
  dateTime,
  setDateTime,
}: any) => {
  const [image, setImage] = useState<string>();
  useEffect(() => {
    addToImages(image);
  }, [image]);

  const isValid = description && dateTime && images?.length > 0;
  return (
    <Modal className={styles.wrapper} title="Tạo bài viết" centered closeOnClickOutside={false} opened={opened} onClose={onClose}>
      <div>
        <Grid>
          <Grid.Col span={{ base: 12, md: 8, lg: 8 }}>
            <Tiptap label={'Mô tả'} description={description} setDescription={setDescription} />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
            <DateTimePicker label="Thời gian" placeholder="Chọn thời gian" clearable value={dateTime} onChange={setDateTime} required />
          </Grid.Col>
          <Grid.Col span={{ base: 12 }}>
            <CldUploadWidget
              options={{ sources: ['local', 'url', 'unsplash'], maxFiles: 1 }}
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
                  <Button variant="outline" leftSection={<IconUpload size="16" />} onClick={handleOnClick}>
                    Tải ảnh lên
                  </Button>
                );
              }}
            </CldUploadWidget>
          </Grid.Col>
          {!!images?.length && (
            <Grid.Col span={{ base: 12 }}>
              <Flex gap={12} wrap={'wrap'} justify={'left'}>
                {images.map((url: string, index: number) => {
                  return (
                    <Box key={index} className={`${styles.image} relative`}>
                      <Image radius="md" h={100} w={100} src={url} />
                      <Box
                        onClick={() => onDeleteImage(url)}
                        className={`absolute hidden ${styles.close} top-1 right-1 p-1 bg-neutral-100 rounded-full`}
                      >
                        <IconX size={16} />
                      </Box>
                    </Box>
                  );
                })}
              </Flex>
            </Grid.Col>
          )}
          <Grid.Col span={{ base: 12 }}>
            <Divider />
            <Flex justify="center" mt={16}>
              <Button disabled={!isValid} onClick={onSubmit}>
                Lưu
              </Button>
            </Flex>
          </Grid.Col>
        </Grid>
      </div>
    </Modal>
  );
};

export default PostFormDialog;
