import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 gap-4 md:grid-cols-3">
      <Link
        href="/plantas"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        PLANTAS
      </Link>
      <Link
        href="/pacientes"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        PACIENTES
      </Link>
      <Link
        href="/medicinas"
        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
      >
        MEDICINAS
      </Link>
    </div>
  );
}
