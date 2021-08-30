import Document, { Html, Head, Main, NextScript } from 'next/document';


class MyDocument extends Document {
 
  render() {
    return (
      <Html lang="en">
        <Head>
        <link
          rel='preload'
          href='/font/Rubik/Rubik-Medium.ttf'
          as='font'
          crossOrigin="anonymous"
          type="font/ttf"

          />
           <link
          rel='preload'
          href='/font/Rubik/Rubik-Regular.ttf'
          as='font'
          crossOrigin="anonymous"
          type="font/ttf"

          />
        </Head>     
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument