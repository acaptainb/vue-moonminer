import { reactive } from 'vue'
import { click1, click10 } from './models/click.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  Total: 0,
  upgrade: [
    new click1({
      quantity: 0,
      multiplier: 1,
      price: 0,
    }),
    new click10({
      quantity: 0,
      multiplier: 10,
      price: 100,
    })
  ]


})