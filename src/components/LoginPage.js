import styled from "styled-components";
import LogoImg from "../Assets/Group 8.png";
const LoginPage = () => {
  return (
    <ContainerLoginPage>
      <LogoPage>
        <img src={LogoImg} alt="imgLogin" />
      </LogoPage>
      <FormLogin>
        <form>
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="senha" />
          <button type="submit">Entrar</button>
        </form>
      </FormLogin>
      <FormRegister>
      <form>
      <input required type="email" placeholder="email" />
        <input required type="password" placeholder="senha" />
        <input required type="text" placeholder="nome" />
        <input required type="url" placeholder="imagem" />
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
  }`;
