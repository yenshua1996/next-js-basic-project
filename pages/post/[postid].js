import { useRouter } from "next/router";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import utils from "../../styles/utils.module.css";
import Layout from "../../components/Layout";

const Post = () => {
  const router = useRouter();
  const { postid } = router.query;

  return (
    <Layout>
      <Head>
        <title>Post {postid}</title>
      </Head>

      <nav className={utils.nav__container}>
        <Link href="/">
          <a className={utils.link}>Home</a>
        </Link>

        <Link href="/posts">
          <a className={utils.link}>Posts</a>
        </Link>
      </nav>

      <main>
        <h1>Post ID: {postid}</h1>
      </main>
    </Layout>
  );
};

export default Post;
