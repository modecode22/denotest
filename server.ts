// Importing required modules
import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

// Defining multiple API endpoints

// GET endpoint
router.get("/", ({ response }: { response: any }) => {
  response.body = "Welcome to the home page!";
});

// POST endpoint
router.post(
  "/api",
  async ({ request, response }: { request: any; response: any }) => {
    const body = await request.body();
    response.body = `Request received with data ${JSON.stringify(body.value)}`;
  }
);

// PUT endpoint
router.put(
  "/api/:id",
  async ({
    params,
    request,
    response,
  }: {
    params: { id: string };
    request: any;
    response: any;
  }) => {
    const body = await request.body();
    response.body = `Request received for id ${
      params.id
    } with data ${JSON.stringify(body.value)}`;
  }
);

// DELETE endpoint
router.delete(
  "/api/:id",
  ({ params, response }: { params: { id: string }; response: any }) => {
    response.body = `Request received to delete id ${params.id}`;
  }
);

const app = new Application();

// Using the router
app.use(router.routes());
app.use(router.allowedMethods());

// Listening on port 8000
console.log("Server is running on port 8000");
await app.listen({ port: 8000 });
