import styled from "styled-components";
import TrackItLogo from "../Assets/TrackIt.png";
import ImgProfile from "../Assets/Rectangle 14.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const HomePage = () => {
  return (
    <>
      <NavBar>
        <NavImgLogo>
          <img src={TrackItLogo} alt="" />
        </NavImgLogo>
        <NavImgProfile>
          <img src={ImgProfile} alt="" />
        </NavImgProfile>
      </NavBar>
      <ContainerHome>
        <MyHabits>
        <h1>Meus hábitos</h1>
        </MyHabits>
      </ContainerHome>
      <FooterHome>
        <span>Hábitos</span>
        <span>Histórico</span>
      </FooterHome>
      <CircularBar>
          <CircularProgressbar
            value={15}
            text={`${15}%`}
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: "#52B6FF",
              textColor: "#fff",
              pathColor: "#fff",
              trailColor: "transparent",
            })}
          />
        </CircularBar>
    </>
  );
};
export default HomePage;

const NavBar = styled.div`
  width: 375px;
  height: 70px;
  background-color: #126ba5;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, 0.15);
`;
const NavImgLogo = styled.div`
  width: 97px;
  height: 50px;
  margin-top: 10px;
  margin-left: 15px;
`;
const NavImgProfile = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 15px;
`;
const ContainerHome = styled.div`
height: calc(100vh - 140px);
overflow: auto;
  background-color: #e5e5e5;
  margin-top:70px;
`;
const MyHabits = styled.div`
  width: 100%;
  height: 100%;
  h1{
    color:#126BA5;
    font-size: 23px;
  }
`;
const FooterHome = styled.div`
  width: 375px;
  height: 70px;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  span{
    margin: 10%;
    color: #52B6FF;
  }
`;
const CircularBar = styled.div`
  width: 71px;
  height: 71px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  margin-bottom: 15px;
  margin-left: 150px;
  position:fixed;
  bottom:0`;
  
