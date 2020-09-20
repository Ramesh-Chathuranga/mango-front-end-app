import Repository from './Repository';

class RoomRepository extends Repository{
  
  
  
  getAllRoomList = async ()=>{
     const data= await this.getData('http://localhost:5000/api/v1/room',{});
     return data.data;
  }

}

export default new RoomRepository("room");