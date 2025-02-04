import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import User from "@models/user"
import {connectToDB} from "@utils/database"

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
        const sessionUser = await User.findOne({email: session.user.email
        })

        session.user.id = sessionUser._id.toString();

        return session;
    },
    async signIn({profile}){
        try{
            //serverless route -> lambda function -> opens up only when there is connection to the database

            await connectToDB();

            // check if a user with the email already exists in the database
            const userExists = await User.findOne({email: profile.email});

            //if not, create a new user
            if(!userExists){
                await User.create({
                    email: profile.email,
                    username: profile.email.replace(" ","").toLowerCase(),
                    image: profile.picture,
                    //Uses Google's profile picture URL
                });
            }
            return true;
        } catch (error) {
            console.log(error);
            return false
        }
    }
})

export {handler as GET, handler as POST}