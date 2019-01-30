/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
    let head = null;
    let tail = null;
    function getHead(){
        return head;
    }
    function getTail(){
        return tail;
    }
    function add(val){
        let obj = {
            "value" : val,
            "next" : null
        };
    
        if(tail === null){
            head = obj;
            tail = obj;
        }
        else{
            tail.next = obj;
            tail = obj; 
        }
        return obj;
        
    }
    function get(num){
        let node = head;
        for(i = 0; i < num; i++){
            if(node.next === null){
                return false;
            }
            node = node.next;
        }
        return node;
    }
    
    function remove(n){
        // if the link to remove is the first one (or head)
        if (n === 0){
            // assigning the second link as the head, so the first link no longer exists
            head = head.next;
            // else if I get the link at 'n' and its the tail
        } else if (get(n) === tail){
            // get the link before the tail and break the link by setting 'next' property to null
            get(n - 1).next = null;
            // set the link before the tail as the new tail
            tail = get(n - 1);
            // else if there is no link at the index provided in 'n'
        } else if (get(n) === false){
            //return false
            return false;
            // lastly, if the link is in the middle of the list
        } else {
            // grab the link BEFORE the link to remove, and assign its 'next' property to the link AFTER the link to remove
            get(n - 1).next = get(n + 1);
        }
    }

    
    function insert(val, num){

    }

    return {
        getHead,
        getTail,
        add,
        get,
        remove,
        insert
    }
};