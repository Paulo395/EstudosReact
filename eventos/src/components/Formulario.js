import { useState } from "react"

export default function Formulario() {
    const [frase,setFrase] = useState()

    function CadastroUsuario(e) {
        console.log(frase)
    }

    return (
        <div>
            <form onSubmit={CadastroUsuario} >
                <div>
                    <label htmlFor="frase" >Frase: </label>
                    <input
                        type="text"
                        id="frase"
                        frase="frase"
                        placeholder="Digite uma frase"
                        onChange={(e) => setFrase(e.target.value)}
                    />
                </div>
                {/* <div>
                    <label htmlFor="password" >Senha: </label>
                    <input type="password" id="password" password="password" placeholder="Digite uma frase" />
                </div> */}
                <div>
                    <input type="submit" value='Textão' />
                </div>
            </form>
        </div>
    )
}