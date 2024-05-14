// Task 1

function printText(str, time) {
    setTimeout(() => {
        console.log(str);
    }, time)
}
printText(" Your message was printed", 2000);

//Task 2d

function getTodos(id) {
    let endpoint = `https://jsonplaceholder.typicode.com/todos/${id}`

    return new Promise((resolve, reject) => {
        fetch(endpoint)
            .then(data => data.json())
            .then(ourTodoObject => {
                resolve(ourTodoObject)
            })
            .catch((error) => {
                console.log('Error: ' + error);
                reject(error)
            })
    })

}

function getUser(id) {
    let endpoint = `https://jsonplaceholder.typicode.com/users/${id}`
    return new Promise((resolve, reject) => {
        fetch(endpoint)
            .then(data => data.json())
            .then(userObject => {
                resolve(userObject)
            })
            .catch((error) => {
                console.log('Code failed ' + error);
                reject(error)
            })
    })

}

function getDataUsingAll(userId, toDoId) {
    const result = Promise.all([
        getTodos(toDoId),
        getUser(userId)
    ]);

    return result;
}

function getDataUsingRace(userId, toDoId) {
    const result = Promise.race([
        getTodos(toDoId),
        getUser(userId)
    ]);

    return result;
}
// Task 3 

async function getTodosAsync(id) {
    let endpoint = `https://jsonplaceholder.typicode.com/todos/${id}`;
    try {

        const response = await fetch(endpoint);
        const ourTodoObject = await response.json();
        return ourTodoObject;
    } catch (error) {
        console.log('Error: ' + error);
        throw error;
    }

}

async function getUserAsync(id) {
    let endpoint = `https://jsonplaceholder.typicode.com/users/${id}`;

    try {
        const response = await fetch(endpoint);
        const userObject = await response.json();
        return userObject;
    } catch (error) {
        console.log('Code failed ' + error);
        throw error;
    }
}
async function getDataUsingAll(userId, toDoId) {
    const result = await Promise.all([
        await getTodosAsync(toDoId),
        await getUserAsync(userId)
    ]);

    return result;
}


async function getDataUsingRace(userId, toDoId) {
    const result = await Promise.race([
        await getTodosAsync(toDoId),
        await getUserAsync(userId)
    ]);

    return result;
}

