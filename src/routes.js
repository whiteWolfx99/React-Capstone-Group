import { Routes, Route } from 'react-router-dom';
import Missions from './Views/Missions';
import MyProfile from './Views/MyProfile';
import Rockets from './Views/Rockets';

const Main = () => (
  <Routes>
    <Route path="/" element={<Rockets />} />
    <Route path="/Missions" element={<Missions />} />
    <Route path="/MyProfile" element={<MyProfile />} />
  </Routes>
);
export default Main;
