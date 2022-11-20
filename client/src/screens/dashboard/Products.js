import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import Wrapper from "./Wrapper";
import ScreenHeader from "../../components/ScreenHeader";
import { clearMessage } from "../../store/reducers/globalReducer";
import { useGetProductsQuery } from "../../store/services/productService";
import Spinner from "../../components/Spinner";
import Pagination from "../../components/Pagination";

const Products = () => {
    let { page } = useParams();
    if(!page) {
        page = 1;
    }
    const { data = [], isFetching } = useGetProductsQuery(page);
    const { success } = useSelector(state => state.globalReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        if(success) {
            toast.success(success);
        }
        return () => {
            dispatch(clearMessage());
        }
    })
    return(
        <Wrapper>
            <ScreenHeader>
                <Link to="/dashboard/create-product" className="btn-dark"><i className="bi bi-plus"> </i>add product</Link>
            </ScreenHeader>
            <Toaster position="top-right" />
            {!isFetching ? data?.products?.length > 0 ? <div>
                <table className="w-full bg-gray-900 rounded-md">
                    <thead>
                        <tr className="border-b border-gray-800 text-left">
                            <th className="p-3 uppercase text-sm font-medium text-gray-500">name</th>
                            <th className="p-3 uppercase text-sm font-medium text-gray-500">price</th>
                            <th className="p-3 uppercase text-sm font-medium text-gray-500">stock</th>
                            <th className="p-3 uppercase text-sm font-medium text-gray-500">image</th>
                            <th className="p-3 uppercase text-sm font-medium text-gray-500">edit</th>
                            <th className="p-3 uppercase text-sm font-medium text-gray-500">delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.products?.map(product => (
                            <tr key={product._id} className="odd:bg-gray-800">
                                <td className="p-3 capitalize text-sm font-normal text-gray-400">{product.title}</td>
                                <td className="p-3 capitalize text-sm font-normal text-gray-400">₹{product.price}.00</td>
                                <td className="p-3 capitalize text-sm font-normal text-gray-400">{product.stock}</td>
                                <td className="p-3 capitalize text-sm font-normal text-gray-400"><img src={`/images/${product.image1}`} alt="image" className="w-20 h-20 rounded-md object-cover" /></td>
                                <td className="p-3 capitalize text-sm font-normal text-gray-400"><Link to={``} className="btn btn-warning"><i className="bi bi-pencil-square"></i></Link></td>
                                <td className="p-3 capitalize text-sm font-normal text-gray-400"><button className="btn btn-danger"><i className="bi bi-trash-fill"></i></button></td>
                            </tr>
                        ))} 
                    </tbody>
                </table>
                <Pagination page={parseInt(page)} perPage={data.perPage} count={data.count} path="dashboard/products" />
            </div> : 'No Products!!' : <Spinner />}
        </Wrapper>
    )
}

export default Products;