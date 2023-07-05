export const configuration = async () => ({
  environment: process.env["NODE_ENV"],
  DATABASE_URL: process.env["DATABASE_URL"],
  WHAT3WORDS_KEY: process.env["WHAT3WORDS_KEY"],
});

