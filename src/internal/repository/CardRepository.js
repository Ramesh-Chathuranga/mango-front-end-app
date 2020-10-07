import { uniqueId } from "lodash";
import Repository from "./Repository";

class CardRepository extends Repository {
  getAllActorsList = async () => {
    const data = await this.getData("api/v1/users", {});
    return data.data;
  };

  getCardByGender = async ({ type, value }) => {
    const data = await this.postData(`api/v1/users?type=${type}`, {
      type,
      value,
    });
    return data.data;
  };
}

export default new CardRepository("hotel");
