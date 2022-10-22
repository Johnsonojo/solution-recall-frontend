import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Controller, useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import MainNavbar from "../../../components/MainNavbar";
import TipTap from "../../../components/TipTapEditor";
import postAPI from "../../../redux/api/postAPI";
import queryKeys from "../../../redux/api/queryKeys";

const EditPost = () => {
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onChange" });

  const [onePostDetails, setOnePostDetails] = useState({});

  const { postId } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const singlePostDetail = useQuery(
    [queryKeys.getOnePost, postId],
    async () => {
      const data = await postAPI.getOnePost(postId);
      queryClient.setQueryData("onePostDetails", () => data?.data);
      setOnePostDetails(data?.data);
      return data?.data;
    }
  );

  const { isLoading } = singlePostDetail;

  const mutation = useMutation(postAPI.updatePost, {
    onSuccess: (response) => {
      if (!response.error) {
        queryClient.setQueryData("createdPostDetails", () => response?.data);
        toast.success(response?.message);
        navigate("/all-posts");
      }
    },
    onError: (data) => {
      toast.error(data?.response?.data?.message);
    },
  });

  const onSubmit = (data) => {
    const postDetails = data;
    mutation.mutate({ postId, postDetails });
  };

  return (
    <div>
      <MainNavbar />
      <div className="col-sm-12 col-md-6 col-lg-5 container">
        {isLoading && <div>Loading...</div>}

        <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="mb-4">Edit problem details</h3>

          <div className="form-group mb-4">
            <label className="form-label">Problem title</label>
            <input
              type="text"
              defaultValue={onePostDetails?.problemTitle}
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
            <label className="form-label">Problem description</label>

            <input
              type="text"
              defaultValue={onePostDetails?.problemDescription}
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
            <label className="form-label">Problem solution</label>

            <div className="editor-wrapper">
              {!isLoading && (
                <Controller
                  name="problemSolution"
                  control={control}
                  render={({ field: { onChange } }) => (
                    <TipTap
                      onChange={onChange}
                      content={onePostDetails?.problemSolution}
                    />
                  )}
                />
              )}
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
            disabled={mutation.isLoading}
            className="col-12 mt-4"
            size="lg"
          >
            {mutation.isLoading ? "Please wait..." : "Update"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
