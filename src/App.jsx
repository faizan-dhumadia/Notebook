import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signup from './components/Signup';
import Notes from './components/Notes';
import EditNotes from './components/EditNotes';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import UserState from './context/users/UserState';
import NoteState from './context/notes/NoteState';
import OneNote from './components/OneNote';


import { useDispatch, useSelector } from "react-redux";
function App() {
  
  const { authToken } = useSelector((select) => select.user);
  return (
    <UserState>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Home />} />
            <Route exact path="/signup" element={<Signup />} />
           {authToken != '' && <Route exact path="/notes" element={<Notes />} />}

          </Routes>
          {/* <OneNote/> */}
          {/* <Notes />
          <EditNotes /> */}
        </BrowserRouter>
      </NoteState>
    </UserState>
  );
}

export default App;
