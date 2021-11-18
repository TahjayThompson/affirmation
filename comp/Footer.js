import React from 'react';
import Link from 'next/link';
import styles from './styles/footer.module.css';

const Footer = () => {
    return (
        <>
        <footer className={styles.Footer}>
           <Link href='/privacy-policy' passHref>
                <a>Privacy Policy</a>
            </Link>
            <Link href='https://www.tahjaythompson.com/blog' passHref>
                <a>Blog</a>
            </Link>
            <Link href='/about' passHref>
                <a>About</a>
            </Link>
            <div >© 2021 · Affirmation City · All rights reserved </div>
      </footer>

      </>
    )
}

export default Footer
