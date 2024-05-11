'use client'
import React, { useEffect } from 'react'
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";

interface PropsType {
   value: string;
   onChange: (value: string) => void;
}
const Editor = ({ value = '', onChange }) => {
   const initialHTML = "<p>Hello, <strong>world!</strong></p>";
   const editor = useCreateBlockNote();

   useEffect(() => {
      async function loadInitialHTML() {
         const blocks = await editor.tryParseHTMLToBlocks(value);
         editor.replaceBlocks(editor.document, blocks);
      }
      loadInitialHTML();
   }, [editor]);


   const editorContent = async () => {
      const html = await editor.blocksToHTMLLossy(editor.document);
      onChange(html);
   };

   return (
      <div className="w-full h-auto min-h-52 border border-slate-200 rounded">
         <BlockNoteView editor={editor} onChange={editorContent} />
      </div>
   );
}

export default Editor