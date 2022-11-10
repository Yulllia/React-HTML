import React, { useState } from 'react'
import { changeColor, changeWeight } from '../html-documentation/DocHtml'
import styles from '../html-documentation/html.module.scss'
import imagePosition from '../assets/image-position.png'
import ReactStars from 'react-star-rating-component';

function Attributes() {
  const [count, setCount] = useState<number>(0);
  const reactStarProps = { 
    starCount: 5,
    starSize: 24,
    activeColor: "#ffd700"
  }
  return (
    <div>
        <ReactStars {...reactStarProps} name={'star'} value={count} onStarClick={(value)=>setCount(value)}/>
        <h2 style={{marginTop: 'unset'}} className={styles.title}>Attributes</h2>
        <p>
        An attribute is used to define the characteristics of an HTML element and is placed inside the element's opening tag. All attributes are made up of two parts − a name and a value
        </p>
        <p>
        The name is the property you want to set. For example, the &lt;div&gt; element in the example carries an attribute whose name is align, which you can use to indicate the alignment of div on the page.
        </p>
        <p>
        The value is what you want the value of the property to be set and always put within quotations. The below example shows three possible values of align attribute: left, center and right.
        </p>
        <p>{changeWeight('Examples:')}</p>
        <img className={styles.imageInfo} src={imagePosition} alt="align-attribute"/>
        <p>In the image above we can see how attribute align can define how should to aline text in element</p>
        <p>All HTML elements can have attributes</p>
        <ul className={styles.noBullets}>
          <li>Attributes provide additional information about elements</li>
          <li>Attributes are always specified in the start tag</li>
          <li>Attributes usually come in name/value pairs like: name="value"</li>
        </ul>
        <p>Global Attributes (attributes which have all HTML elements):</p>
        <ul className={styles.noBullets}>
          <li>{changeColor("blue", "accesskey")} "Specifies a shortcut key to activate/focus an element"</li>
          <li>{changeColor("blue", "class")} "Specifies one or more classnames for an element (refers to a class in a style sheet)"</li>
          <li>{changeColor("blue", "contenteditable")} "Specifies whether the content of an element is editable or not"</li>
          <li>{changeColor("blue", "data-*")} "Used to store custom data private to the page or application"</li>
          <li>{changeColor("blue", "dir")} "Specifies the text direction for the content in an element"</li>
          <li>{changeColor("blue", "draggable")} "Specifies whether an element is draggable or not"</li>
          <li>{changeColor("blue", "hidden")} "Specifies that an element is not yet, or is no longer, relevant"</li>
          <li>{changeColor("blue", "id")} "Specifies a unique id for an element"</li>
          <li>{changeColor("blue", "lang")} "Specifies the language of the element's content"</li>
          <li>{changeColor("blue", "spellcheck ")} "Specifies whether the element is to have its spelling and grammar checked or not"
          </li>
          <li>{changeColor("blue", "style")} "Specifies an inline CSS style for an element"</li>
          <li>{changeColor("blue", "tabindex")} "Specifies the tabbing order of an element"</li>
          <li>{changeColor("blue", "title")} "Specifies extra information about an element"</li>
          <li>{changeColor("blue", "translate")} "Specifies whether the content of an element should be translated or not"</li>
        </ul>
        <h2>Core Attributes:</h2>
        <p>The four core attributes that can be used on the majority of HTML elements (although not all) are:</p>
        <ul>
          <li>Id</li>
          <li>Title</li>
          <li>Class</li>
          <li>Style</li>
        </ul>
        <h2>The Id Attribute</h2>
        <p>The id attribute of an HTML tag can be used to uniquely identify any element within an HTML page. There are two primary reasons that you might want to use an id attribute on an element −</p>
        <ul>
          <li>If an element carries an id attribute as a unique identifier, it is possible to identify just that element and its content.</li>
          <li>If you have two elements of the same name within a Web page (or style sheet), you can use the id attribute to distinguish between elements that have the same name.</li>
        </ul>
        <p>We will discuss the style sheet in a separate tutorial. For now, let's use the id attribute to distinguish between two paragraph elements as shown below.</p>
        <h2>The title Attribute</h2>
        <p>The title attribute gives a suggested title for the element. They syntax for the title attribute is similar as explained for id attribute −</p>
        <p>The behavior of this attribute will depend upon the element that carries it, although it is often displayed as a tooltip when the cursor comes over the element or while the element is loading.</p>
        <p>{changeWeight('Code:')}</p>
        <img alt="title-attribute"/>
        <p>{changeWeight('Result:')}</p>
        <p>{changeWeight('Element has title', 'Title Text')}</p>
        <h2>The class Attribute</h2>
        <p>The class attribute is used to associate an element with a style sheet, and specifies the class of element. You will learn more about the use of the class attribute when you will learn Cascading Style Sheets (CSS). So for now you can avoid it.</p>
        <p>The value of the attribute may also be a space-separated list of class names.</p>
        <p>{changeWeight('Code:')}</p>
        <img alt="className-attribute"/>
        <h2>The style Attribute</h2>
        <p>The style attribute allows you to specify Cascading Style Sheet (CSS) rules within the element.</p>
        <p>{changeWeight('Code:')}</p> 
        <img alt="style-attribute"/>
        <p>{changeWeight('Result:')}</p>
        <p style={{color: 'red'}}>Element with red color</p>
    </div>
  )
}

export default Attributes