function Login() {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Đăng nhập</h2>

        <form>
          <input
            type="email"
            placeholder="Email"
          />

          <input
            type="password"
            placeholder="Mật khẩu"
          />

          <button type="submit">
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;