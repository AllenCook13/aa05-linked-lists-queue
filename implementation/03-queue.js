const { SinglyLinkedNode } = require("./01-singly-linked-list");
const { DoublyLinkedList, DoublyLinkedNode } = require("./02-doubly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        let newNode = new DoublyLinkedNode(val)
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++
        return this.length;
    }

    dequeue() {
        if(!this.head) return null;
        let removed = this.head.value;
        if(!this.head.next) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.length--;
        return removed;
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
