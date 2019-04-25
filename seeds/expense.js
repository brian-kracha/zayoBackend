
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('expense').del()
    .then(function () {
      // Inserts seed entries
      return knex('expense').insert([
        {
          id:1,
        name: 'Expense 1',
        oneTime: 500,
        monthly: 20.00
      },
      {
        id:2,
        name: 'Expense 2',
        oneTime: 200,
        monthly: 40
      }
      ])
      .then(() => {
   // Moves id column (PK) auto-incremented to correct value after inserts
  return knex.raw(`SELECT setval('expense_id_seq', (SELECT MAX(id) FROM expense))`)
    });
  });
}
