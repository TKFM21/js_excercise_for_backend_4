const assert = require('power-assert');
const QuizFetcher = require('../../src/QuizFetcher');

describe('`QuizFetcher.fetch` メソッドで取得するデータとデータ形式をテスト', () => {
    it('`results` プロパティを持つ', async () => {
        const data = await QuizFetcher.fetch();
        assert.equal(data.hasOwnProperty('results'), true);
    });
    
    it('`results` プロパティはは10件データをもつ配列である', async () => {
        const data = await QuizFetcher.fetch();
        assert.equal(data.results.length, 2);
    });
    
    describe('`results` プロパティの配列の全オブジェクトのテスト', () => {
        it('`category` プロパティ : 文字列型', async () => {
            const data = await QuizFetcher.fetch();
            const quiz = data.results[0];
            assert.equal(typeof quiz.category, 'string');
        });
        
        it('`type` プロパティ : 文字列型', async () => {
            const data = await QuizFetcher.fetch();
            const quiz = data.results[0];
            assert.equal(typeof quiz.type, 'string');
        });
        
        it('`difficulty` プロパティ : 文字列型', async () => {
            const data = await QuizFetcher.fetch();
            const quiz = data.results[0];
            assert.equal(typeof quiz.difficulty, 'string');
        });
        
        it('`question` プロパティ : 文字列型', async () => {
            const data = await QuizFetcher.fetch();
            const quiz = data.results[0];
            assert.equal(typeof quiz.question, 'string');
        });
        
        it('`correct_answer` プロパティ : 文字列型', async () => {
            const data = await QuizFetcher.fetch();
            const quiz = data.results[0];
            assert.equal(typeof quiz.correct_answer, 'string');
        });
        
        it('`incorrect_answers` プロパティ : 配列型', async () => {
            const data = await QuizFetcher.fetch();
            const quiz = data.results[0];
            assert.equal(Array.isArray(quiz.incorrect_answers), true);
            assert.equal(quiz.incorrect_answers.length, 3);
            assert.equal(typeof quiz.incorrect_answers[0], 'string');
        });
    });
});