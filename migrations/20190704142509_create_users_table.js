//up thuc hien viec action thay doi
exports.up = function(knex) {
  return knex.schema.createTable('users',(table)=>{
      table.increments();
      table.string('name',100);
      table.string('userame').unique().index();//.index() tao record, query nhanh hon nhung insert cham hon
      table.string('password');
      table.timestamps(true,true);
  })
};

exports.down = function(knex) {
  
};
