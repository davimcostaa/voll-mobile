import { Image, Text, VStack, Box, Checkbox, ScrollView } from 'native-base'
import { useState } from 'react';
import Logo from './assets/Logo.png'
import Botao from './componentes/Botao';
import EntradaTexto from './componentes/EntradaTexto';
import Titulo from './componentes/TItulo';
import { cadastrarPaciente } from './services/PacienteServico';
import { secoes } from './utils/CadastroEntradaTexto';

export default function Cadastro() {
  const [numSecao, setNumSecao] = useState(0)
  const [dados, setDados] = useState({} as any)
  const [planos, setPlanos] = useState([] as number[])

  function avancarSecao() {
    if(numSecao < secoes.length - 1) {
      setNumSecao(numSecao + 1)
    } 
    else {
      console.log(dados)
      console.log(planos)
      cadastrar()
    }
  }

  function voltarSecao() {
    if (numSecao > 0) {
      setNumSecao(numSecao - 1)
    }
  }

  function atualizarDados(id: string, valor: string) {
      setDados({...dados, [id]: valor})
  }

  async function cadastrar() {
    const resultado = await cadastrarPaciente({
      cpf: dados.cpf,
      nome: dados.nome,
      email: dados.email,
      endereco: {
        cep: dados.cep,
        rua: dados.rua,
        estado: dados.estado,
        numero: dados.numero,
        complemento: dados.complemento
      },
      senha: dados.senha,
      telefone: dados.telefone,
      possuiPlanoSaude: planos.length > 0,
      planosSaude: planos,
      imagem: dados.imagem
    })

    if(!resultado) {
      console.log('Erro ao fazer cadastro')
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
                  secureTextEntry={item.secureTextEntry}
                  value={dados[item.name]}
                  onChangeText={(text) => atualizarDados(item.name, text)}
              />)
          }
      </Box>
      <Box> 
         { numSecao >= 2 && <Text color="blue.800" fontWeight="bold" fontSize="md" mt="2" mb="4">Selecione o plano:</Text> }
          {secoes[numSecao]?.checkbox?.map(item => 
              <Checkbox 
                key={item.id} 
                value={item.value}
                onChange={() => 
                  setPlanos((planosAnteriores) => {
                    if(planosAnteriores.includes(item.id)) {
                      return planosAnteriores.filter((id) => id !== item.id)
                    }
                    return [...planosAnteriores, item.id]
                  })
                }
                isChecked={planos.includes(item.id)}
              >
                {item.value}
              </Checkbox>
        )}
      </Box>
     
      { numSecao >= 1 && <Botao texto='Voltar' bgColor="gray.400" onPress={voltarSecao} /> }
      <Botao texto={numSecao == 2 ? 'Finalizar' : 'Avançar'} onPress={avancarSecao} mt='4' mb='15' />
  
    </ScrollView>
  );
}

