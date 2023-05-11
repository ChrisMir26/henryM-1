'use strict';

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial 
(representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0.
 Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, 
como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado
 de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren
 los mismos resultados pero de manera iterativa.
*/



function nFactorial(x) {
                    
  if( x > -1 && x < 2) return 1
  if( x <= 0 ) return 0

  return x * nFactorial(x-1)

}

nFactorial(5)
nFactorial(15)


function nFibonacci(n) {

  if( n <= 0) return  0
  if( n === 1) return 1
  return nFibonacci(n - 1) + nFibonacci(n - 2)
}
const fib1 = nFibonacci(0);  // 0
const fib2 = nFibonacci(6);  // 8
const fib3 = nFibonacci(9);  // 34
const fib4 = nFibonacci(2)   // 1

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se 
quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retora undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue () {
  this.queue = []
}

Queue.prototype.enqueue = function(x){
  return this.queue.push(x)
}

Queue.prototype.dequeue = function(){
  if(this.queue === []) return undefined
      return  this.queue.shift()
}

Queue.prototype.size = function(){
      return this.queue.length
}

const myQueue =  new Queue()

myQueue.enqueue('first');
myQueue.enqueue('second');
myQueue.enqueue('third');

myQueue.size()
myQueue.dequeue()
myQueue.size()
myQueue.dequeue()
myQueue.size()
myQueue.dequeue()
myQueue.size()

console.log(myQueue)



var q2 = new Queue();
    q2.enqueue('fullstack');
    q2.enqueue('JavaScript');
    q2.dequeue('JavaScript');
    q2.dequeue(undefined);
    q2.dequeue('fullstack');
    q2.dequeue(undefined);




/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
