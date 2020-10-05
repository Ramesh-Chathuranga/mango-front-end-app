import Repository from "./Repository";

class BookingRepository extends Repository {
  createBooking = async (data) => {
    debugger;
    const result = await this.postData("api/v1/booking", data);
    debugger;
    return result;
  };

  getAllBookingList = async () => {
    const data = await this.getData("api/v1/booking", {});
    return data.data;
  };
}

export default new BookingRepository("booking");
