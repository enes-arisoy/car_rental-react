import  { type FC } from "react";
import { Link } from 'react-router-dom';

const NotFound: FC = () => {
  return <div>
    <h1>404</h1>
    <p>Aradığınız içerik bulunamadı.</p>
    <Link to="/">Anasayfaya Git</Link>
  </div>;
};

export default NotFound;
