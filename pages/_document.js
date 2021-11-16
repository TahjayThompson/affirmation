import Document, { Html, Head, Main, NextScript } from 'next/document';


class MyDocument extends Document {

 
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;900&display=swap" rel="stylesheet"/>
 
 
          <meta name="google-site-verification" content="Whrv3gCttHLv5OdtXLp9qLZ0rHyY-bEoNw8Kg7M0H00" />          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=UA-213178747-1`}
          />
          
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-213178747-1', {
                  page_path: window.location.pathname,
                });
            `,
            }}
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