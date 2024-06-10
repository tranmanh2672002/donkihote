import { Box, Card, Flex, Image, Text } from '@mantine/core';
import { IconPencil, IconTrash } from '@tabler/icons-react';
import dayjs from 'dayjs';

export default function PostItem({ data, onDelete, onUpdate }: any) {
  return (
    <Card shadow="sm" padding="sm" className="hover:-translate-x-1 transition-all duration-200 cursor-pointer">
      <Flex align="center" justify="space-between">
        <Box>
          <Box className="flex items-center">
            <Text className="text-[14px] font-semibold mr-1">Thời gian:</Text>
            <Text className="text-[14px]">{dayjs(data.date).format('HH:mm, DD-MM-YYYY')}</Text>
          </Box>
          <Box className="flex items-center">
            <Text className="text-[14px] font-semibold mr-1">Ngày tạo:</Text>
            <Text className="text-[14px]">{dayjs(data.createdAt).format('HH:mm, DD-MM-YYYY')}</Text>
          </Box>
        </Box>
        <Box className="flex gap-2 items-center">
          <Image className="select-none" w={60} h={60} src={data.images[0]} alt="No way!" />
          <Box className="flex gap-1">
            <IconPencil className="text-green-500" size={20} onClick={() => onUpdate(data._id)} />
            <IconTrash className="text-red-600" size={20} onClick={() => onDelete(data._id)} />
          </Box>
        </Box>
      </Flex>
    </Card>
  );
}
