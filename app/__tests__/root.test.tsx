// Testing library
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// App
import Index from '~/routes/index';

describe('Home page', () => {
    it('renders a heading', () => {
        // Arrange
        render(<Index />, { wrapper: MemoryRouter });
        // Act
        const heading = screen.getByRole('heading', {
            name: /Remix/i,
        });
        // Assert
        expect(heading).toBeInTheDocument();
    });
});
