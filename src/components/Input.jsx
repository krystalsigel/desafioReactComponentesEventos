import React from "react"
const Input = ({estado, setEstado}) => {
    return (
        <div className="row p-3 justify-content-center">
            <div class="col-12 col-md-11 p-3 colun">
                <h1>Desafío Estado de los componentes y eventos</h1>
            <label>Nombre:</label>
                <input placeholder="Ingresa un nombre" type="text"/>
            <label>Contraseña:</label>
                <input placeholder="Ingresa una contraseña" type="text" onChange={(e)=> setEstado(e.target.value)}
                value={estado}/>
            </div>
        </div>
    )
}
export default Input