/*
Base URL: https://apis.scrimba.com/jsonplaceholder
Endpoint: /posts
Challenge:
1. Make a fetch request to get all of the available posts.
⚠️ Remember to handle all errors!
*/

async function foo() {
    try {
        const response = await fetch('https://apis.scrimba.com/jsonplaceholder/posts')
        
        if (!response.ok) {
            throw new Error("Invalid status returned from API")
        }
        
        const data = await response.json()
        console.log(data)
    } catch(err) {
        console.log(err)
    } finally {
        console.log('Operation completed')
    }
}

foo()
