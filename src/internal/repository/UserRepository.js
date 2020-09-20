import { uniqueId } from 'lodash';
import Repository from './Repository';

class UserRepository extends Repository{
  createUser = async(params)=>{
     return await this.saveData(params);
  }
  
  getAUserData = async(uid)=>{
      return await this.getData(`http://localhost:5000/api/v1/user?id=${uid}`,{});
  }

  getAllUserList = async ()=>{
     return await this.getData('http://localhost:5000/api/v1/user',{});
  }

  updateUser = async (data)=>{
     return await this.putData(`http://localhost:5000/api/v1/user`, data);
  }
}

export default new UserRepository("user");