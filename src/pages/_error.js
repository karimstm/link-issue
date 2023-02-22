const Error = ({ statusCode }) => {
  return (
    <p>
      {" "}
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}{" "}
    </p>
  );
};

Error.getInitialProps = ({ res, err }) => {
  // check if this error happen due to build id mismatch
  console.log("err", err);
  if (err && err.code === "BUILD_ID_MISMATCH") {
    // if so, reload the page
    window.location.reload();
  }
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
