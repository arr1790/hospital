import { obtenerPlantas } from "@/lib/data";

async function Plantas() {
  const plantas = await obtenerPlantas();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6 text-green-700">
        Lista de Plantas
      </h2>
      <ul className="grid gap-4">
        {plantas.map((planta) => (
          <li
            key={planta.id}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-gray-800">{planta.nombre}</h3>
            <p className="text-sm text-gray-600">Jefe: {planta.jefePlanta}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Plantas;

