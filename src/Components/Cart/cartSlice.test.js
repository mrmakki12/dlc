// redux
import cartSlice, { addToCart, removeFromCart } from "./cartSlice";
import { cleanup } from '@testing-library/react';

afterEach(cleanup);

// sample data
const sampleData = () => {
    return {
        name: 'Hiking Simulator: Jungle Adventure',
        img: '/pictures/background.jpg',
        description: `Your on a mission to find the lost treasure of Atlantis with Nathan
        Drake. You get separated from each during a confrontation with Sully and Marlow. Find your way
        back!`,
        price: `99`
    }
}

test("should return initial state of Cartslice", () => {
    expect(cartSlice(undefined, {})).toEqual({
        items: []
    });
});

test("should be able to add item to empty items state", () => {
    const emptyState = {
        items: []
    };
    const data = sampleData()
    expect(cartSlice(emptyState, addToCart(data))).toEqual({
        items: [{...data, quantity: 1}]
    });
});

test("should be add same item to non-empty state causing quantity to increase by 1", () => {
    const previousState = {
        items: [{...sampleData(), quantity: 1}]
    };
    expect(cartSlice(previousState, addToCart(previousState.items[0]))).toEqual({
        items: [{...sampleData(), quantity: 2}]
    });
});

test("should be able to remove item from Cart", () => {
    const previousState = {
        items: [{...sampleData(), quantity: 1}]
    };
    expect(cartSlice(previousState, removeFromCart(previousState.items[0]))).toEqual({
        items: []
    });
});