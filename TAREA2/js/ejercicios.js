class Ejercicio1{
    venta() {
      //alert("Calculando venta..")
      let costventa = document.getElementById("costo").value    
      costventa = parseFloat(costventa)
      let despor = document.getElementById("descuento").value    
      despor = parseFloat(despor)
      let ivacheq = document.getElementById("iva").checked    
      let resp = document.getElementById("resp")    
      let subt=0,total=0,valoriva=0,iva=0.12,valdes=0
      valdes = costventa*despor/100
      subt=costventa-valdes
      if (ivacheq==true){
        valoriva=subt*iva
      }
      total=subt+valoriva
      resp.textContent=`Costo:${costventa.toString()}\nDescuento:${valdes.toString()}\nSubtotal:${subt.toString()}\nIva:${valoriva.toString()}\ntotal:${total.toString()}`  
      console.log(costo)
    }
    }

// intanciar la clase
// crear una variable(objeto) que tenga todo lo que tiene la clase
let ejer = new Ejercicio1()

class oprsuma{
    suma(){
      //alert("Calculadora..")
      let num1 = document.getElementById("numero 1").value  
      num1 = parseFloat(num1)
      let num2 = document.getElementById("numero 2").value    
      num2 = parseFloat(num2)
      let resp = document.getElementById("resp")
      let resultado=0
      resultado=num1+num2
      resp.textContent= `La suma es:${resultado.toString()}`
      console.log(resp)
    }
    }
let sum = new oprsuma()

class oprresta{
  resta(){
    //alert("Calculadora..")
    let num1 = document.getElementById("numero 1").value  
    num1 = parseFloat(num1)
    let num2 = document.getElementById("numero 2").value    
    num2 = parseFloat(num2)
    let resp = document.getElementById("resp")
    let resultado=0
    resultado=num1-num2
    resp.textContent= `La resta es:${resultado.toString()}`
    console.log(resp)
  }
  }
let res = new oprresta()

class oprmult{
  multiplicacion(){
    //alert("Calculadora..")
    let num1 = document.getElementById("numero 1").value  
    num1 = parseFloat(num1)
    let num2 = document.getElementById("numero 2").value    
    num2 = parseFloat(num2)
    let resp = document.getElementById("resp")
    let resultado=0
    resultado=num1*num2
    resp.textContent= `La multiplicación es:${resultado.toString()}`
    console.log(resp)
  }
  }
let mult = new oprmult()

class oprdiv{
  division(){
    //alert("Calculadora..")
    let num1 = document.getElementById("numero 1").value  
    num1 = parseFloat(num1)
    let num2 = document.getElementById("numero 2").value    
    num2 = parseFloat(num2)
    let resp = document.getElementById("resp")
    let resultado=0
    resultado=num1/num2
    resp.textContent= `La división es:${resultado.toString()}`
    console.log(resp)
  }
  }
let div = new oprdiv()

class oprmod{
  mod(){
    //alert("Calculadora..")
    let num1 = document.getElementById("numero 1").value  
    num1 = parseFloat(num1)
    let num2 = document.getElementById("numero 2").value    
    num2 = parseFloat(num2)
    let resp = document.getElementById("resp")
    let resultado=0
    resultado=num1%num2
    resp.textContent= `El residuo o resto es:${resultado.toString()}`
    console.log(resp)
  }
  }
let md = new oprmod()


class Ejercicio3{
  nmayor(){
    //alert("Calculadora..")
    let num1 = document.getElementById("numero 1").value  
    num1 = parseFloat(num1)
    let num2 = document.getElementById("numero 2").value    
    num2 = parseFloat(num2)
    let resp = document.getElementById("resp")
    let resultado=0
      if (num1>num2){
        resultado=num1
        resp.textContent= `El numero mayor es:${resultado.toString()}`
      } else{
        resultado=num2
        resp.textContent= `El numero mayor es:${resultado.toString()}`
      }
    console.log(resp)
  }
  }
let myor = new Ejercicio3()

