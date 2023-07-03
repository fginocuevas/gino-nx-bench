export const configuration = async () => ({
  environment: process.env["NODE_ENV"],
  DATABASE_URL: process.env["DATABASE_URL"],
});

