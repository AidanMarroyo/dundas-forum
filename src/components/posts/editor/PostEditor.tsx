'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import './styles.css';

export default function PostEditor() {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bold: false,
        italic: false,
      }),
      Placeholder.configure({
        placeholder: "What's crack-a-lackin'?",
      }),
    ],
    content: '', // Ensure content is empty initially
  });

  const input =
    editor?.getText({
      blockSeparator: '\n',
    }) || '';
  return (
    <div className='flex flex-col gap-5 rounded-2xl bg-card p-5 shadow-sm'>
      <div className='flex gap-5'>
        avatar
        <div className='w-full'>
          <EditorContent
            editor={editor}
            className={cn(
              'max-h-[20rem] w-full overflow-y-auto rounded-2xl bg-background px-5 py-3'
              //   isDragActive && 'outline-dashed'
            )}
            // onPaste={onpaste}
          />

          <input readOnly />
        </div>
      </div>
      <div className='flex items-center justify-end gap-3'>
        <>
          <span className='text-sm'>Upload Progress</span>
        </>
      </div>
      <Button>Save</Button>
    </div>
  );
}
