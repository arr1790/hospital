import Pacientes from "@/components/pacientes/Lista";
import { Suspense } from "react";

export default function PacientesPage() {
    return (
        <div>
            
            <Suspense fallback={"Obteniendo pacientes ..."}>
                <Pacientes />
            </Suspense>
        </div>
    );
}