const { UserRepository } = require("../repository/index");
const { CrudService } = require("./index");

class UserService extends CrudService {
    constructor() {
        const userRepository = new UserRepository();
        super(userRepository);
    }
}

module.exports = UserService;