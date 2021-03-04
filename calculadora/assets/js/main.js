function criaCalculadora () {
  return {
    display: document.querySelector('.display'),

    inicia () {
      this.cliqueBotoes()
    },

    cliqueBotoes () {
      document.addEventListener('click', e => {
        const el = e.target
        if (el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText)
        }
        if (el.classList.contains('btn-clear')) {
          this.btnLimparDisplay()
        }
        if (el.classList.contains('btn-eq')) {
          this.btnIgual(el.innerText)
        }
        if (el.classList.contains('btn-del')) {
          this.btnApagaum()
        }
      })
    },

    btnParaDisplay (valor) {
      this.display.value += valor
    },

    btnLimparDisplay () {
      this.display.value = ''
    },

    btnApagaum () {
      this.display.value = this.display.value.slice(0, -1)
    },

    btnIgual (display) {
      let conta = this.display.value
      try {
        conta = eval(conta)
        if (!conta) {
          alert('Conta Invalida')
        }
        this.display.value = conta
      } catch (e) {
        alert('Conta Invalida')
      }
    }

  }
}

const calculadora = criaCalculadora()

calculadora.inicia()
