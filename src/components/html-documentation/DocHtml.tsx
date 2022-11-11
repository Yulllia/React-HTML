import React from "react";
import styles from "./html.module.scss";
import image1 from "assets/image1.png";
import image2 from "assets/image2.png";
import image3 from "assets/image3.png";
import image4 from "assets/image4.png";
import { Attributes } from "components/attributes/Attributes";
import { changeList, List } from "components/listStyles/List";
import { Text } from "components/textStyles/Text";


export const changeColor = (color: string, content: string) => {
  return <span style={{ color: color }}>{content}</span>;
};

export const DocHtml = () => {
  const changeTags = (content: string) => {
    const coma = content.split(",");
    const item = coma.map((item, index) => (
      <span key={index} className={styles.tagColor}>
        {item}
        <span className={styles.comaSeparator}>, </span>
      </span>
    ));
    return item;
  };
  return (
    <div>
      <h1 className={styles.title}>Introduction</h1>
      <div className={styles.contentBlock}>
        <Text>
          <span style={{ fontWeight: "bold" }}>H</span>ello my friend, I'm{" "}
          <span className={styles.userName}>AndrTiger</span>, one who wants to
          help you to achieve your dream - become a developer.
        </Text>
        <Text
          content={[
            "I will be in touch all the time, all that you need to talk with me it's send your feedback after each of your adventures with your opinion, what was good or what bad, more feedback will help to make the best platform for learning.",
            "Now let's talk about our scheme to learn, each adventure includes 2 parts (3 only premium):",
          ]}
        />
        <ol>
          <List
            bold={true}
            content={[
              "Theory - information about the theme, don't need to try to learn by heart, your general goal to understand the theme, if you forget which command can do something for you it’s not critical, you need to know that this command exists and know what this command does.Then in case you forget a command name, you can easily find this on the internet and use this.",
              "Practice - Next important step in learning is practice. Most courses don’t have enough practice tasks and as a result students lose their knowledge so fast.",
              "Homework (only premium) - Premium users will have homework after practice tasks. It’s similar to practice tasks but are more common for standard programmer work.",
            ]}
            type={changeList.Bracket}
          />
        </ol>
        <Text>
          So let’s start with base information <br />
          We have HTML, CSS and JS - that’s all what you need to know to make
          your first site. For example we need to have an button with next
          requirement: <br />
        </Text>
        <ol>
          <List
            content={[
              "Text - “Click”",
              "Background - “green”",
              "When user click a button he should to see pop up with this text “Hello”",
            ]}
            type={changeList.Dot}
          />
        </ol>
        <img className={styles.imageInfo} src={image2} alt="button-click" />
        <ul>
          <List
            content={[
              "HTML - to be responsible for create button with text “Click”",
              "CSS - to be responsible for set background to “green”",
              "JS - to be responsible for set click on this button and show pop up with text “Hello”",
            ]}
          />
        </ul>
        <Text
          content={["In first course we will learn HTML", "What is HTML?"]}
        />
        <List
          type={changeList.NoBullets}
          bold={true}
          content={["HTML - HyperText Markup Language, sounds difficult"]}
        />
        <Text content={["In HTML we have next technical stuff:"]} />
        <ol>
          <List content={["Element"]} type={changeList.Sublist} />
          <List content={["Tag"]} type={changeList.Sublist}>
            <ol>
              <List
                content={[
                  "tag name",
                  "start tag",
                  "end tag",
                  "self closing tag",
                ]}
                type={changeList.Sublist}
              />
            </ol>
          </List>
          <List content={["Attribute"]} type={changeList.Sublist}>
            <ol>
              <List
                content={["Attribute name", "Attribute value"]}
                type={changeList.Sublist}
              />
            </ol>
          </List>
          <List content={["Content"]} type={changeList.Sublist} />
        </ol>
        <Text
          content={[
            "In an image below we can see explain where which part is:",
          ]}
        />
        <img className={styles.imageInfo} src={image4} alt="attribute" />
        <Text
          content={[
            "in the picture above we have element h1, tag h1, attribute name “class” with attribute name “Primary” and content text “Example Heading",
          ]}
        />
        <h2>A Simple HTML Document</h2>
        <Text
          content={[
            "You can try to write your first HTML code with any code editor, we are recommended use Visual Studio Code but you can select what you like more:",
            "Free:",
          ]}
        />
        <ul>
          <List
            type={changeList.NoBullets}
            href={"https://code.visualstudio.com/"}
            text={"Visual Studio Code"}
          />
          <List
            type={changeList.NoBullets}
            href={"https://atom.io/"}
            text={"Atom"}
          />
          <List
            type={changeList.NoBullets}
            href={"https://notepad-plus-plus.org/downloads/"}
            text={"Notepad++"}
          />
          <List
            type={changeList.NoBullets}
            href={"https://brackets.io/"}
            text={"Brackets"}
          />
        </ul>
        <Text content={["Paid:"]} />
        <ul>
          <List
            type={changeList.NoBullets}
            href={
              "https://www.jetbrains.com/webstorm/promo/?source=google&medium=cpc&campaign=9641686275&term=webstorm&gclid=CjwKCAiA9qKbBhAzEiwAS4yeDR0wmnagv8aD2AcCXd2EeWgqG-2J2GhMxugo2cxTLOn1O6bUiyGlWxoC0HsQAvD_BwE"
            }
            text={"Webstorm"}
          />
          <List
            type={changeList.NoBullets}
            href={"https://www.sublimetext.com/"}
            text={"Sublime Text"}
          />
        </ul>
        <p>
          <a
            href="https://www.hostinger.com/tutorials/best-code-editors"
            className={styles.colorLink}
          >
            Another
          </a>
        </p>
        <Text
          content={[
            "Look at a short tutorial on how you can work with a code editor. Write your first HTML code with us :)",
          ]}
        />
        <img className={styles.imageInfo} src={image3} alt="code-editor" />
        <Text
          content={[
            "Now we are in the same page in your code editor should be same code:",
            "Small explaining what these elements means:",
          ]}
        />
        <Text>
            <p>The {changeColor("red", "<!DOCTYPE html>")} declaration defines that this document is an HTML5 document</p>
            <p>The {changeColor("red", "<html>")} element is the root element of an HTML page</p>
            <p>The {changeColor("red", "<head>")} element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)</p>
            <p>The {changeColor("red", "<title>")} element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.</p>
            <p>The {changeColor("red", "<body>")} element. You use the div tag in HTML to divide sections of an HTML document.</p>
            <p>The {changeColor("red", "<div>")} element. You use the <span style={{color: "red"}}>div</span> tag in HTML to divide sections of an HTML document. </p> 
        </Text>
        <Text
          content={[
            "After opening your index.html in your browser you should to see same result:",
          ]}
        />
        <img className={styles.imageInfo} src={image1} alt="html-page" />
        <ol>
          <List
            colorWord={"div"}
            content={[
              "Your content in title element",
              "path to your file which you open",
              `Your div with content`,
            ]}
            type={changeList.Bracket}
          />
        </ol>
        <p>
          Tags can be self closing or not, for example you can write tag{" "}
          {changeColor("red", "div")} in two ways
        </p>
        <ol>
          <List
            color={"red"}
            content={["<div></div>", "<div/>"]}
            type={changeList.Dot}
          />
        </ol>
        <p>
          We have a list of tags which is self closing:{" "}
          {changeTags(
            "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr,command,keygen,menuitem"
          )}
        </p>
        <Text
          content={[
            "You don't need to learn these elements by heart, in this course we will learn all elements that you need to know in your first job.",
          ]}
        />
      </div>
      <div className={styles.contentBlock}>
        <Attributes />
      </div>
    </div>
  );
};
