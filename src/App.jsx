import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";



function App() {
  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-text)] min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
}

export default App