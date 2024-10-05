// src/schema/resolvers.ts
const userData = require("../../data.json");

const resolvers = {
  Query: {
    user: (_: any, args: any) => {
      const id = Number(args.id);
      const user = userData.find((user: any) => user.id === id);
      return user;
    },
  },
  Mutation: {
    updateUser: (_: any, { id, input }: any) => {
      let index = userData.findIndex((user: any) => user.id === id);
      userData[index] = { ...userData[index], ...input };
      return userData[index];
    },
  },
};

module.exports = { resolvers };
