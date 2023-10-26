import {
  arrow,
  container,
  gettingStartedMessage,
  welcomeMessage,
} from "./SplashScreen.css";
import Arrow from "../assets/arrow.svg";

export function SplashScreen() {
  return (
    <div className={container}>
      <div className={welcomeMessage}>
        Welcome to <strong>Woofr!</strong>
      </div>
      <div className={gettingStartedMessage}>
        To get started, select a breed
      </div>
      <img src={Arrow} alt="" className={arrow} />
    </div>
  );
}
