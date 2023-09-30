import { Text, Avatar, VStack } from 'native-base'
import Botao from '../Botao'

interface CardProps {
    nome: string
    foto: string
    especialidade: string
    data?: string
    foiAtendido?: boolean 
    foiAgendado?: boolean
}

const CardConsulta = ({nome, foto, data, especialidade, foiAgendado, foiAtendido}: CardProps) => {
  return (
    <VStack w='100%' bg={foiAtendido ? 'blue.100' : 'white'} p='5' borderRadius='lg' mb='5' shadow='2'>
        <VStack flexDir="row">
        <Avatar source={{uri: foto}} size='lg' />
            <VStack paddingLeft="4">
                <Text fontSize='md' fontWeight="bold">{nome}</Text>
                <Text>{especialidade}</Text>
                <Text>{data}</Text>
            </VStack>  
        </VStack>

        <Botao mt='4' texto={foiAgendado ? 'Cancelar' : 'Agendar consulta'} />
    </VStack>
  )
}

export default CardConsulta
