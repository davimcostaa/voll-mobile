import { Button } from "native-base";

interface BotaoProps {
    texto: string
}

export default function Botao({texto}: BotaoProps) {
  return (
    <Button
        w='100%'
        bgColor="blue.800"
        mt='10'
        borderRadius='lg'
    >
        {texto}
    </Button>
  )
}

