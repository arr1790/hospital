import { obtenerPlantas } from "@/lib/data";
import Link from "next/link";

export async function Plantas() {
  const plantas = await obtenerPlantas();

  return (
    <ul className="flex flex-col items-center justify-center mt-10">
      {plantas.map((planta) => (
        <li key={planta.id} className="bg-slate-200 rounded-lg p-4 shadow-md mb-4 w-full md:w-1/2 lg:w-1/3">
          <h2 className="text-2xl font-bold mb-2">
            <Link href={`/plantas/${planta.id}`} className="hover:underline">
              {planta.nombre}
            </Link>
          </h2>
          <p className="text-gray-700 italic">{planta.jefePlanta}</p>
        </li>
      ))}
    </ul>
  );
}

