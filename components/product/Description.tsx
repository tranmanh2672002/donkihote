'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import styles from '../../styles/scss/tiptap.module.scss';

const Description = ({ description }: { description: string }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: description,
  });

  return (
    <>
      <EditorContent className={styles.content} editor={editor} disabled />
    </>
  );
};

export default Description;
