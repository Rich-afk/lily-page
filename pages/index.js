import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import lily from '../public/lily.jpg'
import richkim from '../public/richkim.jpg'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>

      <main>
        <h1 className={styles.title}>
          Lily Hate Page
        </h1>

        <p className={styles.description}>
          Lily is a <b>STUPID IDIOT</b>
        </p>

        <div className={styles.grid}>
          <a href="https://www.op.gg/summoners/na/Nyain%20Es-NA1" className={styles.card}>
            <h3>Proof &rarr;</h3>
            <p>Look at this dumbass play league lmao</p>
          </a>

          <a href="https://overwatch.blizzard.com/en_US/search/?q=Lily002323" className={styles.card}>
            <h3>Judge &rarr;</h3>
            <p>She enjoys playing Blizzard Games like a dumbass</p>
          </a>

          <a
            href="https://www.youtube.com/watch?v=7MNz7189EpI"
            className={styles.card}
          >
            <p>
                <Image src={lily}  
                    alt="stupid stpuid stupid"
                    width={300}
                    height={100}
                /> 
            </p>
          </a>

          <a
            href="https://www.gilman.edu/"
            className={styles.card}
          >
            <h3>Grieve &rarr;</h3>
            <p>
              Do not look. See.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://github.com/Rich-afk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src={richkim}  
            alt="rich gang"
            width={50}
            height={50}
          /> 
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
