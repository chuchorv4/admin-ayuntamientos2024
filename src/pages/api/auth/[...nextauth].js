import {
  AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET,
  AUTH0_ISSUER,
  NEXTAUTH_SECRET,
} from "@const/environments"
import NextAuth from "next-auth"
import Auth0Provider from "next-auth/providers/auth0"

const authOptions = {
  httpOptions: { timeout: 10_000 },
  providers: [
    Auth0Provider({
      clientId: AUTH0_CLIENT_ID,
      clientSecret: AUTH0_CLIENT_SECRET,
      issuer: AUTH0_ISSUER,
    }),
  ],
  secret: NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)
