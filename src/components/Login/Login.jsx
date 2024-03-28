import { useNavigate } from "react-router-dom";
import styles from "../../styles/Login.module.css";
import { Navbar } from "../Navbar";
import { useEffect } from "react";
// import { useHistory } from 'react-router-dom';
export const Login = ({
  email,
  password,
  setEmail,
  setPassword,
  handleSignin,
  login,
}) => {
  console.log(email);
  console.log(password);
  const navigate = useNavigate();
  // const history = useHistory();
  useEffect(() => {
    if (login) {
      navigate("/");
    }
  }, [login, navigate]);
  return (
    <>
      <Navbar />
      <h1 className={styles.LoginHead}>Login</h1>
      <div className={styles.LoginForm}>
        <form onSubmit={(e) => handleSignin(e, email, password)}>
          <input
            className={styles.InputBtn}
            type="email"
            value={email}
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <input
            className={styles.InputBtn}
            type="password"
            value={password}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button className={styles.SubmitBtn} type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
};
