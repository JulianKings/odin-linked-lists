class Node {
    constructor (value)
    {
        this.value = value;
        this.next = null;
    }

    updateNext (nextNode) 
    {
        this.next = nextNode;
    }
}