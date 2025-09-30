import Titulo from "../src/componentes/Titulo";
import Botao from "../src/componentes/botao";
import Box from '@mui/material/Box'
import './App.css'
import Lista from "../src/componentes/lista"

function App(){

  return(
    <>
      <Box id='container' >
        <Titulo/>
        <Botao/>
        <Lista/>
      </Box>
    </>
  )
}
export default App