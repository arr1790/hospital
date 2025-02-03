import Medicinas from "@/components/medicinas/Lista";
import { Suspense } from "react";

export default function MedicinasPage() {
    return (
        <div>
            
            <Suspense fallback={"Obteniendo medicinas ..."}>
                <Medicinas />
            </Suspense>
        </div>
    );
}