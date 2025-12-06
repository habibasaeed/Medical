import "./BreadCrumbs.css";
import "../../assets/css/style.css";
import { Link } from "react-router-dom";
interface BreadCrumbsType {
  title: string;
  page: string;
}
function BreadCrumbs({ title, page }: BreadCrumbsType) {
  return (
    <>
      <div className="bread-crumb ">
        <div className="container ">
          <div className="px-5">
            <p className="">{title}</p>
            <ul className="">
              <li>
                <Link to="/#">Home &nbsp;</Link>
              </li>
              <li className="active"> / {page}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default BreadCrumbs;
