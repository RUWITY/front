import NextAuth from "next-auth";
import Kakaoproviders from "next-auth/providers/kakao";

const handler = NextAuth({
  providers: [
    Kakaoproviders({
      clientId: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET!,
    }),
  ],
});

export { handler as GET, handler as POST };
