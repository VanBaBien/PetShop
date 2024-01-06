import Header from "~/Layouts/components/Header";
import Sidebar from "./Sidebar";

function HeaderOnly({children}) {
    return <div>
        <Header/>
        <div className="container">
            <Sidebar />
            <div className="Content" >{children}</div>
        </div>
    </div>;
}

export default HeaderOnly;