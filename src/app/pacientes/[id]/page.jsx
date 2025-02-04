import Paciente   from "@/components/pacientes/Item";
import { Suspense } from "react";
import  BotonAtras  from "@/components/BotonAtras";


async function PaginaPaciente({ params, searchParams }) {
    const { id } = await params

    return (
        <div>
            <h1>DATOS DE LA PACIENTE</h1>
            <Suspense fallback={
                <p className="text-blue-500 text-2xl font-bold animate-pulse">
                    Obteniendo datos...
                </p>
            }>
                <Paciente id={id} />
                <BotonAtras />

            </Suspense>
        </div>
    )

}

export default PaginaPaciente;