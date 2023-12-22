import React from "react";
import Heading from "web/components/atoms/Typo/Heading";
import { InputText, Password } from "web/components/atoms/Form/Input";
import Btn from "web/components/atoms/Btn";
import usersDataService from "serverdataServices/User";
import http from "serverdataServices/http";
import { t } from "i18n";

const LoginForm = ({ setStep, onLogin }) => {
  const [loading, setLoading] = React.useState(false);

  const form = React.useRef(null);

  const loginHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(form.current);
    usersDataService
      .login(data)
      .then((res) => {
        const data = res?.data.userData;
        const token = res.data.token;
        http.defaults.headers.common["Authorization"] = token;
        if (typeof document != "undefined") {
          localStorage?.setItem("token", JSON.stringify(token));
        }
        onLogin(data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <>
      <form ref={form} className="login-form">
        <div className="login-form__inner">
          <Heading level="1" classes="simple">
            {t("Log in")}
          </Heading>
          <div className="login-form__fields">
            <InputText name="userName" placeholder={t("User or email")} />
            <Password name="userPassword" placeholder="*******" />
            {/* <div onClick={() => setStep(2)}>Password forgeted !</div> */}
            <Btn onClick={loginHandler}>{t("Connect")}</Btn>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
