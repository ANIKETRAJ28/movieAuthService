const { UserRoleRepository } = require("../repository/index");
const CrudService = require("./crud-service");

const userRoleRepository = new UserRoleRepository();

class UserRoleSerive extends CrudService {
    constructor() {
        super(userRoleRepository);
    }
}

module.exports = UserRoleSerive;