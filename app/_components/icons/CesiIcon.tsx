import { ComponentPropsWithRef } from "react";

export const CesiIcon = (
  props: ComponentPropsWithRef<"svg"> & { size?: number }
) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
        {/* Insérez le contenu de votre code SVG ici */}
      </g>
    </svg>
  );
};
