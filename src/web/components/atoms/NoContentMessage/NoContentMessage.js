import React from "react";

const NoContentMessage = () => {
  return (
    <>
      <h1>Welcome to {process.env.COMPANY_NAME} !!</h1>
      here we can write what ever we want :) <br />
      but... in Prismic ;) <br />
      <br />
      <a
        href={`https://${process.env.PRISMIC_REPOSITORY}.prismic.io/`}
        target="_blank"
      >
        Go to Prismic repo !
      </a>
    </>
  );
};

export default NoContentMessage;
