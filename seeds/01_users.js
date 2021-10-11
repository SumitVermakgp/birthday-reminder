
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'user1', email: 'user1@gmail.com', birthdate: '1994-07-10'},
        {id: 2, name: 'user2', email: 'user2@gmail.com', birthdate: '1995-08-13'},
        {id: 3, name: 'user3', email: 'user3@gmail.com', birthdate: '1997-01-21'},
        {id: 4, name: 'user4', email: 'user4@gmail.com', birthdate: '2000-03-16'},
        {id: 5, name: 'user5', email: 'user5@gmail.com', birthdate: '1999-04-11'},
        {id: 6, name: 'user6', email: 'user6@gmail.com', birthdate: '1994-08-28'},
        {id: 7, name: 'user7', email: 'user7@gmail.com', birthdate: '1994-11-01'},
        {id: 8, name: 'user8', email: 'user8@gmail.com', birthdate: '1994-12-14'}
      ]);
    });
};
