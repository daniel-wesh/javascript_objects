//Accessing object properties by using bracket notation
//commonly used when the property of the object has a space in its name
// We can also use bracket notation on object properties without spaces
const myObject2 = {
    "color name": "Red",
    "color code": "#2e2e345",
    "color meaning": "Danger",
    "myColor":"Green"
}
console.log(myObject2["color name"])//Red
console.log(myObject2["color code"])//#2e2e345
console.log(myObject2["myColor"])//Green