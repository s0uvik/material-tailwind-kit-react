import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { NavBar } from "@/widgets/layout";
import routes from "@/routes";
import { Home, SignIn, SignUp } from "./pages";
import Dashboard from "./pages/dashboard";


function App() {
  const { pathname } = useLocation();

  return (
    <div className="min-w-fit">
      {!(pathname == '/sign-in' || pathname == '/sign-up' || pathname == '/dashboard') && (
        <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
          <NavBar routes={routes} />
        </div>
      )
      }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </div>
  );
}

export default App;
