import { createSlice } from "@reduxjs/toolkit";

let counter = 4;

export const stateSlice = createSlice({
    name: "state",
    initialState: {
        menuItems: [{ id: 0, name: 'Item Name 1', price: '$5', description: 'Item Description goes here' }, { id: 1, name: 'Item Name2', price: '$10', description: 'Item Description goes here' }, { id: 2, name: 'Item Name 3', price: '$50', description: 'Item Description goes here' }],
    },
    reducers: {
        addNewItem(state) {
            const newItem = { id: counter, name: `Item Name ${counter}`, price: '$50', description: 'Item Description goes here' }
            counter++;
            state.menuItems.push(newItem);
        }
    }
});

export const { addNewItem } = stateSlice.actions;
export default stateSlice.reducer;
