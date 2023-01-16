import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import data from '../data/education.json'
import { useState } from 'react'
import Card from '../components/Card'
import Link from 'next/Link'

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
         <Link href="about">About</Link> 
        </p>

        <div className={styles.grid}>

          <b>Business Degrees: </b>
          {information && information.map((info, index) => {
            if (info.department === "Business") { //this filters thru the department key in the education.json file. You can add "info.department.toLowerCase()" if you want it to find upper (exact) casing or lower case is okay too.
              return (
                <Card key={index} degree={info.degree} colour="red" font="10px" /> //This is pulling the Card component, passing over the degree property
              )
            }
          })}

          <b>Computing Degrees:</b>
          {information && information.map((info, index) => {
            if (info.department === "Computing") { //this filters thru the department key in the education.json file. You can add "info.department.toLowerCase()" if you want it to find upper (exact) casing or lower case is okay too.
              return (
                <Card key={index} degree={info.degree} colour="blue" font="26px" /> 
                //<div key={index}>{info.degree}</div> //If not using components, this adding the key here will count the index so that the console error disappears. Each key is unique now
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
