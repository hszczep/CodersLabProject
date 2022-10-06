import React from "react";
import styled from "styled-components";

export default function Input({ type, placeholder }) {
  return <StyledInput type={type} placeholder={placeholder}></StyledInput>;
}

const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(242, 202, 170, 0.37);
  border-radius: 10px;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #cdd6e1;
    backdrop-filter: blur(12rem);
    border-radius: 10px;
  }
  &::placeholder {
    color: #fef9ef;
    font-weight: 100;
    font-size: 1rem;
  }
`;
