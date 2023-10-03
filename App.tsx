import Login from './src/Login';
import { NativeBaseProvider, StatusBar} from 'native-base'
import { TEMAS } from './src/estilos/temas';
import Cadastro from './src/Cadastro';
import Rotas from './src/rotas/rotas';
import { useEffect } from 'react';
import api from './src/services/Api';

export default function App() {

  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]} />
        <Rotas />
    </NativeBaseProvider>
  
  );
}

