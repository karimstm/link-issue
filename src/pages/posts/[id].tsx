const Post = ({
  post,
}: {
  post: {
    title: string;
    body: string;
  };
}) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export const getServerSideProps = async (context: any) => {
  const res = await fetch(
    `https://dummyjson.com/products/${context.params.id}`
  );
  const post = await res.json();
  return {
    props: {
      post,
    },
  };
};

export default Post;
