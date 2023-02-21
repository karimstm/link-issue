import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1> SEE ALL POSTS</h1>
      <Link href={"/posts"}>Posts Page</Link>
    </div>
  );
};

export default Home;
