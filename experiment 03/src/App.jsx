import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import DashboardLayout from "./pages/DashboardLayout";
import ProtectedRoute from "./routes/ProtectedPoute";
import DashBoardSummary from "./pages/DashboardSummary";
import DashBoardAnalytics from "./pages/DashboardAnalytics";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
       
        <Route path="/login" element={<Login />} />

       
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashBoardSummary />} />
          <Route path="summary" element={<DashBoardSummary />} />
          <Route path="analytics" element={<DashBoardAnalytics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
