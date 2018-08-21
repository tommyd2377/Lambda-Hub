const { db, pgp } = require('../config/connection');

module.exports = {

  index() {
    return db.manyOrNone(
      `SELECT *
      FROM assignments`
    )
  },
    findById(id) {
      return db.one(`
      SELECT *
      FROM assignments
      WHERE id = $1
      `, id);
    },
<<<<<<< HEAD
    updateAssignment(assignment) {
      return db.one(`
      UPDATE assignments
      SET 
      name = $/name/,
      date = $/date/,
      github_link = $/github_link/,
      type = $/type/,
      unit = $/unit/
      WHERE id = $/id/
      RETURNING *
      `, assignment);
=======

    destroy(id) {
      return db.none(
        `
          DELETE FROM assignments
          WHERE id = $1
        `, [id]
      );
>>>>>>> 905105b2d53630e5123b7ff780dae933b35c3f8b
    }
    
}

