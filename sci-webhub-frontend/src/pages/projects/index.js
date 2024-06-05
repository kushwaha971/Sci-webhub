// pages/index.js
import { MemoizedHeader } from "@/Layout/Header";
import { MemoizedProjects } from "@/modules/projects";
import withAuth from "@/utils/withAuth";
import Head from "next/head";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Signup - Student</title>
        <meta name="description" content="Lets plant trees" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <div>
        <MemoizedHeader />
        <MemoizedProjects />
      </div>
    </>
  );
};

export default withAuth(HomePage);
