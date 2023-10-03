import { VStack, Text, ScrollView, Avatar, Divider } from 'native-base'
import Titulo from '../componentes/TItulo'
import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { pegarDadosPaciente } from '../services/PacienteServico'
import { Paciente } from '../interfaces/Paciente'
import Botao from '../componentes/Botao'

const Perfil = ({navigation}) => {

  const [dadosPaciente, setDadosPaciente] = useState({} as Paciente)

  useEffect(() => {
    async function dadosPaciente() {
      const pacienteId = await AsyncStorage.getItem('pacienteId')
      if (!pacienteId) return null

      const resultado = await pegarDadosPaciente(pacienteId)
      if (resultado) {
        setDadosPaciente(resultado)
        
      }
    }
    dadosPaciente()
  }, [])

  function deslogar() {
    AsyncStorage.removeItem('token')
    AsyncStorage.removeItem('pacienteId')
    navigation.replace('Login')
  }

  return (
    <ScrollView flex={1}>
      <VStack flex={1} alignItems="center" p={5}>
        <Titulo color="blue.500" >Meu perfil</Titulo>
        <Avatar source={{uri: dadosPaciente?.imagem}} mt={5} size='xl' />

        <Titulo color="blue.500">Informações pessoais</Titulo>
        <Titulo fontSize="lg" marginBottom={1}>{dadosPaciente?.nome}</Titulo>
        <Text>{dadosPaciente.email}</Text>
        <Text>={dadosPaciente.endereco?.estado}</Text>

        <Divider mt={5} />

        <Titulo color="blue.500" mb={1}>Planos de Saúde</Titulo>
        {dadosPaciente.planosSaude?.map((plano, index) => (
          <Text key={index}>{plano}</Text>
        ))}

        <Botao texto='Deslogar' onPress={deslogar} />    
      </VStack>
    </ScrollView>
  )
}

export default Perfil