import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/index.module.css';
import React, { useState, useEffect } from 'react';
const affirmations = require('../data/affirmations');



export default function Home() {
    return(
        <>
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
        </Head>
        <div className = { styles.section} >
            <h1 > Get Daily Affirmations </h1>  
            <h2 className={styles.top}> Affirmation City </h2> 
            <img src="https://img.icons8.com/clouds/100/000000/tribal-symbols.png"/>

         </div>
         <button onClick={() =>window.location.reload() }> NEXT ONE</button>


        <div className={styles.container}> 
            <div className={styles.affirm}>
                {
                affirmations[Math.floor(Math.random() * affirmations.length)]
                } 
            </div>

        </div>
        

        <div className={styles.info}>
        <h2>        What Are Daily Affirmations?    </h2>

        <p>Simply put, daily affirmations are clear, positive statements that describe your goals as already achieved. </p>
        </div>

        <div className={styles.info}>
            <h2>What are daily affirmations used for?</h2>
        <p>Image result for What Are Daily Affirmations?
Simply put, daily affirmations are clear, positive statements that describe your goals as already achieved. </p>
        </div>

        <div className={styles.info}>
            <h2>What is a positive affirmation?</h2>
        <p>Affirmations are positive statements that can help you to challenge and overcome self-sabotaging and negative thoughts. When you repeat them often, and believe in them, you can start to make positive changes. </p>
        </div>

        </>

    )   
}