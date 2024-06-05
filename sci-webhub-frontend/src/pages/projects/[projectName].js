// pages/projects/[projectName].js
import { MemoizedHeader } from "@/Layout/Header";
import { MemoizedProjectDetails } from "@/modules/ProjectDetails";
import withAuth from "@/utils/withAuth";
import Head from "next/head";

const ProjectPage = () => {
  return (
    <>
      <Head>
        <title>Signup - Student</title>
        <meta name="description" content="Lets plant trees" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <MemoizedHeader />
      <MemoizedProjectDetails />
    </>
  );
};

export default withAuth(ProjectPage);
