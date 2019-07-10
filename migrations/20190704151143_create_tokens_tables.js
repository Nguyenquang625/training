
exports.up = function(knex) {
    return knex.schema.createTable('tokens',(table)=>{
        table.increments();
        table.string('user_id',100);
        table.string('token');//.index() tao record, query nhanh hon nhung insert cham hon
        table.string('status');
        table.timestamps(true,true);
    })
};

exports.down = function(knex) {
  
};
