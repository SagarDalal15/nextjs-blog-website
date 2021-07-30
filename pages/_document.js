import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" prefix="og: http://ogp.me/ns#">
        <Head>
          <meta property="og:title" content="My Blog Website" />
          <meta name="image" property="og:image" content="/mysite.png" />
          <meta name="author" content="Sagar Dalal" />
          <meta
            property="og:description"
            content="Website created using NextJS"
          />
          <meta
            property="og:url"
            content="https://nextjs-blog-website-two.vercel.app"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="notifications"></div>
        </body>
      </Html>
    );
  }
}
export default MyDocument;
