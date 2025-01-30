
import { render, screen } from "@testing-library/react";
import RestuarantCard from "../RestuarantCard" ;
import MOCK_DATA from "../mock/resCardMock.json";
import "@testing-library/jest-dom";


test("Should render Restuarant card with props data", () =>{
    render(<RestuarantCard resData = {MOCK_DATA}/>);
    const name = screen.getByText("Pizza Hut");

    expect(name).toBeInTheDocument();

})


test