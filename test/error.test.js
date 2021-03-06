const { VemoError } = require('./../dist/error')

describe('error.js', () => {

    test('Throw VemoError', () => {
        function throwVemoError() {
            throw new VemoError()
        }

        expect(throwVemoError).toThrow(Error)
        expect(throwVemoError).toThrow(VemoError)
    })

    test('VemoError should have code and message', () => {
        const properties = ['code', 'message']
        const vemoError = new VemoError()
        expect(
            properties.every(prop => vemoError.hasOwnProperty(prop))
        ).toBe(true)
    })

})
