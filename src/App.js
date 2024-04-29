import React from "react";
import Header from"./components/header/Header";
import Footer from"./components/footer/Footer";
import AppRoutes from './routes/AppRoutes';
import Bar from "./components/bar/Bar";
import { Line } from "./components/line/Line";

function App() {
  return (
    <>
      <Bar />
      <Header />
      <Line />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;