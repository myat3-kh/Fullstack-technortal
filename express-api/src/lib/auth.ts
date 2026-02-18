//console.log("CHECK ENV:", process.env.GOOGLE_CLIENT_ID);

import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./prisma";
import { createAuthClient } from "better-auth/react";
import { emailOTPClient } from "better-auth/client/plugins";

export const { signIn, signUp, signOut, useSession, emailOtp } =
  createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: "http://localhost:8080",
    fetchOptions: {
      credentials: "include",
    },
    plugins: [emailOTPClient()],
  });

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  baseURL: "http://localhost:8080",
  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,

      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,

      prompt: "select_account",
    },
  },
  trustedOrigins: ["http://localhost:5173"],
});
