import Login from './src/Login';
import { NativeBaseProvider, StatusBar} from 'native-base'

import { TEMAS } from './src/estilos/temas';
import Cadastro from './src/Cadastro';
import Rotas from './src/rotas/rotas';

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]} />
        <Rotas />
    </NativeBaseProvider>
  
  );
}

