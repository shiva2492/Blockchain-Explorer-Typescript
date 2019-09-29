
const { body,param } = require("express-validator/check");


const blockValidation = (method: string) => {
    switch (method) {
        case "get": {
            return [
                param("id", "id doesn't exists").exists(),
                param("id", "id should be number").isInt()
            ];
        }
    }
};
export default blockValidation;