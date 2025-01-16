import Homepage from "./pages/Homepage";
import CalenderPage from "./pages/Fixing.jsx";
import MeetingDetail from "./pages/MeetingDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className=" container mx-auto px-4 my-8 ">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/calenderPage" element={<CalenderPage />} />
          <Route path="/meeting" element={<MeetingDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
