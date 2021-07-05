// импорт функций
import {sum} from './index.js';
import {multiply} from './index.js';

// задаем название тестов функции sum словом describe
describe("test sum", () => {
    // в it пишем 1 тест
    it("adds 1 + 2 to equal 3", () => {
        const result = sum(1, 2)
        expect(result).toBe(3);
    }),
        it("adds 2 + 2 to equal 3", () => {
            const result = sum(2, 2)
            expect(result).toBe(4);
        }),
        it("adds 2 + 2 to equal 3", () => {
            const result = sum(2, 3)
            expect(result).toBe(5);
        });
});

// задаем название тестов функции multiply словом describe
describe("test multiply", () => {
    it("adds 1 * 2 to equal 2", () => {
        const result = multiply(1, 2)
        expect(result).toBe(2);
    }),
        it("adds 2 * 3 to equal 6", () => {
            const result = multiply(2, 3)
            expect(result).toBe(6);
        }),
        it("adds 4 + 5 to equal 20", () => {
            const result = multiply(4, 5)
            expect(result).toBe(20);
        });
});


