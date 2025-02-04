import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-blue-800 mb-8">Hospital</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Link
          href="/plantas"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg text-center shadow-md transition"
        >
          PLANTAS
        </Link>
        <Link
          href="/pacientes"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg text-center shadow-md transition"
        >
          PACIENTES
        </Link>
        <Link
          href="/medicinas"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg text-center shadow-md transition"
        >
          MEDICINAS
        </Link>
      </div>
    </div>
  );
}
