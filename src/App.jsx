import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import FallBackLoader from "./components/FallBackLoader";
import Homepage from "./pages/Homepage";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<FallBackLoader />}>
                <Homepage />
              </Suspense>
            }
          />

          <Route
            path="/signin"
            element={
              <Suspense fallback={<FallBackLoader />}>
                <SignIn />
              </Suspense>
            }
          />

          <Route
            path="/signup"
            element={
              <Suspense fallback={<FallBackLoader />}>
                <SignUp />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
