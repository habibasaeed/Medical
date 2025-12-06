import { Link } from 'react-router-dom';
import "./error404.css"; 
import errorImg from '../../assets/images/error.png'; 
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/all.min.css";
import "../../assets/css/fonts.css";
const ErrorPage = () => {
  return (
    <>
      <BreadCrumbs title="Error 404" page="Page Not Found" />

      <main className="error-page" role="main" aria-labelledby="error-heading">
        <div className="error-inner">
          <figure className="error-illustration" aria-hidden="true">
            <img src={errorImg} alt="404 illustration" />
          </figure>

          <header className="error-header">
            <h1 id="error-heading">Page can’t be found</h1>
            <p className="error-sub">
              Sorry, this page cannot be found. Take a look at our most popular pages.
            </p>
          </header>

          <div className="error-action">
            <Link className="btn-home" to="/">
              GO TO HOME
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default ErrorPage;