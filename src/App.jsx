import { Route, Routes } from "react-router-dom";
import "./App.scss";
import CartList from "./components/CartList";
import Header from "./components/Header";
import MenuList from "./components/MenuList";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MenuList />} />
          <Route path="/cart" element={<CartList />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
