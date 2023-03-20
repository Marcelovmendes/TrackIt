import { useState } from "react";
import styled from "styled-components";
import LogoImg from "../Assets/Group 8.png";
import { Link, useNavigate } from "react-router-dom";
import {fetchLoginList} from "../services"
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const navigate = useNavigate()

  const enterLogin = (e) => {
    e.preventDefault()
    navigate("/hoje");
    const body = {
      Useremail: email,
      Userpassword: password,
    };
    console.log(body)
    fetchLoginList(email,password)
      .then((res) => {console.log(res.data); navigate("/hoje",{state: {dados:body}}) })
      .catch((err) => console.log(err.response.data));
  };

  return (
    <ContainerLoginPage>
      <LogoPage>
        <img src={LogoImg} alt="imgLogin" />
      </LogoPage>
      <FormLogin>
        <form onSubmit={enterLogin}>
          <input
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="email"
            autoComplete="off"
            data-test="email-input"
          />
          <input
            required
            value={password}
            onChange={(e) => setPassWord(e.target.value)}
            type="password"
            placeholder="senha"
            autoComplete="off"
            data-test="password-input"
          />
          <button data-test="login-btn" type="submit">Entrar</button>
        </form>
      </FormLogin>
     <StyledLink data-test="signup-link" to="/cadastro"> Não tem uma conta? cadastre-se!</StyledLink>
    </ContainerLoginPage>
  );
};
export default LoginPage;


const  StyledLink = styled(Link)`
color: #52b6ff;
text-decoration: underline;
font-size: 10px;
line-height: 15px;
margin-top: 15px;
`;

const LogoPage = styled.div``;
const ContainerLoginPage = styled.div`
  margin-top: 68px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormLogin = styled.div`
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