'use strict'

/*
|--------------------------------------------------------------------------
| DeveloperSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/
const Factory = use('Factory')

class DeveloperSeeder {
  async run () {
    await Factory.model('App/Models/Developer').createMany(2)
  }
}

module.exports = DeveloperSeeder
