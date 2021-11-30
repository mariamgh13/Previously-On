import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
      <div className={styles.module1}  style={{ 
      backgroundImage: `url("series.jpg")` 
    }}>
    <div className={styles.container}>
    
      <Head>
      <title>Previously On</title>
      <meta name="description" content="Previously On app" />
      <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
      
      <h1 className={styles.title}>Previously On !</h1>
      
      <p className={styles.description}>
      has become your best ally for TV shows: manage your calendar, share
      your latest episodes watched and discover new shows – within a one
      million member community.
      </p>
      </main>
    </div>
    </div>
  );
}