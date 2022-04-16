import { Link } from "./Link";

const Navbar = () => {
    return (
        <div className="flex justify-center">
            <div className="mx-4 mb-12 rounded-[.5rem] shadow-md bg-white text-[1.3rem] font-medium w-full xl:w-[1200px] flex justify-between p-4">
                <Link linkClass="" linkAddress="#/" linkName="UPayments Store" />
                <Link linkClass="" linkAddress="#/" linkName="Register" />
            </div>
        </div>
    );
}

export default Navbar;