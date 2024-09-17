import {useState} from 'react'
import styled from '@emotion/styled'


const Label = styled.label`
    color: white;
    display: block;
    font-family: 'Lato',sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`
const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
`

const useSelectMonedas = (label,opciones) => {
    //useState 
    const [state, setState] = useState('')

    const SelectdeMonedas= ()=>(
        <>
            <Label htmlFor="">{label}</Label>
            <Select
                value={state}
                onChange={e=>setState(e.target.value)}
            >
                <option value="">Seleccione</option>
                {opciones.map(opcionTemporal =>(
                    <option 
                        key={opcionTemporal.id}
                        value={opcionTemporal.id}
                    >
                        {opcionTemporal.nombre}
                    </option>
                ))}
            </Select>
        </>
    )

  return [state,SelectdeMonedas]
}

export default useSelectMonedas