import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

//to handle authentication with google,
//we can create a handler function



const handler = NextAuth({
    providers: [
        GoogleProvider({
            // option object
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({session}) {
//         This function modifies the session object before sending it to the client.// You can use this to attach extra user details, like a user ID from the database.
        
    },
    async signIn({profile}){
        try{
            //serverless route -> lambda function -> opens up only when there is connection to the database
        } catch (error) {
            return false
        }
    }
})

export {handler as GET, handler as POST}