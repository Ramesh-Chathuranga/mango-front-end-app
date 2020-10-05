import { uniqueId } from "lodash";
import Repository from "./Repository";
//http://localhost:5000/
class UserRepository extends Repository {
  createUser = async (params) => {
    return await this.saveData(params);
  };

  getAUserData = async (uid) => {
    return await this.getData(`api/v1/user?id=${uid}`, {});
  };

  getAllUserList = async () => {
    return await this.getData("api/v1/user", {});
  };

  updateUser = async (data) => {
    return await this.putData(`api/v1/user`, data);
  };
}

export default new UserRepository("user");
