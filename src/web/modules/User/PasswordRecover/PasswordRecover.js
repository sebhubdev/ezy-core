import React from "react";
import Heading from "web/components/atoms/Typo/Heading";
import { InputText } from "web/components/atoms/Form/Input";
import Btn from "web/components/atoms/Btn";

const PasswordRecover = ({ fieldToFocus, onSend = () => {}, setStep }) => {
  const recoverHanlder = () => {
    onSend({ here: "the data" });
    setStep(3);
  };
  return (
    <>
      <div className="login-form">
        <div className="login-form__inner">
          <Heading level="1" classes="simple">
            Password Recover
          </Heading>
          <div className="login-form__fields">
            <InputText inputRef={fieldToFocus} placeholder="Email" />
          </div>
          <div>
            <span>
              <Btn appearance="secondary" onClick={() => setStep(1)}>
                Back
              </Btn>
            </span>
            <span>
              <Btn onClick={recoverHanlder}>Send !!</Btn>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordRecover;
