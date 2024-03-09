const UserRoleService = require("../services/userrole-service");

const userRoleService = new UserRoleService();

const create = async (req, res) => {
    try {
        const response = await userRoleService.create(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully created the user",
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed created the user",
            err: error
        });
    }
}

const get = async (req, res) => {
    try {
        const response = await userRoleService.get(req.params.id);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully fetched the user",
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to fetch the user",
            err: error
        });
    }
}

const getAll = async (req, res) => {
    try {
        const response = await userRoleService.getAll();
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully fetch all users",
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to fetch all users",
            err: error
        });
    }
}

const update = async (req, res) => {
    try {
        const response = await userRoleService.update(req.params.id, req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully updated the user",
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to update the user",
            err: error
        });
    }
}
const destroy = async (req, res) => {
    try {
        const response = await userRoleService.destroy(req.params.id);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully deleted the user",
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to delete the user",
            err: error
        });
    }
}

module.exports = {
    create,
    get,
    getAll,
    update,
    destroy,
};