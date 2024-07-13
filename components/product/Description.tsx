'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const Description = ({ description }: { description: string }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: description,
  });

  return (
    <>
      <EditorContent editor={editor} disabled />
    </>
  );
};

export default Description;
