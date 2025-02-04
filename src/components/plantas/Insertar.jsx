import { insertarPlanta } from "@/lib/actions";

function PlantaInsertar() {
    return (
        <form action={insertarPlanta}>
            <input name="nombre" placeholder="Nombre" />
            <input name="JefePlanta" placeholder="Jefe de planta" />
          
            <button className="border-2 border-black">Insertar Planta</button>
        </form>

    );
}

export default PlantaInsertar;