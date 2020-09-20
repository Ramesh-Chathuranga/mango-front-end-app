import Repository from './Repository';

class AuthRepository extends Repository{
   signup = async(params)=>{
    return await this.signUpWithEmailPassword(params);
   }

   login = async(params)=> {
    return await this.signInWithEmailAndPassword(params);
   }

   signOut =async()=>{
      return await this.signOut();
   }

   }

export default new AuthRepository();