import React from "react";
import Button from "react-bootstrap/Button";
import { Controller, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import MainNavbar from "../../../components/MainNavbar";
import TipTap from "../../../components/TipTapEditor";
import postAPI from "../../../redux/api/postAPI";
import "./style.scss";

const CreatePost = () => {
  const {
    register,
    control,
    formState: { errors, isDirty, isValid },
    handleSubmit,
  } = useForm({ mode: "onChange" });

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
    mutation.mutate({ postDetails });
  };

  return (
    <div>
      <MainNavbar />
      <div className="col-sm-12 col-md-6 col-lg-5 container">
        <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="mb-4">Add problem details</h3>
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
            <div className="editor-wrapper">
              <Controller
                name="problemSolution"
                control={control}
                render={({ field: { onChange } }) => (
                  <TipTap onChange={onChange} content="" />
                )}
                defaultValue=""
                rules={{ required: true }}
              />
            </div>

            <label className="error-label">
              {errors?.problemSolution?.type === "required" &&
                "Problem solution is required"}
            </label>
            <label className="error-label">
              {errors?.problemSolution?.message}
            </label>
          </div>

          <Button
            variant="dark"
            type="submit"
            disabled={!isDirty || !isValid}
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
