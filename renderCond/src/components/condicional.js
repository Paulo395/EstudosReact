import { useState } from "react";

export default function Condicional() {
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        // setEmail(e.target.form[0].value)
        setUserEmail(email)
    }

    function limparEmail(){
        setUserEmail('')
    }

    return (
        <div>
            <h3>Cadastre o seu e-mail:</h3>
            <form>
                <input
                    type="email"
                    placeholder="Digite o seu e-mail"
                    onChange={(e) =>
                    setEmail(e.target.value)} />
                <div>
                    <button
                        onClick={enviarEmail}>Enviar e-mail
                    </button>
                </div>
                {userEmail && (
                    <div>
                        <p>O email é: {email}/</p>
                        <button onClick={limparEmail} >Limpar e-mail</button>
                    </div>
                )}
            </form>
        </div>
    )
}