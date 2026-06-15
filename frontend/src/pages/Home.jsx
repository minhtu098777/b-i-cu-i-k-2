import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import JobCard from "../components/JobCard";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "FPT Software",
    location: "Hà Nội",
    salary: "15-25 triệu",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Viettel",
    location: "HCM",
    salary: "20-30 triệu",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "VNG",
    location: "Đà Nẵng",
    salary: "12-20 triệu",
  },
];

function Home() {
  return (
    <>
      <Hero />

      <SearchBar />

      <section className="jobs-section">
        <div className="container">
          <h2>Việc làm nổi bật</h2>

          <div className="jobs-grid">
            {jobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;