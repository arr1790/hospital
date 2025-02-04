import { obtenerMedicina } from "@/lib/data";
import { notFound } from "next/navigation";

async function Medicina({ id }) {
  const medicina = await obtenerMedicina(id);

  if (!medicina) notFound();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md border border-gray-200">
        <h2 className="text-2xl font-bold text-green-700 text-center mb-4">
          {medicina.nombre}
        </h2>
        <p className="text-gray-600 text-lg font-semibold">
          <span className="font-bold">Via:</span> {medicina.via}
        </p>
        
    
      </div>
    </div>
  );
}

export default Medicina;
