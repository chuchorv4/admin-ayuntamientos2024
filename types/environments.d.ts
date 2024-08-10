/* eslint-disable @typescript-eslint/no-unused-vars */
namespace NodeJS {
  // eslint-disable-next-line unicorn/prevent-abbreviations
  interface ProcessEnv extends NodeJS.ProcessEnv {
    AUTH0_CLIENT_ID: string
    AUTH0_CLIENT_SECRET: string
    AUTH0_ISSUER: string
  }
}
