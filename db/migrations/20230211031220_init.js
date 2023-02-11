/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
        // .createTable('ingredients', table => {
        //     table.increments('id');
        //     table.string('name', 255).notNullable();
        //     table.string('remarks', 255);
        //     table.boolean('histamine', 255);
        //     table.boolean('other_amines', 255);
        //     table.boolean('liberator', 255);
        //     table.boolean('blocker', 255);
        //     table.integer('compatibility');
        //     table.integer('your_compatibility');
        //     table.string('category', 255).notNullable();
        //     table.timestamps(true, true);
        // })
        .createTable('users', table =>  {
            table.increments('id');
            table.string('first_name', 255).notNullable();
            table.string('last_name', 255).notNullable();
            table.string('email', 255).notNullable().unique();
            table.string('password', 255).notNullable();
            table.timestamps(true, true);
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema 
        // .dropTable('ingredients')
        .dropTable('users');
};
