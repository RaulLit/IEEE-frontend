import "../css/register.css"
import { useState } from "react"
import { useRegister } from "../hooks/useRegister"

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState(null)
    const [prn, setPrn] = useState("")
    const [branch, setBranch] = useState(null)
    const {register, error, isLoading, message} = useRegister()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = {
            name,
            email,
            phone,
            prn,
            branch
        }
        await register(data).then(() => {
            alert(message)
            setName('')
            setEmail('')
            setPhone('')
            setPrn('')
            setBranch('')
        }).catch((err) => {
            alert(err.message)
        })
    }

    return (
        <div className="register-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <h2>Register</h2>

                <label>Full Name</label>
                <input 
                type="text" 
                placeholder="First-Name  Last-Name"
                onChange={(e)=> setName(e.target.value)}
                value={name} />

                <label>Email</label>
                <input 
                type="email"
                placeholder="College mail id (siesgst.ac.in)"
                onChange={(e) => setEmail(e.target.value)}
                value={email} />

                <label>Phone Number</label>
                <input 
                type="text"
                placeholder="Whatsapp no."
                onChange={(e) => setPhone(e.target.value)}
                value={phone} />

                <label>College PRN</label>
                <input 
                type="text"
                placeholder="121A2001"
                onChange={(e) => setPrn(e.target.value)}
                value={prn} />

                <label for="branch">Branch</label>
                <select name="branch" id="branch" 
                onChange={(e) =>setBranch(e.target.value)}
                value={branch}
                >
                    <option value="">Choose Branch</option>
                    <option value="IT">IT</option>
                    <option value="CE">CE</option>
                    <option value="EXTC">EXTC</option>
                    <option value="ME">ME</option>
                    <option value="ECS">ECS</option>
                    <option value="AIDS">AIDS</option>
                    <option value="AIML">AIML</option>
                    <option value="CSE(IOT)">CSE(IOT)</option>
                    <option value="Other">Other</option>
                </select>

                <button disabled={isLoading}>Register</button>
                {error && <div className="error">{error}</div>}
            </form>

        </div>
    );
}
 
export default Register;