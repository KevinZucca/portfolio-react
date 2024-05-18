import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route>
            <Route path="/" element={<Main />}></Route>
          </Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
