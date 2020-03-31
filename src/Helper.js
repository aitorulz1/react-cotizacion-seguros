export function diferenciaYear(year){

    return new Date().getFullYear() - year;

}



export function segunOrigen(marca){

    let incremento;

    switch(marca){

        case "americano":
            incremento = 1.15;
            break;
        
        case 'asiatico':
            incremento = 1.05;
            break;
        
        case 'europeo':
            incremento = 1.30;
            break;
        
         default:
            break;
    }

    return incremento;
}



export function segunPlan(plan) {

    return (plan === "basico") ? 1.20 : 1.50; 

}


export function primerMayuscula (texto) {

    return texto.charAt(0).toUpperCase() + texto.slice(1);

}