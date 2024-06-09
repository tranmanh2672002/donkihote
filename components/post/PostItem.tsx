import { Card, Image, Text } from '@mantine/core';

export default function PostItem({ data }: any) {
  return (
    <Card shadow="sm" padding="sm">
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
          h={160}
          alt="No way!"
        />
      </Card.Section>
      <Text size="md" mt="md">
        {data.description}
      </Text>
    </Card>
  );
}
