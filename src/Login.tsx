import { Image, Text, VStack, Box, FormControl, Input, Button, Link } from 'native-base'
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png'
import Botao from './componentes/Botao';
import EntradaTexto from './componentes/EntradaTexto';
import Titulo from './componentes/TItulo';

export default function Login() {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt="Logo Voll" />
      <Titulo>
        Faça login em sua conta
      </Titulo>
      <Box> 
      <EntradaTexto
        label="Email"
        placeholder="Insira seu endereço de e-mail"
      />
      <EntradaTexto
        label="Senha"
        placeholder="Insira sua senha"
      />
      </Box>
     
     <Botao texto='Entrar' />

      <Link mt={2} href='https://alura.com.br'>Esqueceu sua senha?</Link>

      <Box w='100%' mt={8} flexDirection="row" justifyContent="center">
        <Text>Ainda não tem cadastro?</Text>
        <TouchableOpacity>
          <Text color="blue.500">
            Faça seu cadastro!
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}

