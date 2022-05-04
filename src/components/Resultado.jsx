import useClima from "../hooks/UseClima"


const Resultado = () => {

    const { resultado } = useClima()


    const { name, main } = resultado



    // Grados Kelvin
    const kelvin = 273.15
    return (
        <div className="contenedor clima"><h2> El clima es {name} es:   </h2>


            <p>{parseInt(main.temp - kelvin)} <span>&#x2103;</span></p>
            <div className="temp-min-max">
                <p>Mín : {parseInt(main.temp_min - kelvin)} <span>&#x2103;</span></p>
                <p>Máx : {parseInt(main.temp_max - kelvin)} <span>&#x2103;</span></p>
            </div>
        </div >
    )
}

export default Resultado