import Plantas from "@/components/plantas/Lista";
import { Suspense } from "react";

export default function PlantasPage() {
    return (
        <div>
            
            <Suspense fallback={"Obteniendo plantas ..."}>
                <Plantas />
            </Suspense>
        </div>
    );
}