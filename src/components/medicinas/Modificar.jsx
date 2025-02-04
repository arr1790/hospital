import { modificarMedicina } from "@/lib/actions";

function MedicinaModificar({ medicina }) {
    return (
        <form action={modificarMedicina}>
            <input type="hidden" name="id" defaultValue={medicina.id} />
            <input name='nombre' defaultValue={medicina.nombre} />
            <input name='via' defaultValue={medicina.via} />
           

            <button className="border-2 border-black">Modificar</button>
        </form>
    );
}

export default MedicinaModificar;