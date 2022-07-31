import React from "react";

interface PFlex {
  flex: number;
  className?: string;
}

const Flex: React.FC<PFlex> = ({ flex, className, children }) => {
  const flexStyle = {
    flex,
  };
  return (
    <div className={className} style={flexStyle}>
      {children}
    </div>
  );
};

export default Flex;
