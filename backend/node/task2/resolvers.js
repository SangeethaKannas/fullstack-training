// TODO implement the resolvers
const db = require("./db");
const { GraphQLScalarType } = require('graphql');

const stringToJson = new GraphQLScalarType({
  name: 'StringToJson',
  description: 'stringToJson custom scalar type',
  serialize(value) {
    return value.split(' ').join('').split(',');
  },
  parseValue(value) {
    return value.split(' ').join('').split(',');
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return value.split(' ').join('').split(','); 
    }
    return [];
  },
});

const resolvers = {
    StringToJson: stringToJson,
    Query: {
        async orders(parent, args) {
          const { status } = args;
            let result = await db.getOrders();

            if (status) {
                result = result.filter((v) => v.status === status)
              }

            return result;
        },
        order(parent, args) {
          const { id } = args;
          return db.getOrder(id)
        },
    },
    Mutation: {
        async updateStatus(parent, args) {
          const { id, status } = args;
          await db.updateOrderStatus(id, status);

          return {id: id}
        },
    }
};

module.exports = resolvers;
