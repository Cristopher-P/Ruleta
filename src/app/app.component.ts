import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ruleta-bsh';
  selectedSection: string='';
  rouletteOptions = [
    { value: -1, caballo: 'rojo', fondo: '#dc143c' },
    { value: 1, caballo: 'verde', fondo: '#3f51b5' },
    { value: -2, caballo: 'rojo', fondo: '#dc143c' },
    { value: 2, caballo: 'verde', fondo: '#3f51b5' },
    { value: -3, caballo: 'rojo', fondo: '#dc143c' },
    { value: 3, caballo: 'verde', fondo: '#3f51b5' },
    { value: -4, caballo: 'rojo', fondo: '#dc143c' },
    { value: 4, caballo: 'verde', fondo: '#3f51b5' },
    { value: -5, caballo: 'rojo', fondo: '#dc143c' },
    { value: 5, caballo: 'verde', fondo: '#3f51b5' },
    { value: -6, caballo: 'rojo', fondo: '#dc143c' },
    { value: 6, caballo: 'verde', fondo: '#3f51b5' },
  ];

  maxSpins = 10;
  minSpins = 1;
  maxDegrees = 360;
  minDegrees = 1;

  constructor(private renderer: Renderer2) {}

  getRandomNumber(min: number, max: number): number {
    return Math.round(Math.random() * (max - min) + min);
  }

  spinRoulette(): void {
    const spins = this.getRandomNumber(this.minSpins, this.maxSpins);
    const degrees = this.getRandomNumber(this.minDegrees, this.maxDegrees);

    const sectionIndex = (spins - 1) % this.rouletteOptions.length;

    this.selectedSection = this.rouletteOptions[sectionIndex].caballo;

    const fullSpins = spins * 360;
    const spin = fullSpins + degrees;

    const animationTime = spins;

    const roulette = document.querySelector("#roulette") as HTMLElement;
    roulette.style.transform = `rotate(${spin}deg)`;
    roulette.style.transitionDuration = `${animationTime}s`;
  }
}
