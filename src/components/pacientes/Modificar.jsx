import { modificarPaciente } from "@/lib/actions";

function PacienteModificar({ paciente }) {
    return (
        <form action={modificarPaciente}>
            <input type="hidden" name="id" defaultValue={paciente.id} />
            <input name='nombre' defaultValue={paciente.nombre} />
            <input name='fecha_nacimiento' defaultValue={paciente.fecha_nacimiento} />
           

            <button className="border-2 border-black">Modificar</button>
        </form>
    );
}

export default PacienteModificar;