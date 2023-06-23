import React from "react";
import { Box, type BoxProps } from "../Box";

interface LabelProps {
  children: BoxProps["children"];
  className?: BoxProps["className"];
}

export const Label = ({ children, ...props }: LabelProps) => {
  return (
    <Box
      borderRadius="round"
      paddingY="1x"
      paddingX="1x"
      fontSize="12px"
      {...props}
    >
      <Box as="span">{children}</Box>
    </Box>
  );
};
