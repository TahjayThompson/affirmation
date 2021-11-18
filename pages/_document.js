import Document, { Html, Head, Main, NextScript } from 'next/document';


class MyDocument extends Document {

 
  render() {
    return (
      <Html lang="en">
        <Head>

        <title>Affirmation City</title>
          <meta name="Description" content="daily affirmations are clear, positive statements that describe your goals as already achieved. Get Inspired now! " />
          <meta property="og:title" content="Affirmation City"  />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://affirmation.tahjaythompson.com/" />
          <meta property="og:description" content="daily affirmations are clear, positive statements that describe your goals as already achieved. Get Inspired now!" />
          <meta property="og:determiner" content="the" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:locale:alternate" content="fr_FR" />
          <meta property="og:locale:alternate" content="es_ES" />
          <meta property="og:locale:alternate" content="es_GB" />
          <meta property="og:site_name" content="Affirmation City" />
          <meta property="article:publisher" content="https://affirmation.tahjaythompson.com/" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta property="author" content="Tahjay Thompson"/>
          <meta property="article:author" content="https://www.linkedin.com/in/tahjay-thompson"/>
          <link rel="canonical" href="https://affirmation.tahjaythompson.com/"/>
          <meta property="og:image:height" content="1920"/>
          <meta property="og:image:width" content="1080"/>
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:title" content="Affirmation City"/>
          <meta name="twitter:description"  content="daily affirmations are clear, positive statements that describe your goals as already achieved. Get Inspired now!"/>
          <meta name="twitter:site" content="https://affirmation.tahjaythompson.com/"/>






        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/manifest.json"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
        <meta name="theme-color" content="#ffffff"/>

  
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