import axios from "../axios";

const GetAllUser = (userid) => {
  return axios.get("/api/get-all-user", { params: { id: userid } });
};

const Login = (useremail, userpassword) => {
  return axios.post("/api/login-admin", {
    email: useremail,
    password: userpassword,
  });
};

const CreateDoctor = (data) => {
  return axios.post("/api/create-doctor", data);
};
export default { Login, GetAllUser, CreateDoctor };
