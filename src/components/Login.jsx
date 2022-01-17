import { useContext, useState } from "react"
import { AuthContext } from "../context/authcontext";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {handleToken} = useContext(AuthContext);

    const handleForm = (e) => {
        e.preventDefault();

        const data= {
            email,
            password
        }

        fetch("https://reqres.in/api/login", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => res.json()).then((res) => {
            handleToken(res.token);
            setEmail("");
            setPassword("");
        }).catch((err) => console.log(err))
    }

    return (
        <div id="login-wrapper">
            <form onSubmit={(e) => {
                handleForm(e)
            }}>
                <h3>User Login Form</h3>
                <input type="text" placeholder="Enter email here" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Enter password here" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
