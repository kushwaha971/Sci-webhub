import Head from "next/head";
import { Inter } from "next/font/google";
import { MemoizedSignup } from "@/modules/Signup";
import { MemoizedHeader } from "@/Layout/Header";
import withAuthRedirect from "@/utils/withAuthRedirect";

const inter = Inter({ subsets: ["latin"] });

function StudentSignup() {
  /* College Name , city,state, collegeType(govt,semigov, private) ,category(Eng, Medical), Courses Available, Ranking, Fees, Placement(High low), collegeLogo, Avg Cutoff, medium of admission(exam), Establishment year,Campus size, No. of students,Number of departments,Rankings (NIRF 2023),Flagship course of study,Number of courses,Total faculty,Types of scholarships offered,Brochure */
  return (
    <>
      <Head>
        <title>Signup - Student</title>
        <meta name="description" content="Lets plant trees" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <MemoizedHeader />
      <MemoizedSignup />
    </>
  );
}

export default withAuthRedirect(StudentSignup);
