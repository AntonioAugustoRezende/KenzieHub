import { RouteMain as Routes } from "./Routes";
import { Global } from "./styles/global";
/* import { ToastContainer } from "react-toastify"; */
function App() {
  return (
    <>
      <Global />
      <Routes />

      {/* <ToastContainer
        position="top-right"
        autoClose={1200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      /> */}
    </>
  );
}

export default App;
