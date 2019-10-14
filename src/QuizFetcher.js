const axios = require('axios');
const API_URL = 'https://opentdb.com/api.php?amount=2&type=multiple';

class QuizFetcher {
    
    static async fetch () {
        const quizzes = await axios.get(API_URL);
        return quizzes.data;
    }
}

module.exports = QuizFetcher;