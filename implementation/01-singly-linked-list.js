// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list
        let newNode = new SinglyLinkedNode(val);
        this.length++;
        if(!this.head) {
            this.head = newNode;
            return this;
        }
        newNode.next = this.head;
        this.head = newNode;
        return this;
        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);
        this.length++;
        if (!this.head) {
            this.head = newNode;
            return this;
        }
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;

        return this;
    }

    removeFromHead() {
        if(!this.head) return undefined;
        let removed = this.head;
        this.head = this.head.next;
        this.length--;
        return removed;
    }

    removeFromTail() {
        if(!this.head) return undefined;
        let cur = this.head;
        this.length--;
        if(!cur.next) {
            this.head = null;
            return cur;
        }
        while(cur.next.next) {
            cur = cur.next;
        }
        let removed = cur.next;
        cur.next = null;
        return removed;
    }

    peekAtHead() {
        if(!this.head) return undefined;
        return this.head.value;
    }

    print() {
        if(this.head) {
            let cur = this.head;
            while(cur) {
                console.log(cur.value);
                cur = cur.next;
            }
        }
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
