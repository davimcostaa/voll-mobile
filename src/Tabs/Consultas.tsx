import AsyncStorage from '@react-native-async-storage/async-storage'
import { VStack, ScrollView, Divider } from 'native-base'
import { useEffect, useState } from 'react'
import Botao from '../componentes/Botao'
import CardConsulta from '../componentes/Card'
import Titulo from '../componentes/TItulo'
import { Especialista } from '../interfaces/Especialista'
import { pegarConsultasPaciente } from '../services/PacienteServico'

interface ConsultaProps {
    id: string
    data: string
    especialista: Especialista
    
}

const Consultas = () => {

  const [proximasConsultas, setProximasConsultas] = useState<ConsultaProps[]>([])
  const [consultasPassadas, setConsultasPassadas] = useState<ConsultaProps[]>([])

  useEffect(() => {
      async function pegarConsultas() {
        const pacienteId = await AsyncStorage.getItem('pacienteId')
        if (!pacienteId) return null

        const todasAsConsultas:ConsultaProps[] = await pegarConsultasPaciente(pacienteId)

        const agora = new Date();
        
        const proximas = todasAsConsultas.filter((consulta) => new Date(consulta.data) > agora)
        const passadas = todasAsConsultas.filter((consulta) => new Date(consulta.data) < agora)

        setConsultasPassadas(passadas)
        setProximasConsultas(proximas)
        }
        pegarConsultas()
  }, [])

  return (
    <ScrollView p='5'>
      <Titulo color="blue.500">Minhas Consultas</Titulo>
      <Botao texto='Agendar nova consulta' mt='5' mb="5" />
      <Titulo 
        color="blue.500"
        fontSize="lg"
        alignSelf="flex-start"
        mb={2}
      >Próximas Consultas</Titulo>

      {proximasConsultas?.map((consulta) => (
        <CardConsulta 
        nome={consulta?.especialista?.nome}
        especialidade={consulta.especialista.especialidade}
        foto={consulta?.especialista?.imagem}
        data={consulta?.data}
        key={consulta.id}
        foiAgendado
      />
      ))}

      <Divider mt={5} />

      <Titulo 
        color="blue.500"
        fontSize="lg"
        alignSelf="flex-start"
        mb={2}
      > Consultas Passadas</Titulo>

      {consultasPassadas?.map((consulta) => (
        <CardConsulta 
        nome={consulta?.especialista?.nome}
        especialidade={consulta.especialista.especialidade}
        foto={consulta?.especialista?.imagem}
        data={consulta?.data}
        key={consulta.id}
        foiAtendido
      />
      ))}

    </ScrollView>
  )
}

export default Consultas