import { useState } from "react";
import styled from "styled-components";
import LogoImg from "../Assets/Group 8.png";
import { fetchLoginList, fetchResgisterList, fetchRestisterList } from "../services";
const LoginPage = () => {
  const [order, setOrder] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [img, setImg] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const enterLogin = () => {
    const body = {
      Useremail: email,
      Userpassword: password,
    };
    fetchLoginList(body)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data));
  };
  const enterRegister = () => {
    const body = {
      email: registerEmail,
      name: userName,
      UserImg: img,
      password: registerPassword,
    };
    fetchResgisterList(body)
    .then((res) =>console.log(res.data)) 
    .catch((err)=>console.log(err.response.data))
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
          />
          <input
            required
            value={password}
            onChange={(e) => setPassWord(e.target.value)}
            type="password"
            placeholder="senha"
            autoComplete="off"
          />
          <button type="submit">Entrar</button>
        </form>
      </FormLogin>
      <FormRegister>
        <form onSubmit={enterRegister}>
          <input
            required
            onChange={(e) => setRegisterEmail(e.target.value)}
            value={registerEmail}
            autoComplete="off"
            type="email"
            placeholder="email"
          />
          <input
            required
            onChange={(e) => setRegisterPassword(e.target.value)}
            value={registerPassword}
            autoComplete="off"
            type="password"
            placeholder="senha"
          />
          <input
            required
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            autoComplete="off"
            type="text"
            placeholder="nome"
          />
          <input
            required
            onChange={(e) => setImg(e.target.value)}
            value={img}
            autoComplete="off"
            type="url"
            placeholder="imagem"
          />
          <button type="submit">Cadastrar</button>
        </form>
      </FormRegister>
      <div></div>
    </ContainerLoginPage>
  );
};
export default LoginPage;

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
  display: none;
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
