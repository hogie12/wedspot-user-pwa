import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Button } from "semantic-ui-react";

const ButtonPrimary = ({ width, content = "content", onClick }) => (
  <Button
    style={{
      background: "#455437",
      color: "white",
      width: `${width}`,
    }}
    onClick={onClick}
  >
    {content}
  </Button>
);

export default ButtonPrimary;
