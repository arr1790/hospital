import { obtenerPacientes } from "@/lib/data";
import Link from "next/link";
import Modal from "@/components/Modal";
import PacienteInsertar from "./Insertar"; // Asegúrate de crear el componente para insertar pacientes
import PacienteModificar from "./Modificar"; // Asegúrate de crear el componente para modificar pacientes
import PacienteEliminar from "./Eliminar"; // Asegúrate de crear el componente para eliminar pacientes

export default async function Pacientes() {
  const pacientes = await obtenerPacientes();

  return (
    <div className="bg-gray-100 p-8 min-h-screen">
      {/* Botón Insertar */}
      <Modal openElement={<p className="inline-block text-white bg-blue-600 p-4 rounded-md cursor-pointer hover:bg-blue-700 transition mb-6">INSERTAR PACIENTE</p>}>
        <PacienteInsertar />
      </Modal>

      <ul className="flex flex-col items-center justify-center mt-10 space-y-4">
        {pacientes.map((paciente) => (
          <li key={paciente.id} className="bg-white rounded-lg p-6 shadow-lg mb-4 w-full md:w-1/2 lg:w-1/3 transition-all hover:scale-105 hover:shadow-xl">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold mb-2 text-gray-900">
                <Link href={`/pacientes/${paciente.id}`} className="hover:text-blue-600 hover:underline">
                  {paciente.nombre}
                </Link>
              </h2>

              <div className="flex space-x-2">
                {/* Botón Modificar */}
                <Modal openElement={<p className="inline-block text-white bg-yellow-500 p-2 rounded-md cursor-pointer hover:bg-yellow-600 transition">Modificar</p>}>
                  <PacienteModificar paciente={pacientes} />
                </Modal>
                {/* Botón Eliminar */}
                <Modal openElement={<p className="inline-block text-white bg-red-600 p-2 rounded-md cursor-pointer hover:bg-red-700 transition">Eliminar</p>}>
                  <PacienteEliminar paciente={pacientes} />
                </Modal>
              </div>
            </div>

            <p className="text-gray-600 italic mb-4">
              <span className="font-bold">Fecha de Nacimiento:</span>{" "}
              {new Date(paciente.fechaNacimiento).toLocaleDateString()}
            </p>
            <p className="text-gray-700">Planta: {paciente.plantaId}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
