const { Role } = require("../models/index");
const CrudRepository = require("./crud-repository");

class RoleRepository extends CrudRepository {
    constructor() {
        super(Role);
    }
}

module.exports = RoleRepository;