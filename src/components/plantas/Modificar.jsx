import { modificarPlanta } from "@/lib/actions";

function PlantaModificar({ planta }) {
    return (
        <form action={modificarPlanta}>
            <input type="hidden" name="id" defaultValue={planta.id} />
            <input name='nombre' defaultValue={planta.nombre} />
            <input name='jefePlanta' defaultValue={planta.jefePlanta} />
           

            <button className="border-2 border-black">Modificar</button>
        </form>
    );
}

export default PlantaModificar;