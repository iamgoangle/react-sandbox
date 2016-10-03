const config = {
    DATABASE: {
        HOST: "mongodb://localhost/golfdb"
    },
    SERVER: {
		HOST: 'localhost',
        PORT: 7777
    },
    APIKEY: "e1898b9c3134792d1affb2c6960d4f41ecfc98e9", // sha-a1("Teerapong")
    API: {
        products: '/api/products',
        todos: '/api/todos'
    }
}

export { config }
