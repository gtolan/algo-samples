function DoublyLinkedList(){
    this.head = null;
    this.tail = null;
    this.size = 0;
}
function ListNode(data){
    this.data = data;
    this.next = null;
    this.prev = null;
}

DoublyLinkedList.prototype.insertAddHead = function(data){
    if(this.head == null){
        this.head = new ListNode(data);
        this.tail = this.head;
    }else {
        let temp = this.head;
        let newHead = new ListNode(data);
        temp.prev = newHead;
        this.head = newHead;
        newHead.next = temp;  
    }

}

let ddl = new DoublyLinkedList();
ddl.insertAddHead('w');
ddl.insertAddHead('p');
console.log(ddl.head)
console.log(ddl.head.next);