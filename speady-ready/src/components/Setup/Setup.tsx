import { useState, useEffect } from "preact/hooks";

import { Button } from "../Button/Button";

import styles from "./Setup.module.css";

const defaultText = `Loremipsumdolorsitametconsectetur adipisicing elit. Veniam dignissimos facere ab, rerum dicta vitae dolorem quisquam accusantium perferendis ad, obcaecati, praesentium sint. Voluptates, officiis illum sapiente, numquam optio ducimus ipsa eaque ratione vel, repudiandae adipisci iste consequatur molestiae magnam? Consequatur quidem qui est ipsa. Quisquam velit accusantium laborum voluptatem.`;
// const defaultText = `Loremipsumdolorsitametconsectetur`;

export const Setup = ({ onSubmit }) => {
  const [text, setText] = useState(defaultText);

  const handleTypeText = ({ target }) => {
    setText(target.value);
  };

  const handleUploadFile = ({ target }) => {
    const fileReader = new FileReader();

    fileReader.onload = ({ target }) => setText(target.result as string);
    fileReader.readAsText(target.files[0], "windows-1251");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(text);
  };

  return (
    <section className={styles.Setup}>
      <form onSubmit={handleSubmit}>
        <h2>Paste text</h2>
        <textarea onChange={handleTypeText} value={text}></textarea>
        <h2>or upload text file</h2>
        <input onChange={handleUploadFile} type="file" />
        <Button disabled={!text}>Start reading</Button>
      </form>
    </section>
  );
};
