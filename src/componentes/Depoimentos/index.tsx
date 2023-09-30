import React from 'react'
import { Divider, Text, VStack } from 'native-base'
import { TEMAS } from '../../estilos/temas'

interface DepoimentosProps {
    texto: string,
    identificacao: string
}

export default function Depoimentos({texto, identificacao}: DepoimentosProps) {
  return (
    <VStack m={5} mt={3}>
      <Text fontSize='16' color={TEMAS.colors.gray[500]} mb={3}>{texto}</Text>
      <Text  fontSize='16' fontWeight="bold" textAlign="center">{identificacao}</Text>
      <Divider my="2" mt={3} />
    </VStack>
  )
}
