import { Api } from "./api";


const DeleteProduct = (products: any) => {

    const handleDelete = (id: any) => {

        //Problem : id is undefined
        Api().delete(`/products/${id}`)

            //İf response true
            .then(() => {

            })

            //İf response false
            .catch(err => console.log("Uppss Someting Wrongg!! " + err))
    }


    return (
        <button onClick={() => handleDelete(products.id)} >
            Delete
        </button>

    )
}

export default DeleteProduct;