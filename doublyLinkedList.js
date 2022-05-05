//insert at head or tail
//delete at head or tail
//find value
//delete duplicates

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
//Prepend - Add Bfore the head
DoublyLinkedList.prototype.insertAtHead = function(data){
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
//Append - node prev is new node - tail is new node
//node.prev is tail - tail is new node ///next is tail
DoublyLinkedList.prototype.insertAtTail = function (data) {
  if (this.tail == null) {
        this.tail = new ListNode(data);
        this.head = this.tail;
  } else {
        let temp = this.tail;
        let newTail = new ListNode(data);
        temp.next = newTail;
        this.tail = newTail;
        newTail.prev = temp;
  }
};

DoublyLinkedList.prototype.deleteAtHead = function () {
    if(this.head !== null){
        if(this.head == this.tail){
                this.head = null;
                this.tail = nuill;
        }else{
                this.head = this.head.next;
                this.head.prev = null;
        }
        this.size--;
    }
    
}

DoublyLinkedList.prototype.deleteAtTail = function () {
    if(this.tail !== null){
        if(this.tail == this.head){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.size--;
    }
};

DoublyLinkedList.prototype.findValue = function (val) {
    while(this.head){
        if(this.head.data === val) {
            //found
            console.log(`found ${x}`)
            return this.head;
        }
        if(this.head.next === null){
            return false;
        }else {
            this.head = this.head.next;
        }
    }
    return false;

}

DoublyLinkedList.prototype.deleteDuplicates = function () {
        let cache = {};
        while(this.head){
            // console.log(Object.keys(cache), 'cache')

            if(cache[this.head.data] == this.head.data ){
             
                let tempPrev = this.head.prev;
                let next = this.head.next;
                this.head = null;
                this.head = next;
                this.head.prev = tempPrev
                this.size--;
            }else{
                cache[this.head.data] = this.head.data;
                this.head = this.head.next;  
            
            }
               if (this.head.next == null) return;         
        }
}


let ddl = new DoublyLinkedList();
ddl.insertAtHead('w');
ddl.insertAtHead('p');
ddl.insertAtTail("x");
ddl.insertAtTail("y");
ddl.insertAtTail("z");
ddl.insertAtTail("z");
ddl.insertAtTail("z");
ddl.insertAtTail("z");
ddl.deleteAtTail();
ddl.deleteAtHead();
ddl.deleteDuplicates();
ddl.findValue("x");
console.log("HEAD", ddl.head);
console.log("TAIL",ddl.tail);
