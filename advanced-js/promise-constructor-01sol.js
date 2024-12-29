async function foo() {
    const promise = new Promise((resolve, reject)=> {
        const success = Math.random() > 0.5
        if (success) { 
            resolve('Operation succeeded')
        } else {
            reject('Operation failed')
        }
    })

    // promise.then(response => console.log(response))

    try {
        const response = await promise
        console.log(response)
    } catch(err) {
        console.log(err)
    }
}

foo()
