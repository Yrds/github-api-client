export default {
    API_URL: process.env.NODE_ENV == 'development' ? 'localhost:3000' : 'https://github-api-backend.herokuapp.com'
}
