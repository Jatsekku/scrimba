async function foo() {
    try {
        const response = await fetch('https://apis.scrimba.com/jsonplaceholder/posts',
            {
                method: 'POST',
                body: JSON.stringify({
                    tile: 'Holiday Nightmares',
                    body: 'When I was kidnapped in Scotland…',
                    userId: 1,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
        if (!response.ok) {
            throw new Error('There was a problem with the API')
        }
        const data = await response.json()
        console.log(data)
    } catch(err) {
        console.log(err)
    }  
}

foo()
