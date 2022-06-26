import UserContext from "./userContext";
import { useSelector, useDispatch } from "react-redux";
import { setAuthToken, setEmail, setName, setPass, setUserId } from "../../store/userSlice";


const UserState = (props) => {
  // const host = "http://localhost:5000"
  const host = process.env.REACT_APP_HOST
  const dispatch = useDispatch()

  const createUser = async (name, email, password) => {
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "name": name, "email": email, "password": password })
    });
    const data = await response.json()
    dispatch(setAuthToken(data))
    // console.log(name);
    // console.log(email);
    // console.log(password);
    console.log(data);
    getUser(data);
  }
  const loginUser = async (email, password) => {
    const response = await fetch(`${host}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json()
    dispatch(setAuthToken(data))
    // console.log(name);
    // console.log(email);
    // console.log(password);
    console.log(data);
    getUser(data);
  }
  const getUser = async (token) => {
    console.log(token.authToken);
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token.authToken,
      }
    });
    const data = await response.json()
    dispatch(setUserId(data._id))
    dispatch(setName(data.name))
    dispatch(setName(data.email))
    console.log("getUser Data is called");
    console.log(data._id);
    console.log(data.email);
    console.log(data.name);
    console.log(data);
  }

  const logOut = () =>{
    dispatch(setAuthToken(''))
    dispatch(setName(''))
    dispatch(setUserId(''))
    dispatch(setPass(''))
    dispatch(setEmail(''))
  }
  return (
    <UserContext.Provider value={{ createUser, loginUser,logOut }}>
      {props.children}
    </UserContext.Provider>
  )

}
export default UserState;