const { UserRepository } = require("../repository/index");
const { CrudService } = require("./index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../config/server-config");

const userRepository = new UserRepository();

class UserService extends CrudService {
    constructor() {
        super(userRepository);
    }

    async comparePassword (encryptedPassword, planePassword) {
        return bcrypt.compareSync(planePassword, encryptedPassword);
    }
    
    async signIn(data) {
        try {
            const user = await userRepository.getByEmail(data.email);
            if(!this.comparePassword(data.password, user.password)) throw{data: "Not valid password or email"};
            const token = jwt.sign({email: user.email, id: user.id}, JWT_KEY, { expiresIn: "1d"});
            return token;
        } catch (error) {
            console.log("Something went wrong in Servie layer");
            throw error;
        }
    }

    async singUp(token) {
        try {
            const user = jwt.verify(token, JWT_KEY);
            return user
        } catch (error) {
            console.log("Something went wrong in Servie layer");
            throw error;
        }
    }
}

module.exports = UserService;