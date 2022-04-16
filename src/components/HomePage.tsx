import Navbar from "./Navbar";
import { Product } from "./Product";
import { useState, useEffect } from "react";
import { Categorie } from "./Categorie";
import DeleteProduct from "./DeleteProduct";
import icon from './img/icon.svg';

//Main api
import { Api } from "./api";


const HomePage = () => {

    const [products, setProducts] = useState<any>([]);
    const [categories, setCategories] = useState<any>([]);

 
    useEffect(() => {
        Api().get("/products")
        .then(response => {
            setProducts(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])


    useEffect(() => {
        Api().get("/categories")
        .then(response => {
            setCategories(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])



    return (
        <div>
            <Navbar />
            <div className="flex justify-center">
                <div className="w-[1000px]  flex flex-wrap justify-between ">
                    <div className="flex w-[230px] md:w-[300px] overflow-x-auto  mx-4 mb-12 rounded-[.5rem] shadow-md bg-white font-medium p-3  ">


                        {
                            categories.map((categorie: any, key: any) => (
                                <div key={key}>
                                    {/* Create Categorie List Place */}
                                    <Categorie
                                        categorie={categorie}
                                    />
                                </div>
                            ))
                        }


                    </div>

                    <div className="flex w-[230px] md:w-auto overflow-x-auto  mx-4 mb-12 rounded-[.5rem] shadow-md bg-white font-medium p-3  ">
                        <select name="cars" id="cars">
                            <option value="electronics">Electronics</option>
                            <option value="furnitures">Furnitures</option>
                            <option value="mens-clothings">Mens clothings</option>
                            <option value="womens-clothings">Womens clothings</option>
                            <option value="accessories">Accessories</option>
                        </select>
                    </div>

                </div>
            </div>
            <div className="flex  justify-center">
                <div className="relative w-[1200px] flex flex-wrap justify-center">

                    {

                        products.map((product: any, key: any) => (
                            <div className="w-[270px] " key={key}>
                                <Product
                                    product={product}
                                />

                                {/* Delete Button */}

                                <DeleteProduct products="products" />
                            </div>
                        ))
                    }

                    <a className="absolute bottom-0 bg-white border-[1px] border-[grey] right-4 text-white p-5 shadow-md   rounded-[5rem] hover:rotate-45 opacity-85 hover:opacity-100 hover:scale-105 hover:ease-in duration-200  " href="#/createproduct">
                        <img className="w-[1.2rem] rotate-45" src={icon} alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default HomePage;