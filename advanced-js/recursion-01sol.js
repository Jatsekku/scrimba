function countUp(start, end) {
    let count = start
    console.log(count)

    if (count === end) {
        return
    }

    countUp(start+1, end)
}

countUp(2, 6)
