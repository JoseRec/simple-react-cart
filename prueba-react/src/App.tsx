import "./index.css";
import Header from "./components/Header"
import Categorias from "./components/Categorias";
import Dispositivo from "./components/Dispositivo";
import { useCart } from "./Hooks/useCart";

function App() {
  const {
    data,
    cart,
    categoria,
    addToCart,
    increaseCart,
    decreaseCart,
    removeCart,
    showCategories,
    isEmpty,
    costoTotal,
  } = useCart();

  return (
    <>
      <Header
        cart={cart}
        increaseCart={increaseCart}
        decreaseCart={decreaseCart}
        removeCart={removeCart}
        isEmpty={isEmpty}
        costoTotal={costoTotal}
      />
      <div className="max-w-7xl mx-auto px-4">
        <Categorias showCategories={showCategories} categoria={categoria} />
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
          {data.map((tec) => (
            <Dispositivo key={tec.id} tec={tec} addToCart={addToCart} />
          ))}
        </section>
      </div>
    </>
  );
}

export default App;
