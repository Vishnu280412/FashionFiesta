import { useDispatch } from "react-redux";
import { logout } from "../store/reducers/authReducer";

const AdminNav = ({ openSidebar }) => {
    const dispatch = useDispatch();
    const adminLogout = () => {
        dispatch(logout());
    }
    return(
        <nav className="fixed left-0 sm:left-64 top-4 right-0 mx-4">
            <div className="bg-gray-800 w-full flex p-4 justify-between sm:justify-end items-center">
                <i className="bi bi-list text-white text-2xl cursor-pointer sm:hidden block" onClick={ openSidebar }></i>
                <button className="py-2 px-4 bg-indigo-600 text-white rounded-md capitalize" onClick={adminLogout}>logout</button>
            </div>
        </nav>
    )
}

export default AdminNav;