const axios = require('axios');

async function getAtomicData() {
    try{
        const response = await axios.get('https://petstore.swagger.io/v2/user');
        return response.data;
    } catch (error) {
        throw error;
    }
}

module.exports = { getAtomicData }