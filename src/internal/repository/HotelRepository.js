import { uniqueId } from 'lodash';
import Repository from './Repository';

class HotelRepository extends Repository{
  
  
  
  getAllHotelList = async ()=>{
     const data= await this.getData('http://localhost:5000/api/v1/hotel',{});
     return data.data;
  }

}

export default new HotelRepository("hotel");