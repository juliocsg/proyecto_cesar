let empleados = [{
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Melissa'
    },
    {
        id: 3,
        nombre: 'Juan'
    }
];

let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 3000
    },
];

let getEmpleado = async(id) => {

    let empleadoDB = empleados.find(empleado =>
        empleado.id === id)
    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el ID ${ id }`);
    } else {
        return empleadoDB;
    }
    //console.log(empleadoDB);
}
let getSalario = async(empleado) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
        throw new Error(`No se encontró un salario para el usuario ${empleado.nombre}`);
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        };
    }

}

//función flecha f, let= la
let getInformation = async(id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);
    return `${ resp.nombre } tiene un salario de ${ resp.salario }$`;
}

getInformation(10).then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));