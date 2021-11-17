import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/index.module.css';
import React, { useState, useEffect } from 'react';
import Footer from '../comp/Footer';

const affirmations = require('../data/affirmations');


export default function Home() {
    async function copyTextToClipboard(text) {
        if ('clipboard' in navigator) {
          return await navigator.clipboard.writeText(text);
        } else {
          return document.execCommand('copy', true, text);
        }
      }
    const [state,setState] = useState("Copy");
    const [change,setChange] = useState(false);
    // setInterval(function(){setChange(!change)}, 300000);

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
            <h1 className = { styles.h1}> Affirmation City </h1>  
            <h2 className={styles.top}> Get Daily Affirmations  </h2> 
            <img src="https://img.icons8.com/clouds/100/000000/tribal-symbols.png"/>

         </div>


        <div className={styles.container} id='affirmation_field' onClick={()=>{copyTextToClipboard(document.getElementById("affirmation_field").innerText)
                    setState("Copied");
                    
                }}> 
            <div className={styles.affirm}  >
                {
                change == false? affirmations[Math.floor(Math.random() * affirmations.length)]:affirmations[Math.floor(Math.random() * affirmations.length)]
                } 
            </div>

        </div>

        <div className={styles.buttons}> 
        <button className={styles.normal}onClick={() =>{
                    setState("Copy");
                    setChange(!change);

        } }> Next</button>

        <button className={state=="Copy"?`${styles.normal}`:`${styles.copied}`}  onClick={()=>
        {
            copyTextToClipboard(document.getElementById("affirmation_field").innerText);
            setState("Copied");
    
        }}>
           
            {state=="Copy"? 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                </svg> 
            :
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"/>
                </svg> 
          }{state}
        </button> 

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
          <Footer/>
        </>

    )   
}