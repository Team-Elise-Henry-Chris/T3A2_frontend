import rating from '../src/Components/StarRating'
import StarRating from '../src/Components/StarRating'
import post from '../src/Components/StarRating'

describe('Testing components', () => {
    // it('Should return 0 on initial state', () => {
    //     const { rating } = StarRating({post});
    //     expect(rating.current.state).toBe('useState(null)');
    // })

    it('rating is active', () => {
        expect(rating).toBeTruthy()
    })


})