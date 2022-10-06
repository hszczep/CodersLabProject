import styled from "styled-components";
import React from "react";
import Input from "../../components/Login/Input";
import Button from "../../components/Login/Button";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const nav = useNavigate();
  return (
    <div className="login-container">
      <MainContainer>
        <WelcomeText>Login</WelcomeText>
        <InputContainer>
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password" />
        </InputContainer>
        <ButtonContainer onClick={() => nav("/user/map")}>
          <Button content="Log in" />
        </ButtonContainer>
        <Horizontal />
        <ForgotPassword>Forgot password?</ForgotPassword>
      </MainContainer>
    </div>
  );
}

const MainContainer = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  height: max-content;
  width: 20%;
  height: 50%;
  background: rgba(0, 0, 0, 0.25);
  box-shadow: 0 8px 32px 0 rgba(242, 202, 170, 0.37);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
`;

const WelcomeText = styled.h2``;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: space-around;
  align-items: center;
  //   height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  width: 100%;
  padding-bottom: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Horizontal = styled.hr`
  width: 90%;
  height: 0.3rem;
  bordern: none;
  border-radius: 0.8rem;
  background: white;
  backdrop-filter: blur(25px);
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
`;
