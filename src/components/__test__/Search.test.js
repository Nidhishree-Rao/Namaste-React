import Body from "../Body";
import { fireEvent, render , screen} from "@testing-library/react";
import MOCK_DATA from "../mock/bodyMock.json";
import { act } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
//Global is a global object wherever the body component is rendered, creating mock fetch function.

global.fetch = jest.fn(() =>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
            //Here the data that return.
        }
    })
});

test("Should render the body component with search", async() => {

//Act is basically a promise
    await act(async () => 
        render(<BrowserRouter><Body />
        </BrowserRouter>
        )
    );


const searchBtn = screen.getByRole("button", { name: "Search" });

const searchInput = screen.getByTestId("searchInput");

fireEvent.change(searchInput, { target: { value: "Pizza" } });

fireEvent.click(searchBtn);

const cardsAfterSearch = screen.getAllByTestId("resCard");

expect(cardsAfterSearch.length).toBe(3);
});




