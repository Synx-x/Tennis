import React from "react";

interface IIconsProps {
  style?: object;
  className?: string;
}
export const StarIcon = (props: IIconsProps) => {
  const { style, className } = props;

  return (
    <>
      <svg
        width="60"
        height="58"
        viewBox="0 0 60 58"
        xmlns="http://www.w3.org/2000/svg"
        style={style}
        className={className}
      >
        <path
          d="M60 22.2H37.1L30 0L22.9 22.2H0L18.5 35.9L11.5 58L30 44.3L48.5 58L41.4 35.8L60 22.2Z"
          fill="gold"
          stroke="none"
        />
      </svg>
    </>
  );
};
