function SinglyLinkedList(){
    this.head = null;
    this.size = 0;
}

function SingleListNode(val){
    this.data = val;
    this.next = null;
}

SinglyLinkedList.prototype.getFirst = function(){
    return this.head;
}
SinglyLinkedList.prototype.listSize = function () {
    return this.size;
};
SinglyLinkedList.prototype.insertNode = function (data) {
  if (this.head == null) {
    this.head = new SingleListNode(data);
  } else {
    let temp = this.head;
    this.head = new SingleListNode(data);
    this.head.next = temp;
  }
  this.size++;
};

SinglyLinkedList.prototype.deleteByValue = function (val) {
    let currentHead = this.head;
    while (currentHead.next) {
        let prev = currentHead;
        currentHead = currentHead.next;
        if(currentHead.data === val){
                    let afterMatchedNext = currentHead.next;
                    prev.next = afterMatchedNext;
                    this.size--;
        }
    }
   
};
SinglyLinkedList.prototype.removeHead = function () {
    let next = this.head.next;
    this.head = next;
}

const LL = new SinglyLinkedList();
LL.insertNode(2);
LL.insertNode('z');
LL.insertNode('w');
LL.insertNode(4);
LL.insertNode('19');
LL.deleteByValue(4);
LL.removeHead()
console.log(LL.getFirst());
