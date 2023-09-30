import { Image, Text, VStack, Box, FormControl, Input, Button, Link, useToast } from 'native-base'
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png'
import Botao from './componentes/Botao';
import EntradaTexto from './componentes/EntradaTexto';
import Titulo from './componentes/TItulo';
import { useEffect, useState } from 'react'
import { fazerLogin } from './services/AutenticacaoServico';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';

export default function Login({navigation}) {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [carregando, setCarregando] = useState(true)
  const toast = useToast()

  useEffect(() => {
    AsyncStorage.removeItem('token')
    async function verificarLogin() {
      const token = await AsyncStorage.getItem('token')
      if (token) {
        navigation.replace('Tabs')
      }
      setCarregando(false)
    }
    verificarLogin()
  }, [])

  async function Login() {
    const resultado = await fazerLogin(email, senha)
    if (resultado) {
      const { token } = resultado
      AsyncStorage.setItem('token', token)
       
      const tokenDecodificado = jwtDecode(token) as any
      const pacienteId = tokenDecodificado.id

      AsyncStorage.setItem('pacienteId', pacienteId)
      navigation.replace('Tabs')
    } else {
      toast.show({
        title: 'Error no login',
        description: "O email e senha não conferem",
        backgroundColor: "red.500"
      })
    }
  }

  if (carregando) {
    return null
  }

  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt="Logo Voll" />
      <Titulo>
        Faça login em sua conta
      </Titulo>
      <Box> 
      <EntradaTexto
        mt={3}
        label="Email"
        placeholder="Insira seu endereço de e-mail"
        value={email}
        onChangeText={setEmail}
      />
      <EntradaTexto
        mt={3}
        label="Senha"
        placeholder="Insira sua senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      </Box>
     
     <Botao texto='Entrar' onPress={Login} />

      <Link mt={2} href='https://alura.com.br'>Esqueceu sua senha?</Link>

      <Box w='100%' mt={8} flexDirection="row" justifyContent="center">
        <Text>Ainda não tem cadastro?</Text>
        <TouchableOpacity>
          <Text color="blue.500" onPress={() => navigation.navigate('Cadastro')}>
            Faça seu cadastro!
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}

