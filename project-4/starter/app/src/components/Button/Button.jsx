import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 10px 12px;
  background-color: #ff4343;
  color: white;
  border-radius: 7px;
  cursor: pointer;

  &:hover {
    background-color: #f77676;
  }
  background-color: ${(props) => (props.istrue ? "#f77676" : "#ff4343")};
`;
