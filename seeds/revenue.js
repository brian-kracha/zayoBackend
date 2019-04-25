exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('revenue').del()
    .then(function () {
      // Inserts seed entries
      return knex('revenue').insert([
        {
          id:1,
          name: 'Item 1',
          oneTime: 100,
          monthly: 50
        },
        {
          id:2,
          name: 'Item 2',
          oneTime: 50,
          monthly: 25
        },
        {
          id:3,
          name: 'Item 3',
          oneTime: 25,
          monthly: 85
        }
      ])
      .then(() => {
   // Moves id column (PK) auto-incremented to correct value after inserts
  return knex.raw(`SELECT setval('revenue_id_seq', (SELECT MAX(id) FROM revenue))`)
    });
})
}
