import { Card, Image, Text } from '@mantine/core';

export default function PostItem({ data }: any) {
  return (
    <Card shadow="sm" padding="sm">
      <Card.Section>
        <Image src={data.images[0]} h={160} alt="No way!" />
      </Card.Section>
      <Text size="md" mt="md">
        {data.description}
      </Text>
    </Card>
  );
}
