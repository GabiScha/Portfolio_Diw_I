import './style.css';
import gsap from 'gsap';
import { iniciarIdioma } from './i18n.js'
import { iniciarFormulario } from './contato.js'
iniciarFormulario()
iniciarIdioma()
gsap.to('.bolinha', {
  x: 500,
  y: 500,
  duration: 10,
  ease: "power2.out"
});
gsap.to('.bolinha2', {
  x: 600,
  y: 600,
  duration: 10,
  ease: "power2.out"
});
