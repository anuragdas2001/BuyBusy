import { useEffect } from "react";
import styles from "../../styles/Login.module.css";
import { Navbar } from "../Navbar";
import { useNavigate,Link, NavLink } from "react-router-dom";
export const Register = ({
  email,
  password,
  setEmail,
  setPassword,
  handleSignUp,
  login,
}) => {

    const navigate = useNavigate();
    useEffect(()=>{
        if(login){
            navigate('/signin')
        }
    },[login,navigate])

  return (
    <>
      <Navbar />
      <h1 className={styles.LoginHead}>Sign Up</h1>
      <div className={styles.LoginForm}>
        <form action="" onSubmit={(e) => handleSignUp(e,email,password)}>
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
            Sign Up
          </button>
        </form>
        <span className={styles.SignUpSuggestionBtn}>
          <NavLink  style={{ textDecoration: "none", color: "black" }} to="/signin" >Already have an account ?</NavLink>
        </span>
      </div>
    </>
  );
};
