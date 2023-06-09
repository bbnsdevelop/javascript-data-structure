class Node {
    constructor(value){
        this.value = value;
        this.next = null;;
    }
}


class LinkedList {
    constructor(value) {
      this.head = new Node(value);
      this.tail = this.head;
      this.length = 1;
    }
    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
        
    }

    prepend(value) {
        const newNode = new Node(value);        
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array;
    }
    
    insert(index, value){
        if (index === 0) {
            this.prepend(value);
        }

        if(index >= this.length){
            this.append(value);
        }
        else{
            const newNode = new Node(value);    
            const leader = this.traverseToIndex(index-1);
            const holdingPointer = leader.next;
            leader.next = newNode;
            newNode.next = holdingPointer;
            this.length++;

        }

        return this.printList();
    }


    remove(index){
        const leader = this.traverseToIndex(index -1);
        const nodeToDelete = leader.next;
        leader.next = nodeToDelete.next;
        this.length--;
        return this.printList();
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
          currentNode = currentNode.next;
          counter++;
        }
        return currentNode;
      }
    

  }
  
let myLinkedList = new LinkedList(10);
console.log('First time', myLinkedList);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);

console.log("after inserted", myLinkedList.insert(20, 88));
console.log("after deleted", myLinkedList.remove(2));

