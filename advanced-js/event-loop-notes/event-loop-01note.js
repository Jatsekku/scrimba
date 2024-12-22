
function test(heavyComputations) {
    const start = performance.now()

    setTimeout(() => {
        const end = performance.now()
        console.log(`Execution time: ${end - start} milliseconds`)
    }, 1000)

    if (heavyComputations) {
        for (let i = 0; i < 10000000000; i++) {
            let answer = i * 2000000 / 67.8 * (45.7 / 3.2)
        }
    }
}

// test(true) -> Execution time: 7078.887135 milliseconds
// test(true)

// test(false) -> Execution time: 1001.677172 milliseconds
//test(false)