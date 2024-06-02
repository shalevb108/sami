import "./App.css";
import { GlobalProvider } from "./contexts/GlobalProvider";
import { Login } from "./pages/Login";
import { OpenHome } from "./pages/OpenHome";

function App() {
  return (
    <>
    <GlobalProvider>
      {/* <Login /> */}
      <OpenHome />
      </GlobalProvider>
    </>
  );
}

export default App;
