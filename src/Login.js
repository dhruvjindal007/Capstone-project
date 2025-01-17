import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Please fill in both fields.");
    } else {
      // Simulate login (replace with actual authentication logic)
      console.log("Logging in with:", { email, password });
      setError("");
      alert("Login successful!");
    }
  };

  return (
    <div style={pageStyle}>
      <header style={headerStyle}>
        <h1>Login</h1>
      </header>

      <section style={formSectionStyle}>
        <form onSubmit={handleSubmit}>
          <div style={inputGroupStyle}>
            <label htmlFor="email" style={labelStyle}>Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          <div style={inputGroupStyle}>
            <label htmlFor="password" style={labelStyle}>Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          {error && <p style={errorStyle}>{error}</p>}

          <button type="submit" style={buttonStyle}>Login</button>
        </form>
      </section>

      <footer style={footerStyle}>
        <p>Don't have an account? <a href="/signup" style={linkStyle}>Sign Up</a></p>
      </footer>
    </div>
  );
}

// Styles
const pageStyle = {
  fontFamily: "Arial, sans-serif",
  lineHeight: "1.6",
  color: "#333",
  padding: "20px",
  maxWidth: "400px",
  margin: "0 auto",
  textAlign: "center",
};

const headerStyle = {
  marginBottom: "30px",
};

const formSectionStyle = {
  marginBottom: "20px",
};

const inputGroupStyle = {
  marginBottom: "15px",
  textAlign: "left",
};

const labelStyle = {
  display: "block",
  fontWeight: "bold",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "5px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const errorStyle = {
  color: "red",
  fontSize: "14px",
  marginTop: "10px",
};

const buttonStyle = {
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  padding: "12px 20px",
  cursor: "pointer",
  width: "100%",
};

const footerStyle = {
  marginTop: "20px",
};

const linkStyle = {
  color: "#007bff",
  textDecoration: "none",
};

export default Login;
