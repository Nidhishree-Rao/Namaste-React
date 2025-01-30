import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";


test("Should load contact us component", () =>{
render(<Contact />);
const heading = screen.getByRole("heading");
expect(heading).toBeInTheDocument();
});

test("Should load button in contact component", () =>{
    render(<Contact />);
    //Quering

    const button = screen.getByText("Submit");
    //assertion
    expect(button).toBeInTheDocument();
    });


    test("Should load 2 input in contact component", () =>{
        render(<Contact />);
        //Quering
    //When wee have multiple elements the write All
        const inputBoxes = screen.getAllByRole("textbox")
        //assertion
        expect(inputBoxes.length).toBe(2);
        });