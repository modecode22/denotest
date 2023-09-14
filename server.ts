import {
  Application,
  Router,
  SmtpClient,
  z,
  oakCors,
} from "./deps.ts";








const router = new Router();

router.get("/", async (context) => {
  try {
 const lolo = await Math.round(Math.random() * 1000000);
    context.response.status = 200;
    context.response.body = { status: "Success", message: `Hello man ${lolo}` };
  } catch (error) {
      // Email sending failed
      console.error(`Email send failed: ${error}`);
      context.response.status = 500;
      context.response.body = {
        status: "Error",
        message: "somthing wrong man",
      }}
});

const app = new Application();
app.use(oakCors({origin: "https://moncef.online"}));// cors operation middlware
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 3000 });
