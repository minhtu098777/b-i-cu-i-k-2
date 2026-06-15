function Register() {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Đăng ký</h2>

        <form>
          <input
            type="text"
            placeholder="Họ tên"
          />

          <input
            type="email"
            placeholder="Email"
          />

          <input
            type="password"
            placeholder="Mật khẩu"
          />

          <button type="submit">
            Đăng ký
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;