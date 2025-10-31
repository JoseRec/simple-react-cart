import type {dispo} from "../Types/index";

type DispositivoProps = {
  tec: dispo,
  addToCart: (item: dispo) => void;
}

export default function Dispositivo({ tec, addToCart } : DispositivoProps) {
  const { categoria, nombre, descripcion, calificacion, precio, imagen } = tec;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all cursor-pointer">
      <img src={imagen} className="w-full h-48 object-cover" />
      <div className="p-5">
        <div className="text-xs text-[#4286f4] font-bold uppercase tracking-wider">
          {categoria}
        </div>
        <h3 className="text-xl font-bold mt-2 text-[#373b44]">{nombre}</h3>
        <p className="text-sm text-gray-600 mt-2">{descripcion}</p>
        <div className="text-yellow-500 mt-2">⭐⭐⭐⭐⭐ {calificacion}</div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-2xl font-bold text-[#4286f4]"> ${precio}</span>
          <button
            onClick={() => addToCart(tec)}
            className="bg-[#4286f4] text-white px-5 py-2 rounded-full font-bold hover:bg-[#2e6ae6] transition-colors shadow-md hover:shadow-lg"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}
