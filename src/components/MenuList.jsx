import { useState } from "react";
import { useMenuList } from "../context/AppContext";
import Item from "./Item";
import OrderModal from "./OrderModal";

function MenuList() {
  const { menuList } = useMenuList();

  const [modalOn, setModalOn] = useState(false);
  const [modalMenu, setModalMenu] = useState(null);
  const categorys = Object.keys(menuList);

  if (!menuList)
    return (
      <div style={{ textAlign: "center", margin: "80px" }}>
        메뉴 정보가 없어요!
      </div>
    );

  return (
    <>
      {categorys.map((category) => {
        return (
          <section key={category}>
            <h2>{category}</h2>
            <ul className="menu">
              {menuList[category].map((item) => (
                <Item
                  key={item.name}
                  item={item}
                  clickHandler={() => {
                    setModalMenu(item);
                    setModalOn(true);
                  }}
                />
              ))}
            </ul>
          </section>
        );
      })}
      {modalOn && <OrderModal modalMenu={modalMenu} setModalOn={setModalOn} />}
    </>
  );
}

export default MenuList;
