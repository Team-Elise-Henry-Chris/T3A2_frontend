import { describe, expect, it } from 'vitest'
import Home from '../src/Components/Pages/Home'
import { render, screen } from '../test-utils'
import { BrowserRouter } from 'react-router-dom'

describe('Home Page', () => {
    it('Renders the home page with topics', () => {
        const topics = [
            { _id: '1', topic_name: 'Test 1' },
            { _id: '2', topic_name: 'Test 2' },
            { _id: '3', topic_name: 'Test 3' },
        ]

        render(
            <BrowserRouter>
                <Home topics={topics} />
            </BrowserRouter>
        )

        expect(screen.getByText('Test 1')).toBeInTheDocument()
        expect(screen.getByText('Test 2')).toBeInTheDocument()
        expect(screen.getByText('Test 3')).toBeInTheDocument()
    })
})