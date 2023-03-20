import axios from "axios";

export const fetchLoginList = (email, password) => {

  const data = {
    email: email,
    password:password,

  }
  const url =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
  return axios.post(url,data);
};

export const fetchResgisterList = (registerEmail,img,userName,registerPassword) => {
  const data = {
    email:registerEmail, 
    name: userName,
    image: img,
    password:registerPassword,
  }
  const url =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
  return axios.post(url,data);
};

export const fetchCreateHabits = () => {
  const url =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
  return axios.post(url);
};

export const fetchHabitList = () => {
  const url =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
  return axios.get(url);
};

export const fetchDeleteHabits = () => {
  const url =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/ID_DO_HABITO";
  return axios.delete(url);
};

export const fetchGetHabitstoday = () =>{

    const url = 
     "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"
    return axios.get(url);
}

export const fetchMarkHabits = () =>{

    const url =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/ID_DO_HABITO/check"
    return axios.post(url)
}
export const fetchMarkOffHabits = () =>{

    const url =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/ID_DO_HABITO/uncheck"
    return axios.post(url)
}
export const fetchHistoricHabits = () =>{
    const url = 
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily"
    return axios.get(url)
}