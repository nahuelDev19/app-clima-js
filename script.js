let api_key = '5442e2c450c0c7f242c3a25d961fb43d';
let defKelvin= 273.15;
let urlBase='https://api.openweathermap.org/data/2.5/weather';


document.getElementById('botonBusqueda').addEventListener('click',()=>{
    const ciudad= document.getElementById('ciudadEntrada').value
    if (ciudad){
        feachDatosCiudad(ciudad)
    }
})

function feachDatosCiudad(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(response => response.json()) 
    .then(response => mostrarDatosClima(response));
    
}

function mostrarDatosClima(data){
    const divDatosClima= document.getElementById('datosClima');
    divDatosClima.innerHTML= '';

    const ciudadNombre=data.name;
    const temperatura=data.main.temp;
    const descriptinon=data.weather[0].description;


    
    const ciudadTitulo= document.createElement('h2');
    ciudadTitulo.textContent = ciudadNombre;


    const tempInfo = document.createElement('p');
    tempInfo.textContent = `La temperatura de la ciudad es: ${(temperatura - defKelvin).toFixed(2)} °C`;



    // const tempInfo= document.createElement('p');    
    // tempInfo.textContent= `la temperatura de la ciudad es: ${temperatura-defKelvin}`
    const descriptinInfo= document.createElement('p');
    descriptinInfo.textContent= `la descripcion meteorologica es: ${descriptinon}` ;


    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(tempInfo)
    divDatosClima.appendChild(descriptinInfo)


}