class Ejercicio4{
  dsemana(){
    //alert("dIA DE LA SEMANA..")
    let num1 = document.getElementById("numero 1").value  
    num1 = parseInt(num1)
    // let resp = document.getElementById("resp")
    switch (num1){
      case 1:
        resp.textContent= `El dia ingresado corresponde a LUNES`
        break
      case 2:
        resp.textContent= `El dia ingresado corresponde a MARTES`
        break
      case 3:
        resp.textContent= `El dia ingresado corresponde a MIERCOLES`
        break
      case 4:
        resp.textContent= `El dia ingresado corresponde a JUEVES`
        break
      case 5:
        resp.textContent= `El dia ingresado corresponde a VIERNES`
          break
      case 6:
        resp.textContent= `El dia ingresado corresponde a SABADO`
            break
      case 7:
        resp.textContent= `El dia ingresado corresponde a DOMINGO`
              break
        default:
          alert("Opcion invalida")
    }
  }
  }
let sem = new Ejercicio4()

class Ejercicio5{
  bisiesto(){
    //alert("Calculadora..")
    let num1 = document.getElementById("numero 1").value  
    num1 = parseInt(num1)
    if((num1 % 4==0) && ((num1 % 100!=0) || (num1 % 400==0))){
      resp.textContent= `El año ingresado es bisiesto`
    } else  {
      resp.textContent= `El año no es bisiesto`
    }
    console.log(resp)
  }
  }
let bis = new Ejercicio5()

class Ejercicio6{
  serie(){
     let num1 = document.getElementById("numero 1").value  
     num1 = parseFloat(num1)
     let num2 = document.getElementById("numero 2").value    
     num2 = parseFloat(num2)
     let i=0
     let resultado=""
     if(num1<num2){
      for (i=num1;i<=num2;i++){
        resultado=resultado+", "+i
        resp.textContent= `EL resultado es:${resultado.toString()} \n`
        
      }
     }else{
      resp.textContent= `el primer numero no debe ser mayor al primero`
      
     }
     console.log(resp)
     
    // console.log(document.write(i))
    } 
  }
let ns = new Ejercicio6()

class Ejercicio7{
  par(){
    let num1 = document.getElementById("num1").value  
    num1 = parseFloat(num1)
    let num2 = document.getElementById("num2").value    
    num2 = parseFloat(num2)
    let i=0
    let resultado=""
    let sum=0;
    if(num1%2==0 && num2%2==0){
      if(num1<num2){
        for (i=num1;i<=num2;i=i+2){
          
          sum=sum+i;
        }
        resultado=resultado+" ="+sum
        resp.textContent=`EL resultado es:${resultado.toString()} `

       }else{
        resp.textContent= `el primer numero no debe ser mayor al primero`
        
       }
    }else{
      resp.textContent= `los dos numeros deben ser pares`
    }
    
    console.log(resp)
    
   // console.log(document.write(i))
   } 
 }
 let pares = new Ejercicio7()


 class Ejercicio8{
  contar(){
    let num1 = document.getElementById("num1").value  
    num1 = parseFloat(num1)
    let num2 = document.getElementById("num2").value    
    num2 = parseFloat(num2)
    let i=0
    let resultado=""
    let sum=0;
    let cont=0;
      if(num1<num2){
        for (i=num1;i<=num2;i++){
          sum=sum+i
          cont++
        }
        resultado=sum
        resultado=resultado+" y tiene "+cont+" numeros"
        resp.textContent=`EL resultado de la suma es:${resultado.toString()} `

       }else{
        resp.textContent= `el primer numero no debe ser mayor al primero`
        
       }
    
    
    console.log(resp)
    
   // console.log(document.write(i))
   } 
 }
 let cuenta = new Ejercicio8()

 class Ejercicio9{
  divisores(){
    let num1 = document.getElementById("num1").value  
    num1 = parseInt(num1)
    let i=0
    let resultado=""
    let resto=0;
    for (i=1;i<=num1-1;i++){
      resto=num1%i
      if(resto==0){
        resultado=resultado+" , "+i
      }
    }

    resp.textContent=`Los divisores son:${resultado.toString()} `

     
    
    
    console.log(resp)
    
   // console.log(document.write(i))
   } 
 }
 let divis = new Ejercicio9()

 class Ejercicio10{
  perfecto(){
    let num1 = document.getElementById("num1").value  
    num1 = parseInt(num1)
    let i=0
    let aux=0;
    for (i=1;i<=num1-1;i++){
      if(num1%i==0){
        aux=aux+i
      }
    }

    
    if(aux==num1){
      resp.textContent= `el numero es perfecto`
    }
    else{
      resp.textContent= `el numero no es perfecto`
    }

    

     
    
    
    console.log(resp)
    
   } 
 }
 let per = new Ejercicio10()