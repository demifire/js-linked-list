
    var head = null;
    var tail = null;
  
    function getHead() {
      return head;
    }
  
    function getTail() {
      return tail;
    }
  
    function add(value) {
      let newNode = {
        value : value,
        next : null
      };
  
      if (!head) {      
        head = newNode;
        tail = newNode;
  
      } else {

        tail.next = newNode;
        tail = newNode;
      }
      return tail;
    }
  
    function get(index) {
      if (index < 0 || !head) {
        return false;
  
      } else if (index === 0) {
        return head;
      
      } else { 
        let currentNode = head;
        let thisObjPosition = 0;
  
        while (thisObjPosition<index) {
            if(currentNode.next){
                thisObjPosition++;
                currentNode = currentNode.next;
            }else{
                return false
            }
        }
            console.log(currentNode);
            return currentNode;
      }
    }
  
    function remove(index) {
      let previousNode = get(index - 1); 
      let currentNode = get(index);
  
      if (!currentNode) {
        return false;
      
      } else if (!previousNode) {
        head = currentNode.next;
      
      } else if (!currentNode.next) {
        tail = previousNode;
        tail.next = null;
      
      } else {
        previousNode.next = currentNode.next;
      }
    }
  
    function insert(val, index) {
      var previousNode = get(index-1);
      var targetNode = get(index);
      var newNode = {
        value : val,
        next : null
      };
  
      if (!targetNode) {
        return false;
  
      } else if (!previousNode) {
        newNode.next = head;
        head = newNode;
      
      } else {
        newNode.next = targetNode;
        previousNode.next = newNode;
      }
    }

    function hasCycle(head) {
        let slow = head;
        let fast = head;
      
        if(!head || !head.next) {return false}
      
        else if (head.next === head) {return true}
      
        else {
          while(fast.next.next) {
      
            slow = slow.next;
            fast = fast.next.next;
      
            if(slow === fast) {return true}
            }
        return false;
      }
}
  
console.log('yo')

var myObj3 = {
    value: 'Sauce',
    next: myObj
}

var myObj2 = {
    value: 'MeatBall',
    next: myObj3
}

var myObj = {
    value: 'Cheese',
    next: myObj2
}

var returnFalse = {
    value: 'sds',
    next: returnFalse2
}

var returnFalse2 = {
    value: 'asdasdasd',
    next: returnFalse3
}

var returnFalse3 = {
    value: 'sdasda',
    next: returnFalse4
}

var returnFalse4 = {
    value: 'asd222',
    next: null
}



console.log(hasCycle(myObj));