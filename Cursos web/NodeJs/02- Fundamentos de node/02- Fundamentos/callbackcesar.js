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


let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado =>
        empleado.id === id)
    if (!empleadoDB) {
        callback(`No existe un empleado con el ID ${ id }`);
    } else {
        callback(null, empleadoDB);
    }
    //console.log(empleadoDB);
}

let getSalario = (nombre, callback) => {
    let empleadoDB = empleados.find((empleado) =>
        empleado.nombre === nombre)
    if (!empleadoDB) {
        callback('No se encuentra un salario para el usuario ' + empleado);
    } else {
        salarioDB = salarios.find(salario =>
            salario.id === empleadoDB.id);
        let salario = {
            nombre: empleadoDB.nombre,
            salario: salarioDB.salario
        }
        callback(null, salario);
    }
}


getEmpleado(1, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    console.log(empleado);
});
getSalario('Melissa', (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    console.log(empleado);
});