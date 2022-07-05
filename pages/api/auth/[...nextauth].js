import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
    providers: [
      GoogleProvider({
        clientId: "708494969765-akdb534ctclkhg6cv64hlsrs5ev20rqj.apps.googleusercontent.com",
        clientSecret: "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",        
      })
    ],
  });