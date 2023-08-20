"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import {  signIn, useSession } from "next-auth/react";
import { useRouter} from "next/navigation";
const Login = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const session = useSession();
  if(session.status === "loading"){
    return(
      <p>Loading...</p>
    )
  }
  if(session.status === 'authenticated'){
    router?.replace('/dashboard');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      res.status === 201 && router.push("/dashboard/login?success=Account has been created");
    } catch (err) {
      setError(err);
    }
  };
  return (
    <div className={styles.container}>
       <form onSubmit={handleSubmit} className={styles.form}>
    
        <input
          type="text"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button className={styles.button}>Login</button>
        {error && "Something went wrong!"}
      </form>
      <button
      onClick={()=>signIn("google")}
      className={styles.button + " " + styles.google}

      >Login with Google</button>
      
    </div>
  )
}

export default Login
