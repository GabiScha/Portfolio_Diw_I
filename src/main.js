import './style.css';
import gsap from 'gsap';
import { iniciarIdioma } from './i18n.js'
import { iniciarFormulario } from './contato.js'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
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

gsap.utils.toArray('.reveal').forEach((el) => {
  gsap.from(el, {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 85%',
    },
  })
})
const titulo = document.querySelector('.hero-titulo')
titulo.innerHTML = titulo.textContent
  .split('')
  .map((l) => `<span class="letra" aria-hidden="true">${l}</span>`)
  .join('')

gsap.from('.letra', {
  y: 60,
  opacity: 0,
  duration: 0.8,
  stagger: 0.06,
  ease: 'back.out(1.7)',
})
