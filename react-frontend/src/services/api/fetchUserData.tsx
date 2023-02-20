import axios from "axios";
import axiosClient from "./axios";

const fetchUserData = {
  getCurrentUser: async () => {
    try {
      const { data } = await axiosClient.get("/user/me");
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  updateUserProfile: async (data: any) => {
    try {
      const response = await axiosClient.patch("/user/edit", data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};

export default fetchUserData;
