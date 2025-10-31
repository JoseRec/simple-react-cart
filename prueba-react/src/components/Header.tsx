import type {cartItem} from "../Types/index";

type headerProps = {
  cart: cartItem[],
  increaseCart: (id: number) => void,
  decreaseCart:(id: number) => void,
  removeCart: (id: number) => void,
  isEmpty: boolean,
  costoTotal: number
}

export default function Header({
  cart,
  increaseCart,
  decreaseCart,
  removeCart,
  isEmpty,
  costoTotal
}: headerProps) {
  return (
    <>
      <header className="bg-gradient-to-r from-[#373b44] to-[#4286f4] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex justify-between items-center py-5">
            <div className="flex items-center">
              <img
                src="img/logo.png"
                alt="TechStore Logo"
                className="h-20 w-auto object-contain"
              />
            </div>

            {/* Carrito con hover dropdown */}
            <div className="relative group">
              <div className="bg-white text-[#4286f4] px-6 py-2 rounded-full font-bold cursor-pointer hover:scale-105 transition-transform">
                🛒 Carrito ({cart.length})
              </div>

              {/* Dropdown del carrito - oculto por defecto, visible en hover */}
              {/* Agregamos pt-2 para crear un "puente" invisible entre el botón y el dropdown */}
              <div className="hidden group-hover:block absolute right-0 pt-2 z-50">
                <div className="w-96 bg-white rounded-lg shadow-2xl text-gray-800">
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-[#4286f4] mb-3 border-b pb-2">
                      Tu Carrito
                    </h3>
                    {isEmpty ? (
                      <div className="text-center py-8 text-gray-500">
                        <div className="text-4xl mb-2">🛒</div>
                        <p className="text-sm">Tu carrito está vacío</p>
                      </div>
                    ) : (
                      <>
                        <div className="space-y-3 max-h-64 overflow-y-auto">
                          {cart.map((tec) => (
                            <div key={tec.id} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
                              <img
                                src={tec.imagen}
                                className="w-16 h-16 object-cover rounded"
                                alt="Producto"
                              />
                              <div className="flex-1">
                                <p className="font-semibold text-sm">
                                  {tec.nombre}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {tec.precio}
                                </p>

                                {/* Botones de cantidad */}
                                <div className="flex items-center gap-2 mt-2">
                                  <button
                                    onClick={() => decreaseCart(tec.id)}
                                    className="w-6 h-6 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-sm font-bold transition-colors"
                                  >
                                    −
                                  </button>
                                  <span className="text-sm font-semibold w-8 text-center">
                                    {tec.quantity}
                                  </span>
                                  <button
                                    onClick={() => increaseCart(tec.id)}
                                    className="w-6 h-6 bg-[#4286f4] hover:bg-[#373b44] text-white rounded-full flex items-center justify-center text-sm font-bold transition-colors"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                              <button
                                onClick={() => removeCart(tec.id)}
                                className="text-red-500 hover:text-red-700 self-start"
                              >
                                ✕
                              </button>
                            </div>
                          ))}
                        </div>

                        <div className="mt-4 pt-4 border-t">
                          <div className="flex justify-between mb-3 font-bold">
                            <span>Total:</span>
                            <span className="text-[#4286f4]">
                              ${costoTotal}
                            </span>
                          </div>
                          <button className="w-full bg-gradient-to-r from-[#373b44] to-[#4286f4] text-white py-2 rounded-lg font-bold hover:shadow-lg transition-shadow">
                            Ir a Pagar
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
