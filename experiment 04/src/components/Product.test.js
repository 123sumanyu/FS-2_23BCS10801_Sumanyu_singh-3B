import {render,screen} from "@testing-library/react";
import Product from "./Product";
import * as api from "../api/productApi";

jest.mock("../api/productApi");

test("renders Product",async()=>{
    api.fetchProduct.mockResolvedValue(
        {id:1,
        name:"Laptop",
        price:1000});

        render(<Product id={1}/>);
        const productName=await screen.findByText("Laptop");
        expect(productName).toBeInTheDocument();
})