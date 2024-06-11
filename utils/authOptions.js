import GoogleProvider from 'next-auth/providers/google'

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    })
  ],
  callbacks: {
    async signIn({profile}){
      // connect to DB
      // check if user exists
      // if not, create user
      // return true if user exists
    },
    //modifies session object
    async session ({session}) {
      // get user info
      // assign user id to session
      // return user info
    }
  }
}

export default authOptions