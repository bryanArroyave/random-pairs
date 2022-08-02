const random = require('./random-paits')
const mail = require('./notification')

const tales = [
    { name: 'Bryan Arroyave', email: 'bryan.arroyave@coxti.com' },
    { name: 'Jessica', email: 'bryan.arroyave@coxti.com' },
    { name: 'Edisson Andrés', email: 'bryanarroyaveo@gmail.com' }
]
// random.run(tales)
//     .then(console.log)

const html = (a, b) => {
    return `
        <style>
            .title{
                color: #abc123;
            }
        </style>
        <h1 class="title">Estimado ${a}</h1>
        <p>le tocó ${b}</p>
    `
}
mail.notify({
    user: "oncredit@coxti.net",
    password: "12Onkredyttt34",
    smtp: "smtp.ipage.com",
    port: 587,
  }, 'Prueba', html('Bryan Arroyave', 'Andrés Osorio'), 'bryan.arroyave@coxti.com')
  .then(console.log);