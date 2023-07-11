import axios from "axios";

export const HOST = "http://localhost:3001";

export const header = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export async function setImageAsync(obj) {
  try {
    const data = new FormData();
    data.append("file", obj[0]);
    data.append("upload_preset", "buddycare");

    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/lucho123/image/upload/",
      data
    );

    const file = await res.data;
    return file.url;
  } catch (error) {
    console.log(error);
  }
}
