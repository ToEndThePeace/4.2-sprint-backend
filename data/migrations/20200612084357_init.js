exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (t) => {
      t.increments();
      t.string("name", 255).notNullable();
      t.string("description", 255);
      t.boolean("completed").defaultTo(0);
    })
    .createTable("tasks", (t) => {
      t.increments();
      t.string("description", 255).notNullable();
      t.string("notes", 255);
      t.boolean("completed").defaultTo(0);
      t.integer("project_id")
        .notNullable()
        .unsigned()
        .references("projects.id")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    })
    .createTable("resources", (t) => {
      t.increments();
      t.string("name", 255).notNullable();
      t.string("description", 255);
    })
    .createTable("project_resources", (t) => {
      t.increments();
      t.integer("project_id")
        .unsigned()
        .notNullable()
        .references("projects.id")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
      t.integer("resource_id")
        .unsigned()
        .notNullable()
        .references("resources.id")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects");
};
