import { uniqueId } from "lodash";
import Repository from "./Repository";

class CardRepository extends Repository {
  getAllActorsList = async () => {
    const data = await this.getData("api/v1/users", {});
    return data.data;
  };
}

export default new CardRepository("hotel");
