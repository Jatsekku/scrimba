async function foo() {
    try {
        const response = await fetch('https://apis.scrimba.com/dog.ceo/api/breeds/images/random')
        if (!response.ok){
            throw new Error('There was a problem with the API')
        }
        const data = await response.json()
        console.log(data)
    } catch (err) {
        console.log(err)

    } finally {
        console.log('The operation completed.')
    }
}

foo()

/*
    try/catch block is handling result of fetch() call
    response.ok carries information if the response has status 200-299

    It's possible that fetch() will succeed but the response itself won't be valid 
*/
