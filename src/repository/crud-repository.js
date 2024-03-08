class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in crud repository");
            throw error;
        }
    }

    async get(id) {
        try {
            const response = await this.model.findByPK(id);
            return response;
        } catch (error) {
            console.log("Something went wrong in crud repository");
            throw error;
        }
    }

    async getAll() {
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            console.log("Something went wrong in crud repository");
            throw error;
        }
    }

    async update(id, data) {
        try {
            const response = await this.model.findByPK(id);
            response.password = data.password;
            await response.save();
            return true;
        } catch (error) {
            console.log("Something went wrong in crud repository");
            throw error;
        }
    }

    async destroy(id) {
        try {
            const response = await this.model.destroy({
                where: {id}
            });
            return response;
        } catch (error) {
            console.log("Something went wrong in crud repository");
            throw error;
        }
    }
}

module.exports = CrudRepository;