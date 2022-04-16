import { useEffect, useState } from "react";
import Navbar from "./Navbar";

//Main api
import { Api } from "./api";

const DetailPage = (props: any) => {

    const [productDetail, setPeoductDetail] = useState<any>({});
    /* console.log(productDetail) */

    const { id } = props.match.params;
    /* console.log(id); */

    useEffect(() => {
        Api().get(`/products/${id}`)
        .then(response => {
            setPeoductDetail(response.data);
            /* console.log(response.data); */
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div className="flex justify-center">
            <div className="">

                <Navbar />

                {/* Detail */}
                <div className="">
                    <div className="flex justify-center">
                        <div className='w-full lg:w-[850px] p-5'>
                            <div className='block md:flex pb-5 '>
                                <div className='flex justify-center'>
                                    <img className='w-[200px]' src={productDetail.avatar} alt="" />
                                </div>
                                <div className='pl-0 pt-4 md:pl-6 text-left'>
                                    <h1 className='text-[3rem] font-medium'>{productDetail.name}</h1>
                                    <p className=' font-medium text-[1.3rem]'>$ {productDetail.price}</p>
                                </div>
                            </div>
                            <div className='text-left word-break'>
                                <hr className='border-t-2 border-black' />
                                <h1 className='text-[1.5rem] font-medium'>Description</h1>
                                <p>
                                    {productDetail.description}
                                </p>
                            </div>

                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
}

export default DetailPage;