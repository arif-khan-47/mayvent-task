import react, { useState } from "react";
import Layout from "@/components/Layout/Layout";
import { useRouter } from "next/router";
import jobs from "@/data/Jobs";
import { IoMdCloudUpload } from "react-icons/io";
import { toast } from "react-hot-toast";

const SlugPage: React.FC = ({ job }: any) => {
  const router = useRouter();
  const { slug } = router.query;
  const [resumeName, setResumeName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isResumeUploaded, setIsResumeUploaded] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setResumeName(file.name);
      setIsResumeUploaded(true);
    }
  };

  const isNameValid =
    /^[a-zA-Z\s]*$/.test(name.trim()) &&
    name.trim() !== "" &&
    name.trim().length >= 3;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const isAddressValid = address.trim() !== "";
  const isValidForm =
    isNameValid && isEmailValid && isAddressValid && isResumeUploaded;
  // const validateForm = () => {
  //   setIsFormValid(
  //     isNameValid && isEmailValid && isAddressValid && isResumeUploaded
  //   );
  // };

  const handleFormSubmit = (e: React.FormEvent) => {
    // e.preventDefault();
    console.log("name: ", name, 'email: ',email, 'address: ', address, 'isResumeUploaded ',isResumeUploaded);
    toast.success('Form submitted successfully.')
  };

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
                      <label className="block mb-2 font-bold text-gray-600">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Put in your fullname."
                        className={`border focus:outline-none ${
                          isNameValid || name == ""
                            ? "border-gray-300"
                            : "border-red-500"
                        } shadow p-3 w-full rounded mb-`}
                        onChange={(e) => {
                          setName(e.target.value);
                          // validateForm();
                        }}
                      />
                      {!isNameValid && (
                        <p className="text-sm text-red-400 mt-2">
                          Name must be greater than 3 Character.
                        </p>
                      )}
                    </div>

                    <div className="mb-5">
                      <label className="block mb-2 font-bold text-gray-600">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Put in your Email Id."
                        className={`border focus:outline-none ${
                          isEmailValid || email == ""
                            ? "border-gray-300"
                            : "border-red-500"
                        } shadow p-3 w-full rounded mb-`}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          // validateForm();
                        }}
                      />
                      {!isEmailValid && (
                        <p className="text-sm text-red-400 mt-2">
                          Please enter a valid email.
                        </p>
                      )}
                    </div>

                    <div className="mb-5">
                      <label className="block mb-2 font-bold text-gray-600">
                        Address
                      </label>
                      <input
                        type="text"
                        id="adress"
                        name="address"
                        placeholder="Put in your Adress."
                        className={`border focus:outline-none ${
                          isAddressValid || address == ""
                            ? "border-gray-300"
                            : "border-red-500"
                        } shadow p-3 w-full rounded mb-`}
                        onChange={(e) => {
                          setAddress(e.target.value);
                          // validateForm();
                        }}
                      />
                      {!isAddressValid && (
                        <p className="text-sm text-red-400 mt-2">
                          Please enter a valid address.
                        </p>
                      )}
                    </div>
                    <div className="w-full mb-10 items-center justify-center bg-grey-lighter">
                      <label className="flex mx-auto w-[80%] lg:w-[40%] justify-center gap-5 items-center px-4 py-3 text-blue rounded-lg shadow-lg tracking-wide cursor-pointer hover:bg-blue hover:bg-black bg-white border text-black border-black hover:scale-105  duration-500 hover:text-white">
                        <IoMdCloudUpload className="h-10 w-10" />
                        <span className="mt-2 my-auto text-base font-semibold leading-normal">
                          {resumeName ? resumeName : "UPLOAD RESUME"}
                        </span>
                        <input
                          type="file"
                          className="hidden"
                          onChange={handleFileChange}
                        />
                      </label>
                      {!isResumeUploaded && (
                        <p className="text-sm text-center text-red-400 mt-2">
                          Please Upload a resume.
                        </p>
                      )}
                    </div>

                    <button
                      onClick={handleFormSubmit}
                      className={`w-full font-bold p-4 rounded-lg ${
                        !isValidForm
                          ? "bg-gray-500 text-white border-gray-600 pointer-events-none"
                          : "hover:bg-black bg-white border-2 text-black border-black hover:scale-105 duration-500 hover:text-white"
                      }`}
                      disabled={!isValidForm}
                    >
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
