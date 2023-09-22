import { VStack, ScrollView, Divider } from 'native-base'
import Botao from '../componentes/Botao'
import CardConsulta from '../componentes/Card'
import Titulo from '../componentes/TItulo'

const Consultas = () => {
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

      <CardConsulta 
        nome="Davi Marques"
        especialidade='Cardiologista'
        foto='https://github.com/davimcostaa.png'
        foiAgendado
      />

      <Divider mt={5} />

      <Titulo 
        color="blue.500"
        fontSize="lg"
        alignSelf="flex-start"
        mb={2}
      > Consultas Passadas</Titulo>

      <CardConsulta 
        nome="Davi Marques"
        especialidade='Cardiologista'
        foto='https://github.com/davimcostaa.png'
        foiAtendido
      />
      <CardConsulta 
        nome="Davi Marques"
        especialidade='Cardiologista'
        foto='https://github.com/davimcostaa.png'
        foiAtendido
      />

      <CardConsulta 
        nome="Davi Marques"
        especialidade='Cardiologista'
        foto='https://github.com/davimcostaa.png'
        foiAtendido
      />


    </ScrollView>
  )
}

export default Consultas