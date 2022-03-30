import React from "react";
import ReactDOM from 'react-dom';
import { Modal } from './Modal.js';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

afterEach(cleanup);

// basic render
test("render Modal without crashing", () => {

    // sample data
    const data = {
        name: 'Hiking Simulator: Jungle Adventure',
        img: '/pictures/background.jpg',
        description: `Your on a mission to find the lost treasure of Atlantis with Nathan
        Drake. You get separated from each during a confrontation with Sully and Marlow. Find your way
        back!`,
        price: `free 99`
    };

    render(<Modal data={data}/>);
})