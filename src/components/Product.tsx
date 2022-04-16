import { Link} from "react-router-dom";

export const Product = ({ product }: any) => {

    return (
        <div className="m-2  rounded-[.5rem] shadow-md bg-white font-medium p-1">
            <Link to={`/products/${product.id}`}>
                <div className=" m-10">
                    <div className="flex justify-center">
                        <img className='w-[180px] ' src={product.avatar} alt="" />
                    </div>
                    <div className='flex justify-between pt-2'>
                            <p>{product.name}</p>
                            <p>$ {product.price}</p>
                    </div>

                </div>
            </Link>
        </div>

    )
}



