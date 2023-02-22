export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: "/posts/1",
      permanent: false,
    },
  };
};

const Posts = () => {
  return null;
};

export default Posts;
