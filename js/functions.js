//Saludo de bienvenida.
function saludo(){
    alert("Bievenido a los ejercicios de JavaScript de Sebastian Rodríguez.")

}
//Operación Suma
function suma(){
    var A;
    var B;
    var Suma;
    alert("Bienvenido, en está opción podra sumar dos números, los cuáles debe ingresar");
    A = parseInt(prompt("Ingrese el primer valor."));
    B = parseInt(prompt("Ingrese el segundo valor."));
    Suma = A + B;
    alert("El resultado de sumar " + A + " + " + B + " es: " + Suma);
}
//Operaciones basicas suma, resta, multiplicación y división.
function Operaciones(){
    var A;
    var B;
    var S;
    var R;
    var M;
    var D;
    
    alert("Bienvenido, este algoritmo le solicitara 2 valores y sus resultados se compartiran en suma, resta, multiplicación y división");
    
    A = parseInt(prompt("Ingrese el primer valor."));
    B = parseInt(prompt("Ingrese el segundo valor."));
    
    S = A + B;
    R = A - B;
    M = A * B;
    D = A / B;
    
    alert("El valor de la suma es: " + S + "\nEl valor de la resta es: " + R + "\nEl valor de la multiplicación es: " + M + "\nEl valor de la división es: " + D);

}
//El mayor de dos números ingresados.
function MayorN(){
    var A;
    var B;

    alert("Bienvenido, aquí podra conocer el mayor de los números ingresados.")
    A = parseInt(prompt("Ingrese el primer número."));
    B = parseInt(prompt("Ingrese el segundo número"));
        if(A > B){ 
        alert("El número mayor es: " + A);
        }
        else{
        alert("El número mayor es: " + B);
        }
}
//El menor de tres números ingresados.
function MenorN(){
    var A;
    var B;
    var C;

    alert("Aquí podra conocer el menor de los números ingresados.");
    A = parseInt(prompt("Ingrese el primer valor."));
    B = parseInt(prompt("Ingrese el segundo valor."));
    C = parseInt(prompt("Ingrese el tercer valor."));
    if (A==B && A==C){
    alert("Los números ingresados son iguales.");
    }
        else if (A<B && A<C){
            alert("El menor de los números ingresados es: " + A);
        } 
        else if(B<A && B<C){
            alert("El menor de los números ingresados es: " + B);
        }
        else{
            alert("El menor de los números ingresados es: " + C);
        }
}
//Números par e impar con limites.
function ParIm(){
    var A;
    var B;
    var C;

    alert("Aquí podra conocer los números pares e impares del 1 al limite que establezca.");
    A = parseInt(prompt("Ingrese el limite que desee."));
    for (var i = 1; i <= A; i++){
        if(i % 2 == 0){
            alert("El número:" + i + "Es par");
        } 
        else{
            alert("El número:" + i + "Es impar");
        }

    }

}
//El cuadrado de un número ingresado.
function cuadradoN(){
    var A;
    var B;

    alert("Aquí podra conocer el cuadrado de un número ingresado.");

    A = parseInt(prompt("Por favor ingrese el número."));
    B = A * A;
    alert("El cuadrado de " + A + " es: " + B);

}
//Area de un triangulo.
function areaTri(){
    var A;
    var B;
    var H;

    alert("Bienvenido, a continución ingrese los valores solicitados para calcular el area del triangulo.");
    B = parseInt(prompt("Por favor, ingrese la base del triangulo."));
    H = parseInt(prompt("Por favor, ingrese la altura del triangulo."));
    A = (B*H)/2
    alert("Su base es: " + B + "\nSu altura es: " + H + "\nSu área es: " + A);

}
//Metro a Centimentro
function MtaCm(){
    var A;
    var Cm;
    alert("Bienvenido, aquí podra conocer en Centimetros el valor ingresados en metros. \nPor favor ingrese la medida sin decimal.");
    A = parseInt(prompt("Ingrese la medida en metros."));
    Cm = A * 100;
    alert("La cantidad de metros(Mt) " + A + " en Centimentros(Cm) es: " + Cm);
}
//Descuento manzanas
function desManzanas(){
    var K;
    var T;
    var TD;
    var TN;
    var Valor = 4500;
    alert("Bienvendio, aquí podra conocer el descuento correpondiente a su compra de manzanas. \nRecuerde que cada kilo de manzanas cuesta: $4.500");
    K = parseInt(prompt("Ingrese la cantidad de kilos de manzana que compro."));
    if(K>=3 && K<=5){
        TN = K*Valor;
        TD = TN*10/100;
        T = TN - TD;
        alert("El descuento es del 10% equivalente a: " + TD + "\nEl total a pagar es de:" + T);
    } else if (K>=6 && K<=10){
        TN = K*Valor;
        TD = TN*15/100;
        T = TN - TD;
        alert("El descuento es del 15% equivalente a: " + TD + "\nEl total a pagar es de:" + T);
    } else if(K > 10){
        TN = K*Valor;
        TD = TN*20/100;
        T = TN - TD;
        alert("El descuento es del 20% equivalente a: " + TD + "\nEl total a pagar es de:" + T);
    } else{
        T = K*Valor;
        alert("El descuesto es del 0% \nEl valor a pagar es de: " + T);
    }
}
function interesBanco(){
    var C;
    var A;
    var P;
    var T;
    var GT;
    alert("Esta opción le permite conocer el valor generado por un banco para su cuenta.");
    C = parseInt(prompt("Ingrese la capital invertida en el banco."));
    A = parseInt(prompt("Ingrese la cantidad de años."));
    P = 0.023*12;
    GT = (P*A)*C;
    T = GT+C;
    alert("Las ganancias generadas en " + A + " años sera de: " + GT + "\nEl total en su cuenta sera de: " + T);
}
//Promedio de notas
function PromedioNotas(){
    var prom;
    alert("Bienvenido, aqui podra conocer su promedio de sus siete notas. \nDe igual forma conocera si aprobo o no su asignatura.");
    var C1 = parseInt(prompt("¿Cuál es su primera nota?"));
    var C2 = parseInt(prompt("¿Cuál es su segunda nota?"));
    var C3 = parseInt(prompt("¿Cuál es su tercera nota?"));
    var C4 = parseInt(prompt("¿Cuál es su cuarta nota?"));
    var C5 = parseInt(prompt("¿Cuál es su quinta nota?"));
    var C6 = parseInt(prompt("¿Cuál es su sexta nota?"));
    var C7 = parseInt(prompt("¿Cuál es su septima nota?"));
    prom = (C1+C2+C3+C4+C5+C6+C7)/7
    if(prom>=6.3){
        alert("Felicidades, aprobo su asignatura con el promedio de: " + prom);
    } else {
        alert("No aprobo su asignatura y su promedio es: " + prom);
    }
}
function pulgadasMedidas(){
    var CM = 2.54;
    var MT = 0.0254;
    var KM = 0.0000254;
    alert("Bienvendio, aqui podra conocer la medida de pulgadas a: \n*Centimetros. \n*Metros. \n*Kilometros.");
    var P = parseInt(prompt("Inserte la medida en pulgadas."));
    CM = P*CM;
    MT = P*MT;
    KM = P*KM;
    alert("El valor de las pulgadas es: " + P + "\nEn centimetros son: " + CM + "\nEn metros son: " + MT + "\nEn kilometros son: " + KM);
}