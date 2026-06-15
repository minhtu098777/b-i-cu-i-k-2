function JobCard({ job }) {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>

      <p>{job.company}</p>

      <div className="job-info">
        <span>{job.location}</span>

        <span>{job.salary}</span>
      </div>

      <button>Ứng tuyển</button>
    </div>
  );
}

export default JobCard;