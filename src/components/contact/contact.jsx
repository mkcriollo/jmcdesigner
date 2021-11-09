import React from "react";
import { useState, useEffect } from "react";
import "./contact.css";

function Contact() {
  const helloLang = [
    "HELLO",
    "HOLA",
    "BONJOUR",
    "SALVE",
    "KONNICHIWA",
    "GUTEN TAG",
  ];

  function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
    // history.scrollRestoration = "manual";
    // window.onload = scrollToBottom;
  }

  const [lang, setLang] = useState(helloLang[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timerId = setInterval(
      () => setIndex((i) => (i + 1) % helloLang.length),
      2000
    );
    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    setLang(helloLang[index]);
  }, [index]);

  return (
    <div className="main-contact">
      <div className="hello-holder">
        <h1 className="animate__animated animate__jackInTheBox ">{lang}</h1>
        <p className="animate__animated animate__flipInX">We love questions!</p>
        <p className="animate__animated animate__flipInX">
          If you dont find an answer to your question below, reach out to our
          team at
        </p>
        <p className="animate__animated animate__bounceInUp">
          jscmontero31@gmail.com
        </p>
        <i
          class="fas fa-chevron-circle-down"
          onClick={() => scrollToBottom()}
        ></i>
      </div>
    </div>
  );
}

export default Contact;
