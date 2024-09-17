import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import ImagenCriptop from './img/imagen-criptos.png'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;
`
const Contenedor = styled.div`
  max-width:900px;
  margin: 0 auto;
  width:90%;
  @media(min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 2rem
  }
`
const Imagen = styled.img` 
  max-width:450px;
  width:80%;
  margin: 100px auto 0 auto;
  display:block;
  
`

function App() {
    //State para traer la moneday criptomoneda para buscarla
    const [monedas,setMonedas]=useState({})
    const [resultado,setResultado] =useState({})
    const [cargando,setCargando] = useState(false)
    //Effect para saber cuando se actualiza la monedas
    useEffect(()=>{
        if(Object.keys(monedas).length>0){
          const cotizarCripto = async ()=>{
            setCargando(true)
            const {moneda,criptomoneda} = monedas
              const url=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
              //fetch para extraer los datos
              const respuesta = await fetch(url)
              const resultado = await respuesta.json()
              setResultado(resultado.DISPLAY[criptomoneda][moneda])
              setCargando(false)
            }
          cotizarCripto();
        }
    },[monedas])
  return (
    <Contenedor>
        <Imagen
          src={ImagenCriptop}
          alt="Imagen Cripto"
        />
        <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>
        <Formulario
          setMonedas={setMonedas}
        />
        {cargando && <Spinner/>}
        {resultado.PRICE && <Resultado resultado={resultado}/>}

        </div>    
    </Contenedor>
  )
}

export default App
