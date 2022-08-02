import React from "react";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import MainNavbar from "../../../components/MainNavbar";
import postAPI from "../../../redux/api/postAPI";

const CreatePost = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation(postAPI.createPost, {
    onSuccess: (data) => {
      if (!data.error) {
        queryClient.setQueryData("createdPostDetails", () => data.data);
        toast.success(data?.message);
        navigate("/all-posts");
      }
    },
    onError: (data) => {
      toast.error(data?.response?.data?.message);
    },
  });
  const onSubmit = (data) => {
    const postDetails = data;
    postDetails.tags = postDetails.problemTags.split(",");
    mutation.mutate({ postDetails });
  };

  return (
    <div>
      <MainNavbar />
      <div className="col-sm-12 col-md-6 col-lg-4 container">
        <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
          <h5 className="mb-4">Add a problem with solution</h5>
          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control"
              id="problemTitle"
              placeholder="Enter problem title"
              {...register("problemTitle", { required: true })}
            />
            <label className="error-label">
              {errors.problemTitle?.type === "required" &&
                "Problem title is required"}
            </label>
          </div>

          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control"
              id="problemDescription"
              placeholder="Enter problem description"
              {...register("problemDescription", { required: true })}
            />
            <label className="error-label">
              {errors.problemDescription?.type === "required" &&
                "Problem description is required"}
            </label>
            <label className="error-label">
              {errors?.problemDescription?.message}
            </label>
          </div>

          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control"
              id="problemSolution"
              placeholder="Enter problem solution"
              {...register("problemSolution", { required: true })}
            />
            <label className="error-label">
              {errors?.problemSolution?.type === "required" &&
                "Problem solution is required"}
            </label>
            <label className="error-label">
              {errors?.problemSolution?.message}
            </label>
          </div>

          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              id="problemTags"
              placeholder="Enter problem tags separated by commas"
              {...register("problemTags", { required: true })}
            />
            <label className="error-label">
              {errors?.problemTags?.type === "required" &&
                "Problem tags are required"}
            </label>
            <label className="error-label">
              {errors?.problemTags?.message}
            </label>
          </div>
          <Button
            variant="dark"
            type="submit"
            disabled={mutation.isLoading}
            className="col-12 mt-4"
            size="lg"
          >
            {mutation.isLoading ? "Please wait..." : "Submit"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
