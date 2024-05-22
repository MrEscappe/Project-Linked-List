class Node {
	constructor(value = null, next = null) {
		this.value = value;
		this.nextNode = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	append(value) {
		if (this.head === null) {
			this.head = new Node(value);
		} else {
			let currentNode = this.head;
			while (currentNode.nextNode !== null) {
				currentNode = currentNode.nextNode;
			}
			currentNode.nextNode = new Node(value);
		}
	}

	prepend(value) {
		if (this.head === null) {
			this.head = new Node(value);
		} else {
			const prevValue = this.head;
			this.head = new Node(value, prevValue);
		}
	}

	size() {
		if (this.head === null) {
			console.log("The list is empty!");
			return 0;
		}

		let i = 0;
		let currentNode = this.head;
		while (currentNode !== null) {
			currentNode = currentNode.nextNode;
			i++;
		}

		return i;
	}

	nodeHead() {
		let headNode = this.head;
		return headNode.value;
	}

	nodeTail() {
		let currentNode = this.head;
		while (currentNode.nextNode !== null) {
			currentNode = currentNode.nextNode;
		}
		return currentNode.value;
	}

	at(index) {
		if (index > this.size()) {
			return console.log("No match");
		}

		let search = this.head;
		let i = 0;
		while (i < index) {
			search = search.nextNode;
			i++;
		}

		if (search === null) {
			return console.log("No Match");
		} else {
			return console.log(search);
		}
	}

	pop() {
		if (this.head === null) {
			console.log("List is Empty");
			return null;
		} else {
			let currentNode = this.head;
			while (currentNode.nextNode.nextNode !== null) {
				currentNode = currentNode.nextNode;
			}
			const lastNode = currentNode.nextNode;
			currentNode.nextNode = null;
			return lastNode;
		}
	}

	contains(value) {
		let currentNode = this.head;
		while (currentNode !== null) {
			if (currentNode.value === value) {
				return true;
			}
			currentNode = currentNode.nextNode;
		}
		return false;
	}

	find(value) {
		let currentNode = this.head;
		let i = 0;
		while (currentNode !== null) {
			if (currentNode.value === value) {
				return i;
			}
			currentNode = currentNode.nextNode;
			i++;
		}
		return null;
	}

	insertAt(index, value) {
		if (index > this.size()) {
			return console.log("No match");
		}

		let search = this.head;
		let i = 0;
		while (i < index - 1) {
			search = search.nextNode;
			i++;
		}

		if (search === null) {
			return console.log("No Match");
		} else {
			const newNode = new Node(value, search.nextNode);
			search.nextNode = newNode;
		}
	}

	removeAt(index) {
		if (index > this.size()) {
			return console.log("No match");
		}

		let search = this.head;
		let i = 0;
		while (i < index - 1) {
			search = search.nextNode;
			i++;
		}

		if (search === null) {
			return console.log("No Match");
		} else {
			search.nextNode = search.nextNode.nextNode;
		}
	}

	toString() {
		let current = this.head;
		let str = "";
		while (current) {
			str += current.value + " -> ";
			current = current.nextNode;
		}
		return str + "null";
	}
}

let li = new LinkedList();
li.append(1);
li.append(2);
li.append(3);
li.append(4);
li.append(5);
li.prepend(6);
console.log(li.size());
console.log(li.nodeHead());
console.log(li.nodeTail());
li.at(5);
console.log(li.pop());
console.log(li.contains(3));
console.log(li.find(4));
console.log(li.toString());
li.insertAt(2, 10);
console.log(li.toString());
li.removeAt(2);
console.log(li.toString());
