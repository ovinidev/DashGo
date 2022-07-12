import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'api',
})

interface Data {
  id: number
  name: string
}

export const getUser = async () => {
  const { data } = await axiosInstance.get<Data[]>('users');

  return data;
}