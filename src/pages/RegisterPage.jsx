import { useState } from "react";

export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        setError("");
        setSuccess("");

        //validaciones//

        if (!email.includes("@")) {
            setError("El correo debe contener '@'.");
            return;
        }

        if (password.length < 6) {
            setError("Las contraseñas debe tener al menos 6 caracteres.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Las contraseñas no coinciden.");
            return;
        }

        //  Si todo esta bien//
        setSuccess("Registro exitoso");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };


    return (

        <div className="container mt-4" style={{ maxWidth: "400px" }}>
            <h2 className="text-center mb-3">Registro</h2>

            {/* Mensajes */}
            {error && <p className="text-danger">{error}</p>}
            {success && <p className="text-success">{success}</p>}

            <form onSubmit={handleSubmit}>
                {/* Email */}
                <div className="mb-3">
                    <label className="form-label">Correo</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* Password */}
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {/* Confirm Password */}
                <div className="mb-3">
                    <label className="form-label">Confirmar Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                    Registrarse
                </button>
            </form>
        </div>
    );
}