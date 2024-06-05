import { addProject } from "@/apiService/projectService";
import { validateGitUrl } from "@/utils/validationHelpers";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useState } from "react";

const useAddProject = () => {
  const [loading, setLoading] = useState(false);
  const [deploymentId, setDeployment] = useState([]);
  const navigate = useRouter();
  const form = useFormik({
    validateOnChange: true,
    initialValues: {
      name: "",
      git_url: "",
      custom_domain: "",
    },

    validate: (values) => {
      const errors = { ...values?.errors };

      if (!validateGitUrl(values?.git_url?.toString())) {
        errors.git_url = "Enter a valid git URL";
      }
      if (values?.name?.toString()?.length === 0) {
        errors.name = "Please Enter Project Name";
      }
      return errors;
    },

    onSubmit: (values) => {
      console.log("values", values);
      setLoading(true);

      addProject(values)
        .then((res) => {
          setLoading(false);
          console.log(res?.data?.data?.project);
          setDeployment(res?.data?.data?.deploymentId);

          navigate.push(
            `/projects/${
              res?.data?.data?.project?.name
            }?id=${encodeURIComponent(res?.data?.data?.project?.id)}`
          );
        })
        .catch((error) => {
          setLoading(false);
          console.log("error", error);
        });
    },
  });

  return {
    form,
    loading,
    deploymentId,
  };
};

export default useAddProject;
