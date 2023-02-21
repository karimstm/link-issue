import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1> SEE ALL POSTS - Testing build id change -</h1>
      <Link href={"/posts"}>Posts Page</Link>
    </div>
  );
};

export default Home;
