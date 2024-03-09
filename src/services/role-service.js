const { RoleRepository } = require("../repository/index");
const CrudService = require("./crud-service");

const roleRepository = new RoleRepository();

class RoleService extends CrudService {
    constructor() {
        super(roleRepository);
    }
}

module.exports = RoleService;