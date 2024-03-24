import styles from "../../styles/Login.module.css";
import { Navbar } from "../Navbar";
export const Login = () => {
  return (
    <>
    <Navbar/>
      <h1 className={styles.LoginHead}>Login</h1>
      <div className={styles.LoginForm}>
        <form action="">
          <input className={styles.InputBtn} type="email" placeholder="Enter Email" />
          <br />
          <br />
          <input className={styles.InputBtn} type="password" placeholder="Enter Password" />
          <br />
          <br />
          <button className={styles.SubmitBtn} type="submit">Login</button>
        </form>
      </div>
    </>
  );
};
