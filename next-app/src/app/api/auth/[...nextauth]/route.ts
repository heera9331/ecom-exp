import { connectDB } from "@/utils";
import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import { User } from "../../models";
const handler = NextAuth({
providers: [
  CredentialsProvider({

    name: 'Credentials',
    id:"credentials",

    credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      password: { label: "Password", type: "password", placeholder:"password" }
    },
    async authorize(credentials, req) {
        try {
            await connectDB()
            console.log(credentials)
            const user = await User.findOne({email:credentials.email,password:credentials.password})

            console.log("credentials from auth", credentials)
            console.log("user from ",user)
            // If no error and we have user data, return it
          if ( user) {
            // console.log("user from ",user)
            return user
          }
          else{
            throw new Error("User not exist")
          }
        } catch (error) {
           throw new Error("Something went wrong") 
        }
        
    },
    credentials : undefined
  })
],

})

export {handler as GET, handler as POST}