import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import creator from "./creator";
import collection from "./collection";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([creator, collection]),
});
