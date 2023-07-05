import Layout from "@/components/Layout/Layout";
import { useRouter } from "next/router";
import jobs from "@/data/Jobs";

const SlugPage: React.FC = ({ job }: any) => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Layout title={`Mayvent | Job | ${slug}`}>
        <div className="container m-auto">
          <div className="mx-5 lg:mx-20 my-20">
            <h2 className="lg:text-3xl text-xl mb-10">
              <span className="font-bold">Designation:</span> {job.designation}
            </h2>
            <p className="lg:text-xl mb-10">
              <span className="font-bold">Location:</span> {job.location}
            </p>
            <p className="lg:text-xl mb-10">
              <span className="font-bold">Salary:</span> {job.salary}
            </p>
            <p className="lg:text-xl mb-20">
              <span className="font-bold">Description:</span> {job.description}
            </p>

            <div>
              <div className="bg-blue-200 rounded-lg flex items-center">
                <div className="w-full">
                  <h2 className="text-center text-blue-400 font-bold text-2xl uppercase my-3">
                    Fill out our form
                  </h2>
                  <div className="bg-white p-10 rounded-lg shadow mx-auto w-full">
                    
                      <div className="mb-5">
           
           <input type="text" id="name" name="name" placeholder="Put in your fullname." className="border border-gray-300 shadow p-3 w-full rounded mb-"/>
         </div>

                      {/* <div className="mb-5">
           <label for="twitter" className="block mb-2 font-bold text-gray-600">Twitter</label>
           <input type="text" id="twitter" name="twitter" placeholder="Put in your fullname." className="border border-red-300 shadow p-3 w-full rounded mb-">
           <p className="text-sm text-red-400 mt-2">Twitter username is required</p>
         </div> */}

                      <button className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">
                        Submit
                      </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export async function getServerSideProps({ params }: any) {
  const { slug } = params;
  const job = jobs.find((job) => job.designation === slug);

  if (!job) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      job,
    },
  };
}

export default SlugPage;
