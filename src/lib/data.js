'use server'

import prisma from "@/lib/prisma"

// ---------------------   GRUPOS -----------------------

async function obtenerPlantas() {
    const plantas = await prisma.planta.findMany()
    return plantas
}


async function obtenerPlanta(id) {
    const planta = await prisma.planta.findUnique({
        where: { id: +id }
    })
    return planta
}


// --------------------- PACIENTE -----------------------

async function obtenerPacientes(){
    const pacientes = await prisma.paciente.findMany()
    return pacientes
}


async function obtenerPaciente (id) {
    const paciente = await prisma.paciente.findUnique({
        where: { id: +id },
        include: {
            planta: true
        }
    })
    return paciente
}

// ---------------------   MEDICINA -----------------------

async function obtenerMedicinas() {
    const medicinas = await prisma.medicina.findMany()
    return medicinas
}


async function obtenerMedicina(id) {
    const medicina = await prisma.medicina.findUnique({
        where: { id: +id }
    })
    return medicina
}


export {
    obtenerPlantas,
    obtenerPlanta,
    obtenerPacientes,
    obtenerPaciente,
    obtenerMedicinas,
    obtenerMedicina
}