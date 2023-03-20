import axios from "axios";

const params = {
  headers: {
    Authorization:
      "bearer c6c62a76415294c93edfbe6c07b8e0ebe8358d5d6b469d7b3645af3d128b5d4f7ce1698a332775b1587e2ead55ce699ec47cf1d056d2e87e033c452fe53e1dfe635816bc73c606892c884bb1634e3203df1aebdc615c4f6cd37a9ebd28bcc62cc2deefcfe07c3c36a86f81542a8fb4d33aa941022a75bafcbad9929a8fadf672",
  },
};

export const fetchDatFromApi = async (url) => {
  try {
    const { data } = await axios.get("http://localhost:1337" + url, params);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
