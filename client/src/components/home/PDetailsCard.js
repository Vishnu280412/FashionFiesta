import currency from "currency-formatter";
import h2p from "html2plaintext";
import htmlFormat from "html-to-formatted-text";
import PDetailsImage from "./PDetailsImage";

const PDetailsCard = ({ product }) => {
    const discount = product.discount;
    const discountedPrice = product.price - (product.price * discount) / 100;
    let desc = h2p(product.description);
    desc = htmlFormat(desc);
  return (
    <div className="flex flex-wrap -mx-5">
        <div className="w-full sm:w-6/12 p-6">
            <div className="flex flex-wrap -mx-1">
                <PDetailsImage image={product.image1}/>
                <PDetailsImage image={product.image2}/>  
                <PDetailsImage image={product.image3}/>
            </div>
        </div>
        <div className="w-full sm:w-6/12 p-6">
            <h1 className="text-2xl font-bold text-gray-900 capitalize">{product.title}</h1>
            <div className="flex justify-between my-5">
                <span className="text-xl font-bold text-gray-900">{currency.format(discountedPrice, {code: "INR"})}</span>
                <span className="text-lg line-through text-gray-500">{currency.format(product.price, {code: "INR"})}</span>
            </div>
            {product.sizes.length > 0 && <>
                <h3 className="text-base font-medium capitalize text-gray-600 mb-1">sizes</h3>
                <div className="flex flex-wrap -mx-2">
                    {product.sizes.map((size, index) => (
                        <div className="p-1.5 px-2.5 m-2 border border-gray-300 rounded cursor-pointer" key={size.name}>
                            <span className="text-sm font-semibold uppercase text-gray-900">
                                {size.name}
                            </span>
                        </div>
                    ))}
                </div>
            </>}
            {product.colors.length > 0 && (<>
                <h3 className="text-base font-medium capitalize text-gray-600 mb-1 mt-4">colors</h3>
                <div className="flex flex-wrap -mx-2">
                    {product.colors.map((color, index) => (
                        <div className="m-2 p-1 border border-gray-300 rounded cursor-pointer" key={color.color}>
                            <span className="min-w-[40px] min-h-[40px] rounded block" style={{backgroundColor: color.color}}></span>
                        </div>
                    ))}
                </div>
            </>)}
            <h3 className="text-base font-medium capitalize text-gray-600 mb-1 mt-4">description</h3>
            <p className="mt-4 leading-[27px]">{desc}</p>
        </div>
    </div>
  )
}

export default PDetailsCard;