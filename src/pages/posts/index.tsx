import MediaCard from "@app/components/Post";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "next/link";
import React from "react";

export const getServerSideProps = async () => {
  const res = await fetch("https://dummyjson.com/products");
  let productsData = await res.json();
  return {
    props: {
      products: productsData.products,
    },
  };
};

const Posts = ({
  products,
}: {
  products: {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
  }[];
}) => {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          margin: "2rem",
        }}
      >
        All Posts
      </h1>
      <Box sx={{ flexGrow: 1, alignItems: "center", justifyContent: "center" }}>
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid
              key={product.id}
              item
              xs={3}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link href={`/posts/${product.id}`}>
                <MediaCard
                  title={product.title}
                  body={product.description}
                  thumbnail={product.thumbnail}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Posts;
