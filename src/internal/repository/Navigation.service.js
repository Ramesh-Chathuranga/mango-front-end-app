
import { appHistory } from '../core/StoreCreator';



export const navigate = (path) => {
  appHistory.push(path);
}

export default {navigate};
