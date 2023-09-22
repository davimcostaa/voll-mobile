import { Image, Text, VStack, Box, Checkbox, ScrollView } from 'native-base'
import { useState } from 'react';
import Logo from './assets/Logo.png'
import Botao from './componentes/Botao';
import EntradaTexto from './componentes/EntradaTexto';
import Titulo from './componentes/TItulo';
import { secoes } from './utils/CadastroEntradaTexto';

export default function Cadastro() {
  const [numSecao, setNumSecao] = useState(0)

  function avancarSecao() {
    if(numSecao < secoes.length - 1) {
      setNumSecao(numSecao + 1)
    } 
  }

  function voltarSecao() {
    if (numSecao > 0) {
      setNumSecao(numSecao - 1)
    }
  }

  return (
    <ScrollView p={5}>
      <Image source={Logo} alt="Logo Voll" alignSelf="center" />
      <Titulo>
        {secoes[numSecao].titulo}
      </Titulo>
      <Box> 
        {secoes[numSecao].entradaTexto.map(item => 
              <EntradaTexto 
                  key={item.id}
                  label={item.label} 
                  placeholder={item.placeholder}
              />)
          }
      </Box>
      <Box> 
         { numSecao >= 2 && <Text color="blue.800" fontWeight="bold" fontSize="md" mt="2" mb="4">Selecione o plano:</Text> }
        {secoes[numSecao]?.checkbox?.map(item => 
              <Checkbox key={item.id} value={item.value}>
                {item.value}
              </Checkbox>
        )}
      </Box>
     
      { numSecao >= 1 && <Botao texto='Voltar' bgColor="gray.400" onPress={voltarSecao} /> }
      <Botao texto='Avançar' onPress={avancarSecao} mt='4' mb='15' />
  
    </ScrollView>
  );
}

