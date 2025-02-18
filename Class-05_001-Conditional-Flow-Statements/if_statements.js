
if ( "Ajith" ) {
    console.log("success")  // execute as there is a value in string => true
} 
else {
    console.log("failed")
}

console.log("_____________________________________________")

if ( 100 ) {
    console.log("success") // ececute as there is a value => true
} 
else {
    console.log("failed")
}

console.log("_____________________________________________")

if ( "Rahul" * 10 ) {
    console.log("success") 
} 
else {
    console.log("failed") // in multiplication string * digit is not possible => NaN = false
}

console.log("_____________________________________________")

if ( "" ) {
    console.log("success")
} 
else {
    console.log("failed") // it is empty string => false
}

console.log("_____________________________________________")

if ( 0 ) {
    console.log("success")
} 
else {
    console.log("failed") // 0 => false
}

console.log("_____________________________________________")

if ( " " ) {
    console.log("success") // 'space' is also a character - contains value => true 
} 
else {
    console.log("failed")
}

console.log("_____________________________________________")

if ( undefined ) {
    console.log("success")
} 
else {
    console.log("failed") // undefined => false
}

console.log("_____________________________________________")

if ( NaN ) {
    console.log("success")
} 
else {
    console.log("failed") // NaN => false
}

console.log("_____________________________________________")

if ( null ) {
    console.log("success")
} 
else {
    console.log("failed") // null => false
}
