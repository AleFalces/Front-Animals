export const HOST = "http://localhost:3001";

export const header = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};
