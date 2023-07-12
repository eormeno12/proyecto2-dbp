const API = 'https://dbp-proyecto2-backend-87b7472b2add.herokuapp.com/'

const getProducts = async () => {
    return await fetch(`${API}/products`)
    .then((response) => {console.log(response); return response.json()})
}

const getProductsByCategory = async (category) => {
    return await fetch(`${API}/products/category/${category}`)
    .then((response) => response.json())
}

const addOrder = async (data) => {
    return await fetch(`${API}/orders`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.text())
}

const getOrderById = async (userId, id) => {
    return await fetch(`${API}/orders/${userId}/${id}`)
    .then((response) => response.json())
}

const getUserById = async (id) => {
    return await fetch(`${API}/users/${id}`)
    .then((response) => response.json())
}

const signIn = async (credentials) => {
    return await fetch(`${API}/sign-in`, {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
}


const signUp = async (data) => {
    return await fetch(`${API}/sign-up`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.text())
}

export {getProducts, getProductsByCategory, addOrder, getOrderById, getUserById, signIn, signUp};