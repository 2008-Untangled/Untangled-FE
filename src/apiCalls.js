export const getAllRooms = async (id) => {
  const response = await fetch(
    `https://untangled-be.herokuapp.com/api/v1/users/${id}/rooms`
  );
  return await response.json();
};
export const getRoom = async (id) => {
  const response = await fetch(
    `https://untangled-be.herokuapp.com/api/v1/rooms/${id}`
  );
  return await response.json();
};
export const getUser = async (id) => {
  const response = await fetch(
    `https://untangled-be.herokuapp.com/api/v1/users/${id}`
  );
  return await response.json();
};
export const getMemories = async (id) => {
  const response = await fetch(
    `https://untangled-be.herokuapp.com/api/v1/rooms/${id}/memories`
  );
  return await response.json();
};
export const editMemory = async (id, memoryData) => {
  const response = await fetch(
    `https://untangled-be.herokuapp.com/api/v1/memories/${id}`,
    {
      method: "PATCH",
      body: JSON.stringify({
        description: memoryData.description,
        aromas: memoryData.aromas,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  return await response.json();
};

export const deleteMemory = async (id) => {
  // const response = await fetch(
  //   (`https://untangled-be.herokuapp.com/api/v1/memories/${id}/delete`,
  //   {
  //     method: "DELETE",
  //   })
  // );

  // return await response.json();
  console.log("Deleted this memory", id);
};
