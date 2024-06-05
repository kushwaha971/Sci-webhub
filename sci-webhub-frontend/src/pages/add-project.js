import { MemoizedHeader } from "@/Layout/Header";
import { MemoizedAddProjects } from "@/modules/AddProject";
import withAuth from "@/utils/withAuth";
import Head from "next/head";
import React from "react";

const AddProject = () => {
  return (
    <>
      <Head>
        <title>Signup - Student</title>
        <meta name="description" content="Lets plant trees" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <MemoizedHeader />
      <MemoizedAddProjects />
    </>
  );
};

export default withAuth(AddProject);
