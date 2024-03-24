import styles from "../../styles/Login.module.css";
import { Navbar } from "../Navbar";
export const Register = () => {
  return (
    <>
      <Navbar />
      <h1 className={styles.LoginHead}>Sign Up</h1>
      <div className={styles.LoginForm}>
        <form action="">
          <input
            className={styles.InputBtn}
            type="email"
            placeholder="Enter Email"
          />
          <br />
          <br />
          <input
            className={styles.InputBtn}
            type="password"
            placeholder="Enter Password"
          />
          <br />
          <br />
          <input
            className={styles.InputBtn}
            type="password"
            placeholder="Enter Password"
          />
          <br />
          <br />
          <button className={styles.SubmitBtn} type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};
