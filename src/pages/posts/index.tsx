import Link from "next/link";
import React from "react";

export const getServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  let allPosts = await res.json();
  return {
    props: {
      allPosts: allPosts.map((post: any) => ({
        id: post.id,
        title: post.title,
      })),
    },
  };
};

const Posts = ({
  allPosts,
}: {
  allPosts: {
    id: number;
    title: string;
  }[];
}) => {
  return (
    <div>
      <h1>All Posts</h1>
      <ul>
        {allPosts.map((post, idx) => (
          <li key={idx}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
