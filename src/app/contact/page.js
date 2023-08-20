"use client";
import { useState } from "react";
import style from "./page.module.css";
import Link from "next/link";

export const metadata = {
  title: "contact page",
  description: "This is the Contact page",
};

const Page = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          email,
          message,
        }),
      });

      const { msg } = await res.json();
      setError(msg);

      if (res.ok) {
        setFullname("");
        setEmail("");
        setMessage("");
        setSuccess(true);
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
    }
  };
  return (
    <div className={style.container}>
      <h1 className={style.title}> Keep in Touch</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            type="text"
            id="fullname"
            placeholder=" please Enter your Name..."
            className={style.input}
          />
        </div>

        <div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            id="email"
            placeholder="please ENter your email"
            className={style.input}
          />
        </div>

        <div>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            id="message"
            placeholder="Type your message here..."
            className={style.textArea}
          ></textarea>
        </div>

        <Link href={"/"}>
          <button className={style.button}>Send</button>
        </Link>
      </form>
    </div>
  );
};

export default Page;
