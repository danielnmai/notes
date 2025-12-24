import { table } from "./storage";
import { bucket } from "./storage";

export const api = new sst.aws.ApiGatewayV2("Api", {
  transform: {
    route: {
      handler: {
        link: [table],
      }
    }
  },
});

api.route("GET /", {
  link: [bucket],
  handler: "packages/functions/src/api.handler",
});

api.route("POST /notes", "packages/functions/src/create.main")