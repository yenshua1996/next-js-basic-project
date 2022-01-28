import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import utils from "../styles/utils.module.css";
import Button from "../components/Button";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Next.js Project</title>
      </Head>

      <header>
        <section className={utils.p4__1}>
          <h1
            className={`${utils.text__center} ${utils.heading__1} ${utils.m__b__1}`}
          >
            Welcome to Next.js Application!
          </h1>

          <Button btnText={"Visit"} />
        </section>
      </header>

      <main>
        <section>
          <h2 className={`${utils.text__center} ${utils.m__b__1}`}>
            Importan Messages
          </h2>

          <section className={utils.grid}>
            <Link href="/posts">
              <div className={utils.card}>
                <h3>Post</h3>

                <p>
                  Creating one of the most robust message application in the
                  market.
                </p>
              </div>
            </Link>

            <Link href="/algorithm">
              <div className={utils.card}>
                <h3>Algorithm</h3>

                <p>
                  Feature rich, Customer and Seller friendly E-commerce page
                  with full customer support.
                </p>
              </div>
            </Link>

            <Link href="/data">
              <div className={utils.card}>
                <h3>Data</h3>

                <p>
                  Stream the latest content from thousands of title in our
                  catalogue with just a push of a button.
                </p>
              </div>
            </Link>

            <Link href="/performance">
              <div className={utils.card}>
                <h3>Performance</h3>

                <p>
                  Discover the latest tourist destination and culinary treasure
                  hidden from the rest of the world.
                </p>
              </div>
            </Link>
          </section>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
