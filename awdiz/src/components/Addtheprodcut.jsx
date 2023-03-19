import { Form } from "react-router-dom";

function Addtheproduct() {

    reuturn(
        <form onSubmit={() =>submit()}>
            <label>Enter your product URL</label>
            <input type="text" placeholder="Enter your product URL" />
            <br />
            <label>Enter your product Name</label>
            <input type="text" placeholder="Enter your product name" />
            <br />
            <label>Enter your product Price</label>
            <input type="text" placeholder="Enter your product price" />
            <br />
            <input type="submit" />
        </form>
    )

}