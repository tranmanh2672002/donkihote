'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import Placeholder from '@tiptap/extension-placeholder';
import StarterKit from '@tiptap/starter-kit';
import styles from '../../styles/scss/tiptap.module.scss';

const Tiptap = ({ label, description, setDescription }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Nhập nội dung bài viết...',
        emptyEditorClass: styles.emptyEditor,
      }),
    ],
    content: description,
    onUpdate({ editor }) {
      if (editor.getHTML() === '<p></p>') return setDescription('');
      setDescription(editor.getHTML());
    },
  });

  return (
    <>
      <div className="font-semibold text-[14px] mb-1">
        {label}
        <span className="text-red-500 ml-1">*</span>
      </div>
      <EditorContent className={styles.wrapper} editor={editor} />
    </>
  );
};

export default Tiptap;
