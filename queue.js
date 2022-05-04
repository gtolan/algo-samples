//Enqueue, Dequeue, getNth, Is Empty, Peek
function Queue(){
    this.queue = [];
    this.size = 0;
}
Queue.prototype.isEmpty = function(){
    if(this.size === 0 && this.queue.length == 0) return true;
}
Queue.prototype.enqueue = function(el){
    this.queue.push(el);
    this.size++;
}
Queue.prototype.peek = function(){
    return this.queue[0]
}
Queue.prototype.getBuffer = function(nth){
    return [...this.queue];
}

Queue.prototype.getNth = function (nth) {
  let buffer = this.getBuffer();
  let index = 0;
  while(index < nth){
        index++
        buffer.shift();
  }
  return buffer[0];
};
Queue.prototype.dequeue = function(){
    let buffer = this.getBuffer();
        buffer.shift();
    this.queue = [...buffer];
    this.size--;
}
let Q = new Queue();
console.log(Q.peek())
Q.enqueue('Jack');
Q.enqueue("Jill");
Q.enqueue("Billy");
Q.enqueue("Bob");
Q.dequeue();
console.log(Q.queue);
console.log(Q.getNth(2));