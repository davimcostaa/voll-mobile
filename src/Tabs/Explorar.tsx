import { VStack, Text } from 'native-base'
import Botao from '../componentes/Botao'
import CardConsulta from '../componentes/Card'
import EntradaTexto from '../componentes/EntradaTexto'
import Titulo from '../componentes/TItulo'
import { TEMAS } from '../estilos/temas'

const Explorar = () => {
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
        <EntradaTexto placeholder='Digite a especialidade' mb={3} />
        <EntradaTexto placeholder='Digite sua localização' />
        <Botao texto='Buscar' mb={5} />

      </VStack>        
      
      <Titulo color={TEMAS.colors.blue[500]} mb={3}>
        Resultados da busca
      </Titulo>

      <CardConsulta 
        nome="Davi Marques"
        especialidade='Cardiologista'
        foto='https://github.com/davimcostaa.png'
       
      />
    </VStack>
  )
}

export default Explorar