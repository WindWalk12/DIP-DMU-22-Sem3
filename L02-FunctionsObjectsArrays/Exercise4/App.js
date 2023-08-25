let stringOfWords = "Lorem ipsum dolor sit amet consectetur adipisicing elit Maxime mollitia Lorem ipsum"

const splitWords = (string) => {
    return string.split(" ");
}

words = splitWords(stringOfWords);

mapOfWords = new Map();

for (const i of words) {
    if(!mapOfWords.has(i)) {
        mapOfWords.set(i, 1);
    } else {
        mapOfWords.set(i, mapOfWords.get(i) + 1);
    }
}

console.log(mapOfWords.entries());