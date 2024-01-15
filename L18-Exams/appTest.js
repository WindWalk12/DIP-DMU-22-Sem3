let array = [5, '2', 3]

let sammenlign = (tal1, tal2) => {
    return parseInt(tal1) < parseInt(tal2) ? tal1 : tal2
}

console.log(array.reduce((tal1, tal2) => sammenlign(tal1, tal2)));