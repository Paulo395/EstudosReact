import { useState } from "react"

export default function Frase(props) {
    const [nome, setNome] = useState()

    function AtribuindoValor(e){
        setNome(e.target.value)
        console.log(nome)
    }

    return (
        <div>
            <h3>Inserindo dados</h3>
            <form onSubmit={AtribuindoValor} >
                <label htmlFor="nome" >Nome: </label>
                <input
                    type="text"
                    id="nome"
                    placeholder="Digite uma Frase"
                />
                <div>
                    <input type="submit" value={'Enviar'} />
                </div>
            </form>
        </div>
    )
}