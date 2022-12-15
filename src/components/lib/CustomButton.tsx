import styled from "styled-components";
import Button from "react-bootstrap/Button";

const buttonVariants: any = {
  primary: {
    background: "#3f51b5",
    color: "white",
  },
  secondary: {
    background: "#f1f2f7",
    color: "#434449",
  },
};
export const CustomButton = styled(Button)`
  padding: 10px 15px;
  border: 0;
  line-height: 1;
  ${({ height = "40px" }) => ({ height: height })}
  border-radius: 3px;
  ${({ variant = "primary" }) => buttonVariants[variant]}
`;
