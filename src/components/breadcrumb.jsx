import {Link} from "react-router-dom";

const Breadcrumb = ({currentPage}) => (
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">{currentPage}</li>
        </ol>
    </nav>
);

export default Breadcrumb;