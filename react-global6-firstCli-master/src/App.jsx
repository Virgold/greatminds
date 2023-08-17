import { Component } from 'react';
import './index.css';
import Button from './components/Button'
import Lol from './lol';
import HomeView from './pages/HomeView';
import { color } from './assets/color';

import EventListener from './components/EventListener';
import Navbar from './components/Navbar';
import { ModalPage } from './pages/LandingPage';
import Card from './components/Card';
// stateful



export default function App() {
  return (
    <div>
      <HomeView name="Esther" age={34} />

      {/* <Card name='Chuks' age={34} gender='male' isFav='juice' img='' /> */}
    </div>
  )
}













