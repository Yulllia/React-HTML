import React, { useState } from "react";
import styles from "components/html-documentation/html.module.scss";
import imagePosition from "assets/image-position.png";
import ReactStars from "react-star-rating-component";
import { changeList, List } from "components/listStyles/List";
import { Text } from "components/textStyles/Text";
import Code from "components/codeImage/Code";

export const Attributes = () => {
  const [count, setCount] = useState<number>(0);
  const reactStarProps = {
    starCount: 5,
    starSize: 24,
    activeColor: "#ffd700",
  };
  return (
    <div>
      <ReactStars
        {...reactStarProps}
        name={"star"}
        value={count}
        onStarClick={(value) => setCount(value)}
      />
      <h2 style={{ marginTop: "unset" }} className={styles.title}>
        Attributes
      </h2>
      <Text
        content={[
          "An attribute is used to define the characteristics of an HTML element and is placed inside the element's opening tag. All attributes are made up of two parts − a name and a value",
          "The name is the property you want to set. For example, the &lt;div&gt; element in the example carries an attribute whose name is align, which you can use to indicate the alignment of div on the page.",
          "The value is what you want the value of the property to be set and always put within quotations. The below example shows three possible values of align attribute: left, center and right.",
        ]}
      />
      <Text bold={true} content={["Examples:"]} />
      <Code
        obj={`
      <body>
        <div align='left'>Left</div>
        <div align='center'>Center</div>
        <div align='right'>Right</div>
      </body>
      `}
      />
      <img
        className={styles.imageInfo}
        src={imagePosition}
        alt="align-attribute"
      />
      <Text
        content={[
          "In the image above we can see how attribute align can define how should to aline text in elemen",
          "All HTML elements can have attributes",
        ]}
      />
      <ul>
        <List
          content={[
            "Attributes provide additional information about elements",
            "Attributes are always specified in the start tag",
            "Attributes usually come in name/value pairs like: name='value'",
          ]}
          type={changeList.NoBullets}
        />
      </ul>
      <Text
        content={[
          "Global Attributes (attributes which have all HTML elements):",
        ]}
      />
      <ul>
        <List
          type={changeList.NoBullets}
          color={"blue"}
          textArray={[
            "accesskey Specifies a shortcut key to activate/focus an element",
            "class Specifies one or more classnames for an element (refers to a class in a style sheet)",
            "contenteditable Specifies whether the content of an element is editable or not",
            "data-* Used to store custom data private to the page or application",
            "dir Specifies the text direction for the content in an element",
            "draggable Specifies whether an element is draggable or not",
            "hidden Specifies that an element is not yet, or is no longer, relevant",
            "id Specifies a unique id for an element",
            "lang Specifies the language of the element's content",
            "spellcheck Specifies whether the element is to have its spelling and grammar checked or not",
            "style Specifies an inline CSS style for an element",
            "tabindex Specifies the tabbing order of an element",
            "title  Specifies extra information about an element",
            "translate Specifies whether the content of an element should be translated or not",
          ]}
        ></List>
      </ul>
      <h2>Core Attributes:</h2>
      <Text
        content={[
          "The four core attributes that can be used on the majority of HTML elements (although not all) are:",
        ]}
      />
      <ul>
        <List content={["Id", "Title", "Class", "Style"]} />
      </ul>
      <h2>The Id Attribute</h2>
      <Text
        content={[
          "The id attribute of an HTML tag can be used to uniquely identify any element within an HTML page. There are two primary reasons that you might want to use an id attribute on an element −",
        ]}
      />
      <ul>
        <List
          content={[
            "If an element carries an id attribute as a unique identifier, it is possible to identify just that element and its content.",
            "If you have two elements of the same name within a Web page (or style sheet), you can use the id attribute to distinguish between elements that have the same name.",
          ]}
        />
      </ul>
      <Text
        content={[
          "We will discuss the style sheet in a separate tutorial. For now, let's use the id attribute to distinguish between two paragraph elements as shown below.",
        ]}
      />
      <h2>The title Attribute</h2>
      <Text>
        The title attribute gives a suggested title for the element. They syntax
        for the title attribute is similar as explained for id attribute − The
        behavior of this attribute will depend upon the element that carries it,
        although it is often displayed as a tooltip when the cursor comes over
        the element or while the element is loading.
      </Text>
      <Text bold={true} content={["Code:"]} />
      <Code
        obj={`
        <body>
         <div title="Title text">Element has title</div>
        </body>
      `}
      />
      <Text bold={true} content={["Result:"]} />
      <Text bold={true} title={"Title Text"} content={["Element has title"]} />
      <h2>The class Attribute</h2>
      <Text
        content={[
          "The class attribute is used to associate an element with a style sheet, and specifies the class of element. You will learn more about the use of the class attribute when you will learn Cascading Style Sheets (CSS). So for now you can avoid it.",
          "The value of the attribute may also be a space-separated list of class names.",
        ]}
      />
      <Text bold={true} content={["Code:"]} />
      <Code
        obj={`
        <body>
          <div class="className1 className2">Element with class</div>
        </body>
      `}
      />
      <h2>The style Attribute</h2>
      <Text
        content={[
          "The style attribute allows you to specify Cascading Style Sheet (CSS) rules within the element.",
        ]}
      />
      <Text bold={true} content={["Code:"]} />
      <Code
        obj={`
       <body>
        <div style="color:#FF0000;">Element with red color</div>
       </body>
      `}
      />
      <Text bold={true} content={["Result:"]} />
      <Text color={"red"} content={["Element with red color"]} />
    </div>
  );
};
