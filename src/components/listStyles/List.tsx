import React from "react";
import styles from "./list.module.scss";

export enum changeList {
  Bracket = "bracket",
  Dot = "dot",
  Sublist = "sublist",
  NoBullets = "noBullets",
}
interface listType {
  content?: string[];
  type?: changeList;
  color?: string;
  bold?: boolean;
  href?: string;
  children?: React.ReactNode;
  textArray?: string[];
  text?: string;
  colorWord?: string;
}

export const List = (props: listType) => {
  return (
    <>
      {props.content &&
        props.content.map((item, index) => {
          const firstWord = item.split(" ")[0].length;
          return (
            <li
              key={index}
              className={`${
                (props.type === changeList.Dot && styles.listDot) ||
                (props.type === changeList.Bracket && styles.listBracket) ||
                (props.type === changeList.Sublist && styles.listSublist) ||
                (props.type === changeList.NoBullets && styles.noBullets) ||
                ""
              }`}
            >
              {" "}
              {props.color && (
                <span style={{ color: props.color }}>{item}</span>
              )}
              {props.bold && (
                <span className={styles.bold}>{item.split(" ")[0]}</span>
              )}
              {props.bold && item.slice(firstWord)}
              {(props.color || props.bold) ?  null : item}
              {props.children}
            </li>
          );
        })}
      {props.textArray &&
        props.textArray.map((item, index) => {
          const firstWord = item.split(" ")[0].length;
          return (
            <li
              key={index}
              className={`${
                (props.type === changeList.Dot && styles.listDot) ||
                (props.type === changeList.Bracket && styles.listBracket) ||
                (props.type === changeList.Sublist && styles.listSublist) ||
                (props.type === changeList.NoBullets && styles.noBullets) ||
                ""
              }`}
            >
              <span style={{ color: props.color }}>{item.split(" ")[0]} </span>
              {item.slice(firstWord)}
            </li>
          );
        })}
      {props.href && (
        <li
          className={`${
            (props.type === changeList.Dot && styles.listDot) ||
            (props.type === changeList.Bracket && styles.listBracket) ||
            (props.type === changeList.Sublist && styles.listSublist) ||
            (props.type === changeList.NoBullets && styles.noBullets) ||
            ""
          }`}
        >
          <a href={props.href} target={"_blank"} rel="noreferrer">
            {props.text}
          </a>
        </li>
      )}
    </>
  );
};
