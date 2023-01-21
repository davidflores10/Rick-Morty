const character = "/character";

function getEndpoints() {
  return {
    get character() {
      return character;
    },
  };
}

export default getEndpoints();
