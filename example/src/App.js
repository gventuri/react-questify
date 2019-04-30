import React from 'react'

import ReactQuestify from 'react-questify'

const App = () => {
  const questions = [
    {
      name: 'name',
      text: 'Qual è il nome del tuo business?',
      suggestion: 'Piadineria "Da ciccio"',
      type: 'text',
      answers: {
        default: {
          goTo: 1
        }
      }
    },
    {
      name: 'business',
      text: 'Che tipo di business è?',
      type: 'select',
      options: ['Freelancer', 'Parrucchiere', 'Ristorante', 'Negozio', 'Altro'],
      answers: {
        Freelancer: {
          goTo: 3
        },
        default: {
          goTo: 2
        }
      }
    },
    {
      name: 'employee',
      text: 'Quante persone lavorano nel tuo business?',
      type: 'options',
      options: ['1', '< 5', '< 10', '> 10'],
      answers: {
        default: {
          goTo: 3
        }
      }
    },
    {
      name: 'color',
      text: 'Qual è il tuo colore preferito?',
      type: 'color',
      options: ['red', 'black', 'green', 'purple'],
      answers: {
        default: {
          goTo: 4
        }
      }
    },
    {
      name: 'facebook',
      text: "Hai una pagina Facebook? Se si, inserisci l'url",
      suggestion: 'https://facebook.com/example',
      type: 'url',
      answers: {
        default: {
          goTo: 5
        }
      }
    },
    {
      name: 'photos',
      text: 'Ci siamo quasi... Potresti caricare qualche foto del tuo business?',
      type: 'images',
      answers: {
        default: {
          goTo: 6
        }
      }
    }
  ];

  return (
    <div>
      <ReactQuestify questions={questions} />
    </div>
  )
}

export default App;
