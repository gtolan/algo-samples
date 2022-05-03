function Stack (start = []){
    this.stack = [...start];
}

Stack.prototype.add = function(el) {
    this.stack.push(el)
}

Stack.prototype.remove = function() {
  this.stack.pop();
};
Stack.prototype.peek = function() {
    return this.stack[this.stack.length -1]
};
let s = new Stack();
s.add(14)
s.add(11);
s.remove();
console.log(s)
console.log(s.peek());