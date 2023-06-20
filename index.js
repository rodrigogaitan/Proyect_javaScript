// const nombre = 'Rodrigo'
// const edad = 22
// const desarrollador = false
// const nac = new Date('november 26 2000')
// const libro = {
//     titulo : 'Sexta Via',
//     autor : 'Patricio Sturlese',
//     fecha : 2010,
//     url : 'https//www.google.com'
// }

// const disponible = 100
// const extraer = 70

// if (extraer < disponible) {
//     console.log('Puedes extraer');
// } else {
//     console.log('No puedes extraer');
// }

// for (let i = 1; i < 10; i++){
    //     console.log(i);
    // }
    
    // const developer = {
    //     nombre: 'Rodrigo',
    //     edad: 22,
    //     mail: 'rodrigo@gmail.com'
    // }
    
    // for (const propiedades in developer) {
    //     console.log(developer[propiedades]);
    // }

// const numero = 3

// if (numero === 3) {
//     console.log('Advinaste');
// } else if (numero === 2) {
//     console.log('Casi');
// } else if ( numero === 1) {
//     console.log('Casi casi');
// }else {
//     console.log('Esta entre el 1 y el 3');
// }
// let i = 0
// let max = 8

// while (i < max) {
//     console.log(i);
//     i++;
// }

//let factorial = 1
// for(let i = 10; i > 0; i-- ) {
//     factorial *= i
// }

// console.log(factorial);

// let factoria = 1
// let num = 10
// while (num > 1) {
//     factoria *= num
//     num--
// }
// console.log(factoria)

// let factori = 1
// let nums = 10
// while (true) {
//     factori *= nums
//     nums--
//     if (nums === 1) break
// }
// console.log(factori) 



// let nombre = `Rodrigo`
// let apellido = `Gaitan`
// let estudiante = nombre + ` ` + apellido
// let estudianteMayus = estudiante.toUpperCase()
// let estudianteMinus = estudiante.toLowerCase()
// let estudianteLengt = estudiante.length
// let estudianteInicial = estudiante.substring(0,1)
// let estudianteFinal = apellido.substring(apellido.length -1, apellido.length )
// let estudianteSpace = estudiante.replace(/ /g, "")
// let estudianteVerif = estudiante.includes(nombre)

// const altura = 218
// const alturaF = 2.18
// const pesoF = 85.5
// const alturaFRUp = Math.ceil(alturaF)
// const alturaFRDw = Math.floor(alturaF)
// const sonIguales = Number.MAX_VALUE + 1 === Number.MAX_VALUE


// const compras = ['Pan', 'Leche', 'Agua', 'Fideos', 'Arroz']
// compras.push('Aceite')
// compras.pop()

// const peliculas = [
//     {titulo: 'Titanic', año: '2000', director: 'Steven'},
//     {titulo: 'Divergente', año: '2012', director: 'Jorg'},
//     {titulo: 'Sonic', año: '2017', director: 'Fredd'}
// ]

// const des2010 = peliculas.filter(peli => peli.año > 2010)
// const direc = peliculas.map(dir => dir.director)
// const tit = peliculas.map(titu => titu.titulo)
// const peli1 = direc.concat(tit)
// const peli2 = [...direc, ...tit]

// const setFamily = new Set ( ['Veronica', 'David', 'Ayrton', 'Morena'])
// setFamily.add('Veronica')
// setFamily.add('JavaScript')