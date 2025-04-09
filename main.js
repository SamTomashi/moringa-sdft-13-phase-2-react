/**
 * 1. When you change state or props, React creates a new virtual DOM tree
 * 2. It compares the new DOM tree with the previous rendered component(DOM tree)
 * 3. Only change the parts that need to be updated in the Real DOM
 * 
 */

/***
 * 
 * State management
 */
function updateStateValue(){
    return "The new value"
}

const useState = ["Moringa", updateStateValue]

const [value, setValue] = useState

console.log(setValue())

