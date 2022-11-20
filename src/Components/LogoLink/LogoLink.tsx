import React from "react";
import { useNavigate } from "react-router";

const LogoLink: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div
      
      onClick={() => {
        navigate("accueil");
      }}
    >
      <span css={{ fontWeight: 900, fontSize: '2rem'}}>MC</span>
    </div>
  );
};

export default LogoLink;
