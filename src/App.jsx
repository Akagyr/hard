import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "./redux/store";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { AuthContextProvider } from "./context/authContext";

function App() {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/*" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </Provider>
  );
}

export default App;
