import { FormControl, Input } from "native-base"

interface EntradaTextoProps {
    label?: string
    placeholder: string
    mt?: number
    secureTextEntry?: boolean
    value?: string
    onChangeText?: (text: string) => void
}

function EntradaTexto({label, placeholder, secureTextEntry, value, onChangeText, mt, ...rest}: EntradaTextoProps) {
  return (
    <FormControl mt={mt}>
    <FormControl.Label>{label}</FormControl.Label>
    <Input 
      placeholder={placeholder}
      size='lg'
      w="100%"
      borderRadius='lg' 
      secureTextEntry={secureTextEntry}
      bgColor='gray.100'
      shadow={3}
      value={value}
      onChangeText={onChangeText}
      {...rest}
    />
  </FormControl>
  )
}

export default EntradaTexto