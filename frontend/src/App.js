import { Routes, Route } from "react-router-dom";
import Home from "./Routes/home/Home";
import Login from "./Routes/login/Login";
import Profile from "./Routes/profile/Profile";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/profile" element={<Profile />} exact />
      </Routes>
    </div>
  )
}
export default App;
