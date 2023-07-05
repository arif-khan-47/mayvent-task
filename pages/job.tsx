import Layout from "@/components/Layout/Layout";
import React from "react";
import jobs from "@/data/Jobs";
import JobCard from "@/components/Cards/JobCard";

function Job() {
  return (
    <Layout title="Mayvent | Jobs">
      <div className="container m-auto">
        <div className="mx-5 lg:mx-10 my-10 lg:my-20">
          <div className="text-center text-5xl font-bold mb-10">Jobs</div>
          {jobs.map((item, index) => (
            <div key={index} data-aos="fade-up">
              <JobCard data={item} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Job;
