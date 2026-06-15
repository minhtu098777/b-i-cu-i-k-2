function Admin() {
  return (
    <div className="container">
      <h1>Admin Dashboard</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Công việc</th>
            <th>Công ty</th>
            <th>Hành động</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Frontend Developer</td>
            <td>FPT</td>
            <td>
              <button>Sửa</button>
              <button>Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Admin;