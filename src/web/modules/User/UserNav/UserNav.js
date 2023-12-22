import React from "react";
import Btn from "web/components/atoms/Btn";
import articlesDataService from "dataServices/Articles/articles";
import { InputText } from "web/components/atoms/Form/Input";

const UserNav = ({ logoutHandler, userData }) => {
  const [loading, setLoading] = React.useState(false);
  const formRef = React.useRef(null);
  const userName =
    userData.userName.charAt(0).toUpperCase() + userData.userName.substr(1);

  const generateArticle = () => {
    setLoading(true);
    const formData = new FormData(formRef.current);
    console.log(formData);

    articlesDataService
      .generateArticle(formData)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <>
      <h1>Welcome {userName}</h1>
      <div onClick={logoutHandler}>Logout</div>

      <br />
      <br />
      <br />
      {loading ? (
        "generating..."
      ) : (
        <>
          <Btn onClick={generateArticle}>Generate article</Btn>
          <form ref={formRef}>
            <InputText placeholder="My super post title..." name="postTitle" />
          </form>
        </>
      )}
    </>
  );
};

export default UserNav;
