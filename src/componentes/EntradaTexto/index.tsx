import { FormControl, Input } from "native-base"

interface EntradaTextoProps {
    label: string
    placeholder: string
}

function EntradaTexto({label, placeholder, ...rest}: EntradaTextoProps) {
  return (
    <FormControl mt={3}>
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