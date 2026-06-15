import { useParams } from "react-router-dom";

function JobDetail() {
  const { id } = useParams();

  return (
    <div className="container">
      <div className="job-detail">
        <h1>Frontend Developer</h1>

        <p>
          Công ty:
          <strong> FPT Software</strong>
        </p>

        <p>
          Mức lương:
          <strong> 15-25 triệu</strong>
        </p>

        <p>
          Địa điểm:
          <strong> Hà Nội</strong>
        </p>

        <h3>Mô tả công việc</h3>

        <p>
          Xây dựng giao diện bằng ReactJS...
        </p>

        <button>
          Ứng tuyển ngay
        </button>
      </div>
    </div>
  );
}

export default JobDetail;