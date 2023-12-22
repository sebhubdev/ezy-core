import React from "react";
import { LoginForm, PasswordRecover } from "modules/User";
import Btn from "web/components/atoms/Btn";

const LoginSteps = ({ onLogin, resetSteps }) => {
  const [step, setStep] = React.useState(1);

  return (
    <>
      {step && step === 1 ? (
        <LoginForm setStep={setStep} onLogin={onLogin} />
      ) : step === 2 ? (
        <>
          <PasswordRecover setStep={setStep} />
        </>
      ) : step === 3 ? (
        <>
          <h2>Recovery email sended !</h2>
          <Btn onClick={() => {}}>Close</Btn>
        </>
      ) : null}
    </>
  );
};

export default LoginSteps;
