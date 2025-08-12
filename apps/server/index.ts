import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

const apiApp = new Hono();

// cors
apiApp.use("/*", async (c, next) => {
  c.header("Access-Control-Allow-Origin", "*");
  c.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  c.header("Access-Control-Allow-Headers", "Content-Type");
  await next();
});

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

const port = 4000;

serve({ port, fetch: app.fetch });

export default app;
