function reverseString(str) {
    var splitString = str.split(""); 
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}
​
const isPalindrome = (str) => {
    let splitStr = str.split();
    let newStr = splitStr.join();
    if(newStr === reverseString(str)) {
        return true;
    } else{
        return false;
    }
}
​
console.log(isPalindrome('civic'));