import { VStack, Text, ScrollView, Image, Input } from 'native-base'
import Logo from '../assets/Logo.png'
import Botao from '../componentes/Botao'
import Depoimentos from '../componentes/Depoimentos'
import EntradaTexto from '../componentes/EntradaTexto'
import Titulo from '../componentes/TItulo'
import { TEMAS } from '../estilos/temas'

const Principal = () => {
  return (
    <ScrollView p={5}>
      <Image source={Logo} alt="Logo Voll" mt={3} mb={3} />
      <Titulo color={TEMAS.colors.blue[500]} textAlign='left'>
        Boas-vindas!
      </Titulo>

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

      <Titulo color={TEMAS.colors.blue[800]}>
        Depoimentos
      </Titulo>

      <Depoimentos 
          texto='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.'
          identificacao="Júlio, 40 anos, São Paulo/SP."
      />
      <Depoimentos 
          texto='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.'
          identificacao="Júlio, 40 anos, São Paulo/SP."
      />
      <Depoimentos 
          texto='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.'
          identificacao="Júlio, 40 anos, São Paulo/SP."
      />
    </ScrollView>
  )
}

export default Principal