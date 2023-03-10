import Link from "next/link";
import styles from "../../styles/posts.module.css";
import Image from "next/image";
import { NextPageContext } from "next";

const Post = ({ product, products }: any) => {
  return (
    <div className={styles.post_container}>
      {/* categories list */}
      <ul className={styles.post_list}>
        {products.map((item: any) => (
          <li key={item.id}>
            <Link href={`/posts/${item.id}`}>{item.title}</Link>
          </li>
        ))}{" "}
      </ul>
      <div className={styles.post}>
        <div>
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={500}
            height={500}
          />
          <h1>{product.title}</h1>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context: NextPageContext) => {
  const res = await fetch(
    `https://dummyjson.com/products/${context.query?.id}`
  );

  const allProducts = await fetch("https://dummyjson.com/products");
  const allProductsJson = await allProducts.json();

  if (!res.ok || !allProducts.ok) {
    return {
      notFound: true,
    };
  }

  const product = await res.json();

  // disable cache
  context.res?.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");
  return {
    props: {
      product,
      products: allProductsJson.products,
    },
  };
};

export default Post;
