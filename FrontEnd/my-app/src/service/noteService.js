 
import axios from 'axios'
import { GET_ALL_NOTES} from "./Constants";

/**
 * Function to fetch all the users.
 */
export const getAllNotes = () => {
  console.log("noteServices > getAllNotess called...");
  return new Promise((resolve, reject) => {
    try {
        console.log("in try")
      // do an SDK, DB call or API endpoint axios call here and return the promise.
      axios
      .get(GET_ALL_NOTES())
      .then((res) => {
        console.log("getAllNotess > axios res=", res.data.data[0]);
        resolve(res.data.data);
      })
      .catch((err) => {
        console.log("getAllNotes > axios err=", err);
        reject("Error in getAllNotes axios!");
      });
    } catch (error) {
      console.error("in noteServices > getAllNotes, Err===", error);
   
    }
  });
};
 