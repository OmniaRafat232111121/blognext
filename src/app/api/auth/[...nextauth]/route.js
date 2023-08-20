import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../../models/User"

const handler= NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  CredentialsProvider({
    id:'credentials',
    name:'credentials',
    async authorize(credntials){
      await connect()
      try{
        const user= User.findOne(
          {email:credntials.email}
          )
        if(user){
          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (isPasswordCorrect) {
            return user;
          } else {
            throw new Error("Wrong Credentials!");
          }


        }else{
          throw new Error("User not found")
        }

      }
      catch(error){
        throw new Error(err);
      }

    }

  })
  ],
  pages: {
    error: "/dashboard/login",
  },
})
export {handler as GET, handler as POST}