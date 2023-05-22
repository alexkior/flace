import { useState } from "react";
import style from "./App.module.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
function App() {
  return (
    <div className={style.page_wrapper}>
      <Header />
      <main className={style.content_wrapper}>
      </main>
      <Footer />
    </div>
  );
}

export default App;
