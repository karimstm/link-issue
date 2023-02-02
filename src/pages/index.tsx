import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>POSTS</h1>
      <Link href={"/posts"}>Posts Page</Link>
    </>
  );
};

export default Home;
