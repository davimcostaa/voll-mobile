import { VStack, Text } from 'native-base'
import { useState } from 'react'
import Botao from '../componentes/Botao'
import CardConsulta from '../componentes/Card'
import EntradaTexto from '../componentes/EntradaTexto'
import Titulo from '../componentes/TItulo'
import { TEMAS } from '../estilos/temas'
import { buscarEspecialistaPorEstado } from '../services/EspecialistaServico'

interface Especialista {
  nome: string,
  imagem: string,
  especialidade: string,
  id: string
}

const Explorar = ({navigation} ) => {

  const [estado, setEstado] = useState('')
  const [especialidade, setEspecialidade] = useState('')
  const [resultadoBusca, setResultadoBusca] = useState([])

 async function buscar() {
  if(!estado || !especialidade) return null
  const resultado = await buscarEspecialistaPorEstado(estado, especialidade)
  if (resultado) {
    setResultadoBusca(resultado)
    console.log(resultado)
  }
 }

  return (
    <VStack p={5}>
      <VStack m={5}  
          p={4}
          pt={10}
          backgroundColor='#fff' 
          display='flex' 
          flexDirection='column'
          justifyContent="center"
          borderRadius='lg'
          shadow={3}
          height='225px'
      >
        <EntradaTexto 
            placeholder='Digite a especialidade' 
            value={especialidade}
            onChangeText={setEspecialidade} 
             mb={3} />
        <EntradaTexto 
            placeholder='Digite sua localização'
            value={estado}
            onChangeText={setEstado} 
            />
        <Botao texto='Buscar' mb={5} onPress={buscar} />

      </VStack>        
      
      <Titulo color={TEMAS.colors.blue[500]} mb={3}>
        Resultados da busca
      </Titulo>

     {resultadoBusca?.map((especialista: Especialista) => (
       <CardConsulta 
        key={especialista.id}
        nome={especialista.nome}
        especialidade={especialista.especialidade}
        foto={especialista.imagem}
        onPress={() => navigation.navigate('Agendamento', especialista.id)}
     />
     ))}

    </VStack>
  )
}

export default Explorar