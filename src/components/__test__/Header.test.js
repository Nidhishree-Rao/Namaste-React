import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import "@testing-library/jest-dom";



test("Should render Header component with Login Button", () => {

    render(
        <BrowserRouter>
           <Provider store={appStore}><Header />
           </Provider>
           </BrowserRouter>);

        const loginButton = screen.getByRole("button", { name:"Login"});
        expect(loginButton).toBeInTheDocument();


    } );


    test("Should render Header component with Cart", () => {

        render(
            <BrowserRouter>
               <Provider store={appStore}><Header />
               </Provider>
               </BrowserRouter>);
    
            const cartItems = screen.getByText(/Cart/);
            expect(cartItems).toBeInTheDocument();
    
    
        } );


test("Should change login button to logout", () => {
        
                render(
                    <BrowserRouter>
                       <Provider store={appStore}><Header />
                       </Provider>
                       </BrowserRouter>);
            
                    const loginButton = screen.getByRole("button", {name: "Login"});
                    fireEvent.click(loginButton);
                    const logOutButton = screen.getByRole("button",{name:"Logout"});
                    expect(logOutButton).toBeInTheDocument();
            
            
                } );        