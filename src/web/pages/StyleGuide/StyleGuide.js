import React from "react";
import Btn from "web/components/atoms/Btn";

const StyleGuide = () => {
  return (
    <div className="style-guide">
      <h1 className="style-guide__title">Style Guide</h1>
      <div className="style-guide__item">
        <h2 className="style-guide__item__title">Headings</h2>
        <div className="style-guide__item__content">
          <h1 className="h1">Heading H1 : Lorem ipsum dolor sit amet</h1>
          <h1 className="h1 green">Heading H1 : Lorem ipsum dolor sit amet</h1>
          <h1 className="h1 orange simple">
            Heading H1 : Lorem ipsum dolor sit amet
          </h1>

          <h2 className="h2">Heading H2 : Lorem ipsum dolor sit amet</h2>

          <h2 className="h2 orange">Heading H2 : Lorem ipsum dolor sit amet</h2>
          <h3 className="h3">Heading H3 : Lorem ipsum dolor sit amet</h3>
          <h4 className="h4">Heading H4 : Lorem ipsum dolor sit amet</h4>
          <h4 className="h4 green">Heading H4 : Lorem ipsum dolor sit amet</h4>
          <h4 className="h4 orange">Heading H4 : Lorem ipsum dolor sit amet</h4>
        </div>
      </div>

      <div className="style-guide__item">
        <h2 className="style-guide__item__title">Buttons</h2>
        <div className="style-guide__item__content">
          <Btn>Primary button</Btn>
          <Btn appearance="secondary">Secondary button</Btn>
          <Btn appearance="link">Link button</Btn>
        </div>
      </div>
    </div>
  );
};

export default StyleGuide;
