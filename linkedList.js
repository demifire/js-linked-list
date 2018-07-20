/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */

function linkedListGenerator(){

    let obj;
    let tail;
    let lastObj;
    let index;

        return {
            getHead: function(){
                if(obj === undefined){
                    return null
                }else{
                    return obj;
                }
            },
            getTail: function(){
                if(obj === undefined){
                    return null
                }else if(obj.next === null){
                    return obj;
                }else{
                    tail = obj;
                    while (tail.next !== null) {
                      tail = tail.next;
                    }
                    return tail
                }
            },
            add: function(value){
                if(typeof obj === 'object' && lastObj === undefined){
                    obj.next = {value: value, next: null};
                    lastObj = obj.next;
                    return lastObj;
                }else if(lastObj !== undefined){
                    lastObj.next = {value: value, next: null};
                    lastObj = lastObj.next;
                    return lastObj;
                }else{
                    obj = {value: value, next: null};
                    index = 0;
                    return obj;
                }
            },
            remove: function(){
                return 'bs';
            },
            get: function(findIndex){
                // console.log('DIS init');
                // console.log(obj);
                // console.log('1 next', obj.next);
                console.log('this', this);
                if(findIndex === 0){
                    return obj
                }else if(findIndex === 1){
                    return obj.next
                }else if(findIndex === 2){
                    return obj.next.next
                }else{
                    return obj.next.next.next
                }
            },
            insert: function(){
                return 'bs';
            }
    }
}


