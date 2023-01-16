import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import data from '../data/education.json'
import {useState} from 'react'

export default function Home() {

  console.log(data)

  const [information, setInformation] = useState([...data]) //this says to just enter this data into the useState. When we call the useState, it will call the information. 

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <div>Business Degrees</div>
          {information && information.map((info, index) => {
            if(info.department === "Business"){ //this filters thru the department key in the education.json file. You can add "info.department.toLowerCase()" if you want it to find upper (exact) casing or lower case is okay too.

            return(
              <div key={index}>{info.degree}</div> //Adding the key here will count the index so that the console error disappears. Each key is unique now
            )
            } else if (info.department === "Computing") {
              return (
                <div key={index}>{info.degree}</div>
              )
            }

          })}
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
