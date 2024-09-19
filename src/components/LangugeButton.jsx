import React from "react";

const LangugeButton = ({ name, click }) => {
  return (
    <button className="border-[1px] rounded-sm p-2" onClick={click}>
      {name}
    </button>
  );
};

export default LangugeButton;
