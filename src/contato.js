import emailjs from '@emailjs/browser'

const SERVICE_ID = 'service_0ux8bp4'
const TEMPLATE_ID = 'template_izxyj3c'
const PUBLIC_KEY = 'DhRt7p_0hJshXE_bl'

const mensagens = {
  pt: {
    ok: 'Mensagem enviada com sucesso! Obrigada pelo contato.',
    erro: 'Não foi possível enviar. Tente novamente em alguns instantes.',
  },
  en: {
    ok: 'Message sent successfully! Thanks for reaching out.',
    erro: 'Could not send the message. Please try again in a moment.',
  },
}

export function iniciarFormulario() {
  const form = document.querySelector('#form-contato')
  const status = document.querySelector('#form-status')
  const botao = form.querySelector('button[type="submit"]')

  form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const lang = document.documentElement.lang.startsWith('en') ? 'en' : 'pt'
    botao.disabled = true
    status.className = 'mt-3'
    status.textContent = ''

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, {
        publicKey: PUBLIC_KEY,
      })
      status.className = 'mt-3 alert alert-success'
      status.textContent = mensagens[lang].ok
      form.reset()
    } catch (erro) {
      console.error('EmailJS falhou:', erro)
      status.className = 'mt-3 alert alert-danger'
      status.textContent = mensagens[lang].erro
    } finally {
      botao.disabled = false
    }
  })
}
