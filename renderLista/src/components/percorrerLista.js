export default function PercorrerLista({lista}){
    return(
        <div>
            {lista.map((lista, index) => (
                <p key={index} >{lista}</p>
            ))}
        </div>
    )
}