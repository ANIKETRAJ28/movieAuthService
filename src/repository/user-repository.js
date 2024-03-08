const { User } = require("../models/index");
const CrudRepository = require("./crud-repository");

class UserRepository extends CrudRepository {
    constructor() {
        super(User);
    }

    async getByEmail(email) {
        try {
            const response = await User.findOne({
                where: {email}
            });
            return response;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }
}

module.exports = UserRepository;