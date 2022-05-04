//Add, Remove, Peek, getNth, Peek
function Stack (start = []){
    this.stack = [...start];
}
Stack.prototype.add = function(el) {
    this.stack.push(el)
}
Stack.prototype.getBuffer = function(){
    return [...this.stack];
}
Stack.prototype.isEmpty = function () {
  return this.stack.length === 0;
};
Stack.prototype.getNthItem = function(nth) {
    const buffer = this.getBuffer();
    let topIndex = buffer.length - 1;
    while (nth !== topIndex) {
      topIndex--;
      buffer.pop();
    }
    this.peek(buffer)
    return buffer[buffer.length-1];
}
Stack.prototype.remove = function() {
  this.stack.pop();
};
Stack.prototype.peek = function() {
    return this.stack[this.stack.length -1]
};

let s = new Stack();
s.add(14)
s.add(1);
s.add(15);

s.add(18);
s.add(12);
s.add(21);
s.add(17);
s.remove();
console.log(s.getNthItem(3));
console.log(s)
console.log(s.peek());