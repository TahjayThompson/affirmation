import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/index.module.css';
const affirmations = require('../data/affirmations');



export default function Home() {
    console.log()
    return ( 
        <>
        <Head>
        <title>Affirmation City</title>
          <meta name="Description" content="" />
          <meta property="og:title" content="Affirmation City"  />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://affirmation.tahjaythompson.com/" />
          <meta property="og:description" content="" />
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
          <meta name="twitter:description"  content=""/>
          <meta name="twitter:site" content="https://affirmation.tahjaythompson.com/"/>
        </Head>
        <div className = { styles.section} >
            <h1 > Get Daily Affirmations </h1>  
            <h2 > Affirmation City </h2> 
            <img src="https://img.icons8.com/clouds/100/000000/tribal-symbols.png"/>

         </div>

        <div className={styles.container}> 
            <div className={styles.affirm}>
                {
                affirmations[Math.floor(Math.random() * affirmations.length)]
                } 
            </div>
        </div>

        </>
    )
}