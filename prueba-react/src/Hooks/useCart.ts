import { useEffect, useState, useMemo } from "react";
import { dispositivos } from "../Data/db";
import type {dispo, cartItem, Categoria} from "../Types/index";

export const useCart = () => {
  const initialCart = () : cartItem[] => {
    const storage = localStorage.getItem("cart");
    return storage ? JSON.parse(storage) : [];
  };

  const [data, setData] = useState(dispositivos);
  const [cart, setCart] = useState(initialCart());
  const [categoria, setCategoria] = useState<Categoria>("Todos");

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(item:dispo) {
    const findExits = cart.findIndex((dis) => dis.id === item.id);
    if (findExits >= 0) {
      const newCart = [...cart];
      newCart[findExits].quantity++;
      setCart(newCart);
    } else {
      const newItem : cartItem = {...item,quantity: 1}
      setCart([...cart, newItem]);
    }
  }

  function increaseCart(id: dispo['id']) {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCart(newCart);
  }

  function decreaseCart(id: dispo['id']) {
    const newCart = cart.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setCart(newCart);
  }

  function removeCart(id: dispo['id']) {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  }

  function showCategories(cate : Categoria) {
    setCategoria(cate);
    if (cate === "Todos") {
      setData(dispositivos);
    } else {
      const newData = dispositivos.filter((item) => item.categoria === cate);
      setData(newData);
    }
  }

  const isEmpty = useMemo(() => cart.length === 0, [cart]);

  const costoTotal = useMemo(
    () => cart.reduce((total, item) => total + item.precio * item.quantity, 0),
    [cart]
  );

  return {
    data,
    cart,
    categoria,
    addToCart,
    increaseCart,
    decreaseCart,
    removeCart,
    showCategories,
    isEmpty,
    costoTotal
  }
};
