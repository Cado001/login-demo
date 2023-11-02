import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../utilis"


export default function LoginForm(){
    const handleLogin = async (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const response = await signInWithEmailAndPassword(auth,email,password)
        .catch(error => alert(error.message))
        console.log(response.user)
    }
    return (
        <form onSubmit={handleLogin}>
            <label htmlFor="email">
        Email:
        <input type="email" name="email" />
      </label>
      <label htmlFor="password">
        Password:
        <input type="password" name="password" />
      </label>
      <input type="submit" value="Login" />
      
        </form>
    )
}