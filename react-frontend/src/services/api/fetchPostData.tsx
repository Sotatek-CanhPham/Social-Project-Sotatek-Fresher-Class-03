import axios from "axios";
import axiosClient from "./axios";

const fetchPostData = {
  getPosts: async () => {
    try {
      const { data } = await axiosClient.get("/post");
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default fetchPostData;
