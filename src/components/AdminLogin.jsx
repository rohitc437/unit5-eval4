import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authcontext";

export function Adminlogin(props) {
    let navigate = useNavigate();
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
            navigate("/admin/home")
        }).catch((err) => console.log(err))
    }

    return (
        <div id="login-wrapper">
            <form onSubmit={(e) => {
                handleForm(e)
            }}>
                <h3>Login</h3>
                <input type="text" placeholder="Enter email here" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Enter password here" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
