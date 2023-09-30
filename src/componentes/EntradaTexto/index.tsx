import { FormControl, Input } from "native-base"

interface EntradaTextoProps {
    label?: string
    placeholder: string
    mt?: number
}

function EntradaTexto({label, placeholder, mt, ...rest}: EntradaTextoProps) {
  return (
    <FormControl mt={mt}>
    <FormControl.Label>{label}</FormControl.Label>
    <Input 
      placeholder={placeholder}
      size='lg'
      w="100%"
      borderRadius='lg' 
      bgColor='gray.100'
      shadow={3}
      {...rest}
    />
  </FormControl>
  )
}

export default EntradaTexto