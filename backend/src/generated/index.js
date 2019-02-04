"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "ContentType",
    embedded: false
  },
  {
    name: "Difficulty",
    embedded: false
  },
  {
    name: "Language",
    embedded: false
  },
  {
    name: "Post",
    embedded: false
  },
  {
    name: "PriceRange",
    embedded: false
  },
  {
    name: "Review",
    embedded: false
  },
  {
    name: "Role",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://the-source-heroku-0999be8946.herokuapp.com/the-source-prod/prod`,
  secret: `${process.env["PRISMA_SERVICE_SECRET"]}`
});
exports.prisma = new exports.Prisma();
