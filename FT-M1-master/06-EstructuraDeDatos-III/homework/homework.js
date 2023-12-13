'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS)
   en cualquiera de sus variantes, según se indique por parámetro 
   ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
this.value = value;
this.left = null;
this.right = null;
// this.total = []
}
BinarySearchTree.prototype.size = function(){
 return this._size(this);
};
BinarySearchTree.prototype._size = function (node) {
   if (!node) return 0;
   return this._size(node.left) + this._size(node.right) + 1;
 };
 

BinarySearchTree.prototype.insert = function(value){
    if(value < this.value){
      if(!this.left){
         this.left =   new BinarySearchTree(value)
         return this.left;   
      } else{
         return this.left.insert(value);
      }
    } else{
      if(!this.right){
         this.right = new BinarySearchTree(value);
         return this.right;
      } else {
         this.right.insert(value);
      }
    }
};

BinarySearchTree.prototype.contains = function(value){
   if(value === this.value){
      return true;
   } else if(value < this.value && this.left){
      return this.left.contains(value);
   } else if(value > this.value && this.right){
      return this.right.contains(value);
   } 

   return false;
};
BinarySearchTree.prototype.depthFirstForEach = function(callback, order = "in-order") {
   if(order === "pre-order"){
      callback(this.value);
   }

   if(this.left){
      this.left.depthFirstForEach(callback, order);
   }
   
   if(order === "in-order"){
      callback(this.value);
   }

   if(this.right){
      this.right.depthFirstForEach(callback, order);
   }

   if (order === "post-order"){
      callback(this.value);
   }
};
BinarySearchTree.prototype.breadthFirstForEach = function (callback) {
   const cola = [this];
   while (cola.length > 0) {
      const actual = cola.shift();
      callback(actual.value);
      if(actual.left){
         cola.push(actual.left);
      }
   if(actual.right){
      cola.push(actual.right);
   }
   }
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
