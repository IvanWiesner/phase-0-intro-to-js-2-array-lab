// Write your solution here!
const cats = [ "Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) {
    const copyOfCats = [...cats, name];
    return copyOfCats;
}
function prependCat(name) {
    const newCopyOfCats = [name, ...cats];
    return newCopyOfCats;
}
function removeLastCat() {
    const copyOfCatsRemove = cats.slice(0, cats.length - 1);
    return copyOfCatsRemove; 
}
function removeFirstCat () {
    const copyOfCatsAdded = cats.slice(1);
    return copyOfCatsAdded;
}