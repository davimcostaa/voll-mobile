import { VStack, Text, ScrollView, Avatar, Divider } from 'native-base'
import Titulo from '../componentes/TItulo'

const Perfil = () => {
  return (
    <ScrollView flex={1}>
      <VStack flex={1} alignItems="center" p={5}>
        <Titulo color="blue.500" >Meu perfil</Titulo>
        <Avatar source={{uri: "https://github.com/davimcostaa.png"}} mt={5} size='xl' />

        <Titulo color="blue.500">Informações pessoais</Titulo>
        <Titulo fontSize="lg" marginBottom={1}>Davi Marques</Titulo>
        <Text>12/12/1990</Text>
        <Text>Brasília</Text>

        <Divider mt={5} />

        <Titulo color="blue.500" mb={1} >Histórico médico</Titulo>
        <Text>Bronquite</Text>
        <Text>Sinusite</Text>

      </VStack>
    </ScrollView>
  )
}

export default Perfil