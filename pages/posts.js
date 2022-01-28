import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import utils from "../styles/utils.module.css";

export const getStaticProps = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok)
      throw new Error("Something went wrong when fetching your data!");

    const users = await response.json();

    return {
      props: {
        users,
      },
    };
  } catch (err) {
    console.log(err);
  }
};

const Post = ({ users }) => {
  console.log(users);

  return (
    <Layout>
      <Head>
        <title>Post Page</title>
      </Head>

      <nav>
        <Link href="/">
          <a className={utils.link}>Home</a>
        </Link>
      </nav>

      <div>
        <h1>Post User Page</h1>

        <p className={utils.m__b__1}>Displaying all JSON Placeholder users!</p>

        <section>
          {users.map((user) => {
            return (
              <Link href={`/post/${user.id}`} key={user.id}>
                <div className={utils.user__card}>
                  <h3>{user.name}</h3>
                  <p>{user.email}</p>
                  <i>{user.username}</i>
                </div>
              </Link>
            );
          })}
        </section>
      </div>
    </Layout>
  );
};

export default Post;
