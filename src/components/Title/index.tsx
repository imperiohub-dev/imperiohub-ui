import React from "react";

export interface TitleProps {
  text: string;
  size?: "sm" | "md" | "lg";
}

export const Title: React.FC<TitleProps> = ({ text, size = "md" }) => {
  const fontSize = size === "sm" ? "1.2rem" : size === "lg" ? "2rem" : "1.6rem";

  return <h1 style={{ fontSize, margin: 0 }}>{text}</h1>;
};
