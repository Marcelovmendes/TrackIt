import { useState } from "react";
import styled from "styled-components";
import LogoImg from "../Assets/Group 8.png";
import {  Link,useNavigate } from "react-router-dom";
import { fetchResgisterList } from "../services";

const RegisterPage = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [img, setImg] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const navigate = useNavigate();
  const enterRegister = (e) => {
    e.preventDefault()
    navigate("/")
    const body = {
      email: registerEmail,
      name: userName,
      UserImg: img,
      password: registerPassword,
    };
    console.log(body);
    fetchResgisterList(registerEmail, userName, img, registerPassword)
      .then((res) => {
        console.log(res.data);
        navigate("/hoje", { state: { dados: body } });
      })
      .catch((err) => console.log(err.response.data));
  };

  return (
    <ContainerLoginPage>
      <LogoPage>
        <img src={LogoImg} alt="imgLogin" />
      </LogoPage>
      <FormRegister>
        <form onSubmit={enterRegister}>
          <input
            required
            onChange={(e) => setRegisterEmail(e.target.value)}
            value={registerEmail}
            autoComplete="off"
            type="email"
            placeholder="email"
            data-test="email-input"
          />
          <input
            required
            onChange={(e) => setRegisterPassword(e.target.value)}
            value={registerPassword}
            autoComplete="off"
            type="password"
            placeholder="senha"
            data-test="password-input"
          />
          <input
            required
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            autoComplete="off"
            type="text"
            placeholder="nome"
            data-test="user-name-input"
          />
          <input
            required
            onChange={(e) => setImg(e.target.value)}
            value={img}
            autoComplete="off"
            type="url"
            placeholder="imagem"
            data-test="user-image-input"
          />
          <button data-test="signup-btn" type="submit">Cadastrar</button>
        </form>
      </FormRegister>
      <StyledLink data-test="login-link" to="/"> Ja tem uma conta? Faça login!</StyledLink>
    </ContainerLoginPage>
  );
};
export default RegisterPage;


const LogoPage = styled.div``;
const ContainerLoginPage = styled.div`
  margin-top: 68px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const FormRegister = styled.div`
  margin-left: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffff;
  input {
    height: 45px;
    width: 303px;
    border-radius: 5px;
    border: 1px solid #d5d5d5;
    margin-bottom: 10px;
    font-family: "Lexend Deca";
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
  }
  input::placeholder {
    color: #dbdbdb;
  }
  button {
    height: 45px;
    width: 309px;
    color: #ffff;
    background-color: #52b6ff;
    border-radius: 4.63px;
    border-color: #52b6ff;
    box-shadow: none;
  }
`;
const  StyledLink = styled(Link)`
color: #52b6ff;
text-decoration: underline;
font-size: 10px;
line-height: 15px;
margin-top: 15px;
`;