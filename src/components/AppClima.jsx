import useClima from "../hooks/UseClima"
import Formulario from "./Formulario"
import Loading from "./Loading"
import Resultado from "./Resultado"

const AppClima = () => {

    const { resultado, cargando, noResultado } = useClima()
    return (
        <><main className="dos-columnas"><Formulario />

            {cargando ? <Loading /> : resultado?.name ? <Resultado /> : noResultado ? <p>{noResultado}</p> : <p>El clima se va a mostra aqui</p>}


        </main></>
    )
}

export default AppClima