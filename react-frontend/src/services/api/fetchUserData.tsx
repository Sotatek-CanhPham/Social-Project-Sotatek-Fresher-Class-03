import axios from "axios";
import axiosClient from "./axios";

const fetchUserData = {
  getCurrentUser: async () => {
    try {
      const { data } = await axiosClient.get("/user/me");
      return data;
    } catch (error: any) {
      if (error.response.data.statusCode === 401) {
        localStorage.removeItem("token");
      }
    }
  },

  updateUserProfile: async (data: any) => {
    try {
      const response = await axiosClient.patch("/user/edit", data);
      return response;
    } catch (error: any) {
      if (error.response.data.statusCode === 401) {
        localStorage.removeItem("token");
      }
    }
  },
};

export default fetchUserData;
