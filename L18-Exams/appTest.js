let array = [5, 2, 3]

let sammenlign = (tal1, tal2) => {
    return parseInt(tal1) < parseInt(tal2) ? tal1 : tal2
}

console.log(array.reduce((tal1, tal2) => sammenlign(tal1, tal2)));

// Med automatisk type konvertering

let sammenlign2 = (tal1, tal2) => {
    return tal1 < tal2 ? tal1 : tal2
}

console.log(array.reduce((tal1, tal2) => sammenlign2(tal1, tal2)));

// Opgave med findMin

let findMin = (a, b) => {
    if ((Number.isInteger(a) && Number.isInteger(b) && a < b) || (!Number.isInteger(a) && !Number.isInteger(b) && a < b)) {
        return true
    } else if ((Number.isInteger(a) && !Number.isInteger(b)) || (!Number.isInteger(a) && Number.isInteger(b))) {
        throw new Error("Ikke alle typer er ens")
    } else {
        return false
    }
}

console.log(array.reduce((tal1, tal2) => {
    if (findMin(tal1, tal2)) {
        return tal1
    } else {
        return tal2
    }
}))