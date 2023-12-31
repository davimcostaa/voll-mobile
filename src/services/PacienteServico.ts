import { Paciente } from "../interfaces/Paciente"
import api from "./Api"

export async function cadastrarPaciente(paciente: Paciente) {
    if(!paciente) return null

    try {
        const resultado = await api.post('/paciente', paciente)
        return resultado.data
    } catch (error) {
        console.log(error)
        return null
    }
}

export async function pegarDadosPaciente(id: string) {
    try {
        const resultado = await api.get(`/paciente/${id}`)
        return resultado.data
    } catch (error) {
        console.log(error)
        return null
    }
}

export async function pegarConsultasPaciente(id: string) {
    try {
        const resultado = await api.get(`/paciente/${id}/consultas`)
        return resultado.data
    } catch (error) {
        console.log(error)
        return null
    }
}