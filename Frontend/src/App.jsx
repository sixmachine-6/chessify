import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PlayOnline from "./pages/PlayOnline";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div>
      <Toaster
        position="top-center"
        gutter={12}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            backgroundColor: "#262521",
            color: "white",
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/chessify" element={<Home />} />
          <Route path="/chessify/play-online" element={<PlayOnline />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
