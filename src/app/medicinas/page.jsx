import Medicinas from "@/components/medicinas/Lista";
import { Suspense } from "react";
import BotonAtras from "@/components/BotonAtras";

export default function MedicinasPage() {
    return (
        <div>
            
            <Suspense fallback={"Obteniendo medicinas ..."}>
                <Medicinas />
                <BotonAtras />
            </Suspense>
        </div>
    );
}