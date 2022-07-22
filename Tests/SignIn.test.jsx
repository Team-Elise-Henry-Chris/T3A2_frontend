import { describe, expect, it } from 'vitest'
import SignIn from '../src/Components/Pages/SignIn'
import { render, screen } from '../test-utils'
import { BrowserRouter } from 'react-router-dom'

describe('Sign In Page', () => {
    it('Renders the sign in page with inputs', () => {
        render(
            <BrowserRouter>
                <SignIn />
            </BrowserRouter>
        )

        expect(screen.getByText('Email')).toBeInTheDocument()
        expect(screen.getByText('Password')).toBeInTheDocument()
        expect(screen.getByText('Sign In!')).toBeInTheDocument()
    })
})