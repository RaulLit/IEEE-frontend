import { useState } from "react";

export const useRegister = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [message, setMessage] = useState(null)

    const register = async (data) => {
        setIsLoading(true)
        // Validate Email
        const isValid = validateEmail(data.email)
        if(isValid) {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
            const json = await response.json()

            if(!response.ok) {
                setIsLoading(false)
                setError(json.error)
            }
            if(response.ok) {
                setIsLoading(false)
                setMessage(json.message)
            }
        } else {
            setError("Use @siesgst.ac.in email to register")
            setIsLoading(false)
            throw Error('Wrong email')
        }
        
    }

    const validateEmail = (email) => {
        const regex = /\b[A-Z0-9._%+-]+@siesgst\.ac\.in\b/i
        return regex.test(email)
    }

    return {register, isLoading, error, message}
}