function outerFunction(param) {
    const outerVariable = 'I am from the outer function'
    
    function innerFunction() {
        console.log(param)
        console.log(outerVariable)
    }
    
    return innerFunction
}

const closure = outerFunction('I am an argument')

closure()
closure()
