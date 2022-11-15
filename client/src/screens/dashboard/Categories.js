import ScreenHeader from "../../components/ScreenHeader";
import { Link } from "react-router-dom";
import Wrapper from "./Wrapper";

const Categories = () => {
    return(
        <Wrapper>
            <ScreenHeader>
                <Link to="/dashboard/create-category" className="btn-dark"><i class="bi bi-plus"> </i>add categories</Link>
            </ScreenHeader>
            lorem herhgsiehb er gkiergk sbhgebskh gerhgb shjgbkhsdbg igsj kgi esrhkg brgb rbsikhgb
        </Wrapper>
    )
}

export default Categories;