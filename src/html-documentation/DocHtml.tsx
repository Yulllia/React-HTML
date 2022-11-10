import React from 'react'
import styles from './html.module.scss'
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
import image4 from "../assets/image4.png"
import Attributes from '../attributes/Attributes'

export const changeWeight = (content: string, title="none") => {
    return <span className={styles.bold} title={title}>{content}</span>
 }
export const changeColor = (color: string, content: string) => {
    return <span style={{color: color}}>{content}</span>
 }

function DocHtml() {
    const changeTags = (content: string) => {
        const coma = content.split(',');
        const item = coma.map((item, index)=><span key={index} className={styles.tagColor}>{item}<span className={styles.comaSeparator}>,{" "}</span></span>);
        return item;
     }
     const changeLink = (content: string, href: string) => {
        return <a href={href} target={'_blank'} rel="noreferrer">{content}</a>
     }
    
  return (
    <div>
    <h1 className={styles.title}>Introduction</h1>
    <div className={styles.contentBlock}>
        <p>{changeWeight('H')}ello my friend, I'm <span className={styles.userName}>AndrTiger</span>, one who wants to help you to achieve your dream - become a developer.</p>
        <p>I will be in touch all the time, all that you need to talk with me it's send your feedback after each of your adventures with your opinion, what was good or what bad, more feedback will help to make the best platform for learning.</p>
        <p>Now let's talk about our scheme to learn, each adventure includes 2 parts (3 only premium):</p>
        <ol className={styles.listBracket}>
            <li>{changeWeight('Theory')} - information about the theme, don't need to try to learn by heart, your general goal to understand the theme, if you forget which command can do something for you it’s not critical, you need to know that this command exists and know what this command does.
                Then in case you forget a command name, you can easily find this on the internet and use this.
            </li>
            <li>{changeWeight('Practice')} - Next important step in learning is practice. Most courses don’t have enough practice tasks and as a result students lose their knowledge so fast.</li>
            <li>{changeWeight('Homework')}(only premium) - Premium users will have homework after practice tasks. It’s similar to practice tasks but are more common for standard programmer work.</li>
        </ol> 
        <p>
        So let’s start with base information <br/>
        We have HTML, CSS and JS - that’s all what you need to know to make your first site.
        For example we need to have an button with next requirement: <br/>
        </p>
        <ol className={styles.listDot}>
            <li>Text - “Click”</li>
            <li>Background - “green”</li>
            <li>When user click a button he should to see pop up with this text “Hello”</li>
        </ol>
        <img className={styles.imageInfo} src={image2} alt="button-click"/>
        <ul>
            <li>HTML - to be responsible for create button with text “Click”</li>
            <li>CSS - to be responsible for set background to “green”</li>
            <li>JS - to be responsible for set click on this button and show pop up with text “Hello”</li>
        </ul>
        <p>In first course we will learn HTML</p>
        <p>What is HTML?</p>
        <p>{changeWeight('HTML')} - HyperText Markup Language, sounds difficult, so let’s try to explain what it means easier.</p>
        <p>In HTML we have next technical stuff:</p>
        <ol className={styles.listSublist}>
            <li>Element</li>
            <li>Tag
            <ol className={styles.listSublist}>
                <li>tag name</li>
                <li>start tag</li>
                <li>end tag</li>
                <li>self closing tag</li>
            </ol>
        </li>
            <li>Attribute
            <ol className={styles.listSublist}>
                <li>Attribute name</li>
                <li>Attribute value</li>
            </ol>
        </li>
            <li>Content</li>
        </ol>
        <p>In an image below we can see explain where which part is:</p>
        <img className={styles.imageInfo} src={image4} alt="attribute"/>
        <p>in the picture above we have element h1, tag h1, attribute name “class” with attribute name “Primary” and content text “Example Heading”</p>
        <h2>A Simple HTML Document</h2>
        <p>You can try to write your first HTML code with any code editor, we are recommended use Visual Studio Code but you can select what you like more:</p>
        <p>Free:</p>
        <ul className={styles.noBullets}>
            <li>{changeLink("Visual Studio Code", 'https://code.visualstudio.com/')}</li>
            <li>{changeLink("Atom", 'https://atom.io/')}</li>
            <li>{changeLink("Notepad++", 'https://notepad-plus-plus.org/downloads/')}</li>
            <li>{changeLink("Brackets", 'https://brackets.io/')}</li>
        </ul>
        <p>Paid:</p>
        <ul className={styles.noBullets}>
            <li>{changeLink("Webstorm", 'https://www.jetbrains.com/webstorm/promo/?source=google&medium=cpc&campaign=9641686275&term=webstorm&gclid=CjwKCAiA9qKbBhAzEiwAS4yeDR0wmnagv8aD2AcCXd2EeWgqG-2J2GhMxugo2cxTLOn1O6bUiyGlWxoC0HsQAvD_BwE')}</li>
            <li>{changeLink("Sublime Text", 'https://www.sublimetext.com/')}</li>
        </ul>
        <p><a href="https://www.hostinger.com/tutorials/best-code-editors" className={styles.colorLink}>Another</a></p>
        <p>Look at a short tutorial on how you can work with a code editor. Write your first HTML code with us :)</p>
        <img className={styles.imageInfo} src={image3} alt="code-editor"/>
        <p>Now we are in the same page
            in your code editor should be same code:
        </p>
        <p>Small explaining what these elements means:</p>
        <p>The {changeColor("red", "<!DOCTYPE html>")} declaration defines that this document is an HTML5 document</p>
        <p>The {changeColor("red","<html>")} element is the root element of an HTML page</p>
        <p>The {changeColor("red","<title>")} element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)</p>
        <p>The {changeColor("red","<body>")} element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.</p>
        <p>The {changeColor("red","<div>")} element. You use the div tag in HTML to divide sections of an HTML document.</p>
        <p>After opening your index.html in your browser you should to see same result:</p>
        <img className={styles.imageInfo} src={image1} alt="html-page"/>
        <ol className={styles.listBracket}>
            <li>Your content in title element</li>
            <li>path to your file which you open</li>
            <li>Your {changeColor("red",'div')}  with content</li>
        </ol>
        <p>Tags can be self closing or not, for example you can write tag {changeColor("red",'div')} in two ways</p>
        <ol className={styles.listDot}>
         <li>{changeColor("red",'<div></div>')}</li>
         <li>{changeColor("red",'<div/>')}</li>
        </ol>
        <p>We have a list of tags which is self closing: {changeTags('area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr,command,keygen,menuitem')}</p>
        <p>You don't need to learn these elements by heart, in this course we will learn all elements that you need to know in your first job.</p>
    </div>
    <div className={styles.contentBlock}>
        <Attributes/>
    </div>
    </div>
  )
}

export default DocHtml
