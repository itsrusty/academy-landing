import React from "react";

const handleClick = () => {
  window.location.href = "https://salfox-client.vercel.app/"
};

const Button = ({ styles }) => (
  <button
    onClick={handleClick}
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
  >
    Comenzar
  </button>
);

export default Button;
