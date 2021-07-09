//ReactMarkdown for converting .md file jsx
import ReactMarkdown from "react-markdown";

// react-syntax-highlighter for formatting code ( but this code is very large which contain highlighting for every language)
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";

// importing theme for prism (It has large size)
// import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";

//language for prism support
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

import PostHeader from "./post-header";
import Image from "next/image";

import classes from "./post-content.module.css";

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

export default function PostContent(props) {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    // ReactMarkdown will call this image function if it found some image
    // img(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },

    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1]; // className is something like language-js => We need the "js" part here
      return (
        <SyntaxHighlighter style={atomDark} language={language}>
          {children}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      {/* renderers want an object where we tell how certain elements should be rendered */}
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}
