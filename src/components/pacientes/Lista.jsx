import { obtenerPacientes } from "@/lib/data";

async function Pacientes() {
  const pacientes = await obtenerPacientes();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6 text-green-700">
        Lista de Pacientes
      </h2>
      <ul className="grid gap-4">
        {pacientes.map((paciente) => (
          <li
            key={paciente.id}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-gray-800">{paciente.nombre}</h3>
            <p className="text-sm text-gray-600">
              Fecha de Nacimiento: {new Date(paciente.fechaNacimiento).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-600">Planta: {paciente.plantaId}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pacientes;

  