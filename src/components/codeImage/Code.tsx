import React from "react";
import styles from "./codeImage.module.scss";

interface CodeType {
  obj?: string;
}

function Code(props: CodeType) {
  return (
    <pre className={styles.preCodeStyle}>
      <code>{props.obj}</code>
    </pre>
  );
}

export default Code;
