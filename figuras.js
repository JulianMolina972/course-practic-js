//Código del cuadrado
console.group("Cuadrados")
// const ladoCuadrado = 5;
// console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`  );

function perimetroCuadrado(lado){
    return lado * 4;
} 

perimetroCuadrado();

// console.log(`El perímetro del cuadrado es: ${perimetroCuadrado} cm` );

function areaCuadrado(lado){
    return lado * lado;
} 
areaCuadrado();

// console.log(`El Área del cuadrado es: ${areaCuadrado} cm^2` );

console.groupEnd();

//Código del triángulo
console.group("Triángulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(`Los lados del Triángulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm`  );


//Altura de un triángulo isósceles
function alturaTriangulo(lado1, base){
    return Math.sqrt((Math.pow(lado1,2))-((Math.pow(base, 2)) / 4));
};

console.log(alturaTriangulo(5,3));


function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 
perimetroTriangulo();

// console.log(`El perímetro del triángulo es: ${perimetroTriangulo}cm` );

function areaTriangulo(base, altura){
    return (base * altura) / 2;
} 
// console.log(`El Área del Triángulo es: ${areaTriangulo}cm^2` );





console.groupEnd();

//Código del circulo

console.group("Circulos");

//Radio
// const radioCirculo = 4;
// console.log(`El radio del círculo es: ${radioCirculo}cm` );



//Diámetro

function diametroCirculo(radio){
    return radio * 2;
} 
// console.log(`El diámetro del círculo es: ${diametroCirculo}cm` );

//pi
const pi = Math.PI
// console.log(`El valor de pi es: ${pi}` );
//Circuferencia

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * pi;
} 
// console.log(`El perímetro del círculo es: ${perimetroCirculo}cm` );
//Área 

function areaCirculo(radio){
    return (radio * radio) * pi;

} 
// console.log(`El Área del círculo es: ${areaCirculo}cm^2` );


console.groupEnd();


//Interactuamos con el HTML

//Circulo
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}


function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Triangulo
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = parseInt(input1.value) ;
    const input2 = document.getElementById("InputTriangulo2");
    const value2 =  parseInt(input2.value);
    const inputBase = document.getElementById("InputTrianguloBase");
    const valueBase =  parseInt(inputBase.value);
    
    if(value1 === value2){
        const perimetro = perimetroTriangulo(value1, value2, valueBase);
        alert(perimetro);
    } else {
        alert("No es un triángulo isosceles");
    }
    
}


function calcularAreaTriangulo(){
    const inputBase = document.getElementById("InputTrianguloBase");
    const valueBase =  parseInt(inputBase.value);
    const inputA = document.getElementById("InputTriangulo1");
    const valueA = parseInt(inputA.value) ;
    const valueAltura = alturaTriangulo(valueA,valueBase);
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = parseInt(input1.value) ;
    const input2 = document.getElementById("InputTriangulo2");
    const value2 =  parseInt(input2.value);

    if(value1 === value2){
        const area = areaTriangulo(valueAltura, valueBase);
        alert(area);;
    } else {
        alert("No es un triángulo isosceles");
    }
    
    
}

//Circulo
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}


function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}