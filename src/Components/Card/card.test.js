import React from "react";
import { Card } from './Card.js';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

// basic render
test("render Card without crashing", () => {
    render(<Card />)
});