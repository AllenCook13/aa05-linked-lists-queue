// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        let newNode = new DoublyLinkedNode(val);
        this.length++;
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return
        }
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);
        this.length++;
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
    }

    removeFromHead() {
        if(!this.head) return undefined;
        let removed = this.head.value;
        this.length--;
        if(!this.head.next) {
            this.head = null;
            // this.tail = null;
        } else {
            this.head = this.head.next
            this.head.prev = null;
        }
        return removed;
    }

    removeFromTail() {
        if(!this.head) return undefined;
        let removed = this.tail.value;
        if(!this.head.next) {
            this.tail = null;
            this.head = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.length--;
        return removed;
    }

    peekAtHead() {
        if(!this.head) return undefined;
        return this.head.value;
    }

    peekAtTail() {
        if(!this.head) return undefined;
        return this.tail.value;
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
