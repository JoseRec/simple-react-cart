import type {Categoria} from "../Types/index";


type categoriaProps = {
  showCategories: (cate: Categoria) => void,
  categoria : Categoria
}

export default function Categorias({showCategories, categoria} : categoriaProps) {
  return (
    <section className="bg-white p-6 my-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-[#373b44]">Categorías</h2>
      <div className="flex flex-wrap gap-3">
        <button onClick={() => showCategories('Todos')} className={`px-6 py-2 border-2 rounded-full font-semibold transition-all ${categoria === 'Todos'
            ? 'bg-[#4286f4] text-white border-[#4286f4] shadow-md scale-105'
            : 'border-[#4286f4] text-[#4286f4] bg-white hover:bg-[#4286f4] hover:text-white'}`}>
          Todos
        </button>
        <button onClick={() => showCategories('Laptops')} className={`px-6 py-2 border-2 rounded-full font-semibold transition-all ${categoria === 'Laptops'
            ? 'bg-[#4286f4] text-white border-[#4286f4] shadow-md scale-105'
            : 'border-[#4286f4] text-[#4286f4] bg-white hover:bg-[#4286f4] hover:text-white'}`}>
          Laptops
        </button>
        <button onClick={() => showCategories('Smartphones')} className={`px-6 py-2 border-2 rounded-full font-semibold transition-all ${categoria === 'Smartphones'
            ? 'bg-[#4286f4] text-white border-[#4286f4] shadow-md scale-105'
            : 'border-[#4286f4] text-[#4286f4] bg-white hover:bg-[#4286f4] hover:text-white'}`}>
            Smartphones
        </button>
        <button onClick={() => showCategories('Audio')} className={`px-6 py-2 border-2 rounded-full font-semibold transition-all ${categoria === 'Audio'
            ? 'bg-[#4286f4] text-white border-[#4286f4] shadow-md scale-105'
            : 'border-[#4286f4] text-[#4286f4] bg-white hover:bg-[#4286f4] hover:text-white'}`}>
          Audio
        </button>
        <button onClick={() => showCategories('Tablets')} className={`px-6 py-2 border-2 rounded-full font-semibold transition-all ${categoria === 'Tablets'
            ? 'bg-[#4286f4] text-white border-[#4286f4] shadow-md scale-105'
            : 'border-[#4286f4] text-[#4286f4] bg-white hover:bg-[#4286f4] hover:text-white'}`}>
          Tablets
        </button>
        <button onClick={() => showCategories('Wearables')} className={`px-6 py-2 border-2 rounded-full font-semibold transition-all ${categoria === 'Wearables'
            ? 'bg-[#4286f4] text-white border-[#4286f4] shadow-md scale-105'
            : 'border-[#4286f4] text-[#4286f4] bg-white hover:bg-[#4286f4] hover:text-white'}`}>
          Wearables
        </button>
        <button onClick={() => showCategories('Cámaras')} className={`px-6 py-2 border-2 rounded-full font-semibold transition-all ${categoria === 'Cámaras'
            ? 'bg-[#4286f4] text-white border-[#4286f4] shadow-md scale-105'
            : 'border-[#4286f4] text-[#4286f4] bg-white hover:bg-[#4286f4] hover:text-white'}`}>
          Cámaras
        </button>
      </div>
    </section>
  );
}
