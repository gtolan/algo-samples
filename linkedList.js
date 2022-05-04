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
  //10
   
    let currentHead = this.head;
    // console.log(currentHead);
    // console.log(currentHead.next)
    //  console.log(currentHead.next.next);
    // if (currentHead.next === null) return currentHead;
    while (currentHead.next) {
        currentHead = currentHead.next;
        if(currentHead === val){
                    let matchedHead = currentHead.next;
                    let afterMatchedNext = matchedHead.next;
                    this.head.next = afterMatchedNext;
                    this.size--;
        }
        console.log("ch", currentHead);
    }


    // if (currentHead.next.data == val) {

   // }
   
};

const LL = new SinglyLinkedList();
LL.insertNode(2);
LL.insertNode('z');
LL.insertNode('w');
LL.insertNode(4);
LL.insertNode('19');
LL.deleteByValue('w');
console.log(LL.getFirst());
