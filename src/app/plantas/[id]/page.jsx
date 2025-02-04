import Planta   from "@/components/plantas/Item";
import { Suspense } from "react";
import  BotonAtras  from "@/components/BotonAtras";


async function PaginaGrupo({ params, searchParams }) {
    const { id } = await params

    return (
        <div>
            <h1>DATOS DE LA PLANTA</h1>
            <Suspense fallback={
                <p className="text-blue-500 text-2xl font-bold animate-pulse">
                    Obteniendo datos...
                </p>
            }>
                <Planta id={id} />
                
                <BotonAtras />
            </Suspense>
        </div>
    )

}

export default PaginaGrupo;