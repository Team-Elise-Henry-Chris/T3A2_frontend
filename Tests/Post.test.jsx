import { describe, expect, it } from 'vitest'
import postDateCreated from '../src/Components/Post'
import postLink from '../src/Components/Post'
import post from '../src/Components/Post'


describe('Testing components', () => {
    it('There should only be one date object', () => {
        expect(postDateCreated.length).toBe(1)
    })

    it('postLink is active', () => {
        expect(postLink).toBeTruthy()
    })

    // it('should render a button with the class of primary', () => {
    //     render(<PrimaryButton />)
    //     const primaryButton = screen.getByRole('button', { name: /primary/i })
    //     expect(primaryButton).toHaveClass('primary')
    // })
})