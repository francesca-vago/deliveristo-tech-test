import LogoImage from "../assets/logo-image.png";
import { loader, loaderContainer } from "./Loader.css";

export function Loader() {
  return (
    <div className={loaderContainer}>
      <img src={LogoImage} alt="loader" className={loader} />
      <div>Loading...</div>
    </div>
  );
}
