import NextDocument, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          <link href="https://fonts.googleapis.com/css2?family=Atma:wght@500&family=Balthazar&family=Birthstone+Bounce&family=Cormorant+Infant:wght@500&family=Inter:wght@100;500&family=Montserrat:wght@500&family=Pinyon+Script&family=Roboto:wght@100&family=Rouge+Script&display=swap" rel="stylesheet"/>
          <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'></link>
        </Head>
        <body>
        <script src="https://unpkg.com/boxicons@2.1.2/dist/boxicons.js"></script>
        </body>
        <Main />
        <NextScript />
      </Html>
    );
  }
}
