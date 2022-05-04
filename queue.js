function Queue(){
    this.queue = [];
    this.size = 0;
}

Queue.prototype.add = function(el){
    this.queue.push(el);
    this.size++;
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
Queue.prototype.remove = function(){
    let buffer = this.getBuffer();
        buffer.shift();
    this.queue = [...buffer];
    this.size--;
}
let Q = new Queue();
Q.add('Jack');
Q.add("Jill");
Q.add("Billy");
Q.add("Bob");
Q.remove();
console.log(Q.queue);
console.log(Q.getNth(2));