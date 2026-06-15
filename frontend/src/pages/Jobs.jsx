import JobCard from "../components/JobCard";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "FPT",
    location: "Hà Nội",
    salary: "15-25 triệu",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Viettel",
    location: "HCM",
    salary: "20-35 triệu",
  },
];

function Jobs() {
  return (
    <div className="container jobs-page">
      <h1>Tất cả việc làm</h1>

      <div className="jobs-grid">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
          />
        ))}
      </div>
    </div>
  );
}

export default Jobs;