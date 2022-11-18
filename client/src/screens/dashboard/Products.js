import Wrapper from "./Wrapper";
import ScreenHeader from "../../components/ScreenHeader";
import { Link } from "react-router-dom";

const Products = () => {
    return(
        <Wrapper>
            <ScreenHeader>
                <Link to="/dashboard/create-product" className="btn-dark"><i className="bi bi-plus"> </i>add product</Link>
            </ScreenHeader>
            lorem herhgsiehb er gkiergk sbhgebskh gerhgb shjgbkhsdbg igsj kgi esrhkg brgb rbsikhgb
        </Wrapper>
    )
}

export default Products;