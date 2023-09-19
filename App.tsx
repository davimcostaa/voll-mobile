import Login from './src/Login';
import { NativeBaseProvider, StatusBar} from 'native-base'

import { TEMAS } from './src/estilos/temas';

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
        <Login />
    </NativeBaseProvider>
  
  );
}

