function reverse(string){
    if (typeof string !== "string") {
        throw new Error("Only string should be passed to the function!")
    }
    let reversed = ''
    for (let i = 0; i < string.length; i++) {
        reversed = string[i] + reversed
    }
    return reversed
}
console.log(reverse('Armen'));



function capitalize(string) {
    if (typeof string !== "string") {
        throw new Error("Only string should be passed to the function!")
    }
    if (string.length === 0) {
        throw new Error("The string should have some content")
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(capitalize("hello"));



function truncate(string, length) {
    if (typeof string !== "string") {
        throw new Error("Only string should be passed to the function!")
    }
    if (typeof length !== "number" || length <= 0) {
        throw new Error("Invalid length")
    }
    if (string.length > length) {
        return string.slice(0, length) + "...";
    }
    return string;
}
console.log(truncate("Hello, world!", 5));


module.exports = {
    capitalize: capitalize,
    truncate: truncate,
    capitalize: capitalize
}