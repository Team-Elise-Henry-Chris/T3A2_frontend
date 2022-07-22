import decoded from '../src/api/axios'

describe('Testing components', () => {
    it('accessToken does not contain email', () => {
        expect(decoded).not.toHaveProperty('email')
    })
})