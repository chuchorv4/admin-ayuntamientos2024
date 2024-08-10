import {
  AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET,
  AUTH0_ISSUER,
} from "@const/environments"
import NextAuth from "next-auth"
import Auth0Provider from "next-auth/providers/auth0"

const authOptions = {
  providers: [
    Auth0Provider({
      clientId: AUTH0_CLIENT_ID,
      clientSecret: AUTH0_CLIENT_SECRET,
      issuer: AUTH0_ISSUER,
    }),
  ],
}

export default NextAuth(authOptions)
