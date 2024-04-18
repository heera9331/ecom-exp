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
      email: { label: "Email", type: "text", placeholder: "Enter your email" },
      password: { label: "Password", type: "password", placeholder:"password" }
    },
    async authorize(credentials, req) {
        try {
            await connectDB()
            const user = await User.findOne({email:credentials?.email,password:credentials?.password})
            // If no error and we have user data, return it
          if ( user) {

            return user
          }
          else{
            throw new Error("User not exist")
          }
        } catch (error) {
           throw new Error("Something went wrong") 
        }
        
    },
  })
],
pages:{
  signIn: '/src/app/signin',  
},
callbacks:{
  async jwt({token,user}) {
    return token
  },
  async session({token,session,user}) {
    return session
  },
},
session:{strategy:"jwt"}


})

export {handler as GET, handler as POST}