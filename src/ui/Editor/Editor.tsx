"use client";

// Importing helper modules
import { useState, useMemo } from "react";

// Importing styles
import "react-quill/dist/quill.snow.css";
import styles from "./styles.module.css";

import dynamic from "next/dynamic";


interface EditorProps {
  defaultValue?: string;
}

export const Editor = ({ defaultValue }: EditorProps) => {
  // Editor state
  const [value, setValue] = useState(defaultValue);

  /*
    NOTE:
    import react-quill this way because of document is not defined error
    ref: https://stackoverflow.com/questions/73047747/error-referenceerror-document-is-not-defined-nextjs
  */
  const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }),[]);

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "blockquote", "code-block"],
        [
          { list: "ordered" },
          { list: "bullet" },
        ],
      ],
    },
    clipboard: {
      matchVisual: true,
    },
  }

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "code-block",
    "clean",
  ];

  return (
    <ReactQuill
      className={styles["editor"]}
      theme="snow"
      value={value}
      formats={formats}
      modules={modules}
      placeholder={"What did you grasp from it?"}
      onChange={(value) => setValue(value)}
    />
  );
};

export default Editor;
