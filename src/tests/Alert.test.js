/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import Alert from '../components/Alert';

describe('Alert', () => {
    it('renders the alert message', async () => {
        const message = 'This is an alert message';
        render(<Alert message={message} />);
        const alertElement = screen.getByRole("button");
        expect(alertElement).toBeInTheDocument;
        expect(alertElement.message == message);
    });
});
