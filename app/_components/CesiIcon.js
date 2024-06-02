import React from "react";

export const CesiIcon = ({ className, ...props }) => {
  return (
    <img
      src="./icons/cesi.png" // Assurez-vous de remplacer "/chemin/vers/votre/image/cesi-logo.png" par le chemin réel de votre image CESI
      alt="Logo CESI"
      className={className}
      {...props}
    />
  );
};