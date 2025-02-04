"use client";
import { useRouter } from "next/navigation";

export default function BotonAtras() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()} // Vuelve a la página anterior
      className="mt-8 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition"
    >
      Atrás
    </button>
  );
}
