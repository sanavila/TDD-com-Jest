const { soma } = require('./codigo');

describe('funções matemáticas', () => {
    it('soma de dois valores', () => {
        expect(soma(2,5)).toBe(7)
        expect(soma(3,5)).toBe(8)
        expect(soma(2,50)).toBe(52)
    } )
})
