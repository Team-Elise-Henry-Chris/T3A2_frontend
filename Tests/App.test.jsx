import { describe, expect, it } from 'vitest'
import App from '../src/Components/App';
import { render, screen, userEvent } from '../test-utils';


// Example test
describe('Simple working test', () => {
    it('the title is visible', () => {
        render(<App />);
        const welcomeText = screen.getByText('Home Page');
        screen.debug(welcomeText);
        expect(screen.getByText('Home Page')).toBeInTheDocument();
    });

    // example
    // it('should increment count on click', async () => {
    //     render(<App />);
    //     userEvent.click(screen.getByRole('button'));
    //     expect(await screen.findByText(/count is: 1/i)).toBeInT;
    // });
});