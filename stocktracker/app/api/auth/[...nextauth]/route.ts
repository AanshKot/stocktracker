import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        })
    ],
    
    async session({session}){

    },

    async signIn({ profile }){
        try{
            //serverless route -> Lambda -> dynamodb

            //check if use already exists

            //if not, create a new user (no sign up since OAuth through google)
            return true;
        }catch(error){
            console.log(error);
            return false;
        }
    }
});

export { handler as GET, handler as POST };