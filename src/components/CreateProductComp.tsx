import { useState } from "react";
import { Link } from "./Link";
import { Api } from "./api";


const CreateProductComp = () => {

    //Add type to values
    interface IUser {
        name: string,
        price: number,
        category: string,
        description: string,
        avatar: string,
        developerEmail: string
    }

    //Pass values to state with values
    const [createProductİnputValue, setCreateProductİnputValue] = useState<IUser>({
        name: "",
        price: 0,
        category: "",
        description: "",
        avatar: "",
        developerEmail: ""
    });


    const onInputChange = (event: any) => {
        setCreateProductİnputValue({ ...createProductİnputValue, [event.target.name]: [event.target.value] })
    }


    const onFormSubmit = (event: any) => {
        event.preventDefault();
        Api().post("/products", createProductİnputValue)
            .then(response => {
                console.log(response);
            })
            .catch(err => { console.log("Ooopss, You did not create a new product! " + err) })
    }





    
    return (
        <div className="">
            <div className="font-medium text-[2rem]">Create Product</div>
            {/* Product Name */}
            <input value={createProductİnputValue.name} name="name" onChange={onInputChange} className="rounded-[.5rem] shadow-md m-4 p-3 w-[260px] sm:w-[500px]" type="text" placeholder="Product Name" />
            <br />

            {/* Description */}
            <input value={createProductİnputValue.description} name="description" onChange={onInputChange} className="rounded-[.5rem] shadow-md m-4 p-3 w-[260px] sm:w-[500px] h-[100px] resize-none" type="text" placeholder="Description" />
            <br />

            {/*   Image URL */}
            <input value={createProductİnputValue.avatar} name="avatar" onChange={onInputChange} className="rounded-[.5rem] shadow-md m-4 p-3 w-[260px] sm:w-[500px]" type="text" placeholder="avatar" />
            <br />



            {/* Select Categories that you gonna create product */}
            <select placeholder="Categories" className="rounded-[.5rem] shadow-md m-4 p-3 w-[260px] sm:w-[500px]" name="cars" id="cars">
                <option value="electronics">Electronics</option>
                <option value="furnitures">Furnitures</option>
                <option value="mens-clothings">Mens clothings</option>
                <option value="womens-clothings">Womens clothings</option>
                <option value="accessories">Accessories</option>
            </select>



            <br />

            {/* Price */}
            <input value={createProductİnputValue.price} name="price" onChange={onInputChange} className="rounded-[.5rem] shadow-md m-4 p-3 w-[260px] sm:w-[500px]" type="text" placeholder="Price" />
            <br />

            {/* Developer E-mail */}
            <input value={createProductİnputValue.developerEmail} name="developerEmail" onChange={onInputChange} className="rounded-[.5rem] shadow-md m-4 p-3 w-[260px] sm:w-[500px]" type="text" placeholder="Developer E-mail" />
            <br />





            {/* When you click this button we have to call post method to api */}
            <div >
                <button onClick={onFormSubmit} className="text-[#000033] font-medium bg-[#66c2ff] rounded-[.5rem] shadow-md m-4 p-3 w-[260px] sm:w-[500px] hover:bg-[#b3b3ff] hover:text-white">CREATE PRODUCT</button>
                <div className="flex justify-center">
                    <p className="break-words w-[260px] sm:w-[500px] ">
                        İf you want to create a new product and want to go back store use button below <br />
                        İf you don' t want to create a new product use button below <br />
                        İf you came here by mistake use button below to back store
                    </p>
                </div>

                <div className="flex justify-center">
                    <div className="rounded-[.5rem] m-4 px-0 p-3 font-medium w-[260px] sm:w-[500px] flex justify-center ">
                        <Link linkClass="text-[#000033] bg-[#ffbf80] hover:bg-[#ff99c2] hover:text-white rounded-[.5rem] shadow-md  p-3 w-full" linkAddress="#/" linkName="BACK STORE" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CreateProductComp;