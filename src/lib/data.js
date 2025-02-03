'use server'

import prisma from "@/lib/prisma"

// ---------------------   GRUPOS -----------------------

async function obtenerPlanta() {
    const plantas = await prisma.planta.findMany()
    return plantas
}


async function obtenerPLanta(id) {
    const planta = await prisma.planta.findUnique({
        where: { id: +id }
    })
    return planta
}


// --------------------- PACIENTE -----------------------

async function obtenerPaciente() {
    const pacientes = await prisma.paciente.findMany()
    return pacientes
}


async function obtenerPaciente (id) {
    const paciente = await prisma.paciente.findUnique({
        where: { id: +id },
        include: {
            planta: true,
            medicina: true,
        }
    })
    return paciente
}

// ---------------------   MEDICINA -----------------------

async function obtenerMedicina() {
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
    obtenerPlanta,
    obtenerPLanta,
    obtenerPaciente,
    obtenerPaciente,
    obtenerMedicina,
    obtenerMedicina
}