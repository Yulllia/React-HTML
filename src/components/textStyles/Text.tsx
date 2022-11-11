import React from "react";
import styles from "./text.module.scss";

interface textType {
  content?: string[];
  children?: React.ReactNode;
  bold?: boolean;
  title?: string;
  color?: string;
  textColor?: string
}

export const Text = (props: textType) => {
  const { content, children, bold, title, color } = props;
  return (
    <>
      {content &&
        content?.map((item, index) => {
          return (
            <p key={index} style={{color: color}}>
              {bold ? (
                <span className={styles.bold} title={title}>
                  {item}
                </span>
              ) : (
                item
              )}
            </p>
          );
        })}
      {children}
    </>
  );
};
