import { Link } from "react-router-dom";

export default function HeaderBar() {
    return(
        <div className="flex justify-start items-center gap-4 p-3">
            <Link to="/" className="font-bold text-[14px]">Login page</Link>
            <Link to="/info" className="font-bold text-[14px]">Info page</Link>
        </div>
    )
}