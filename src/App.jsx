import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
// import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Books from "./pages/‌‌‌‌Books";
import Students from "./pages/Students";
import IssuePage from "./pages/IssuePage";
import ReturnPage from "./pages/ReturnPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    
      <Routes>

        {/* Login */}
        {/* <Route path="/" element={<Login />} /> */}

        {/* Admin Panel */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/books" element={<Books />} />
          <Route path="/Students" element={<Students />} />
          <Route path="/IssuePage" element={<IssuePage />} />
          <Route path="/ReturnPage" element={<ReturnPage />} />
          <Route path="/ProfilePage" element={<ProfilePage />} />
        </Route>

      </Routes>
    
  );
}

export default App;