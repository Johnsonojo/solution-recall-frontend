import { useState } from "react";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import MainNavbar from "../../../components/MainNavbar";
import postAPI from "../../../redux/api/postAPI";
import queryKeys from "../../../redux/api/queryKeys";

const EditPost = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [onePostDetails, setOnePostDetails] = useState({});
  const { postId } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  useQuery([queryKeys.getOnePost, postId], async () => {
    const data = await postAPI.getOnePost(postId);
    queryClient.setQueryData("onePostDetails", () => data?.data);
    setOnePostDetails(data?.data);
    return data?.data;
  });

  const mutation = useMutation(postAPI.updatePost, {
    onSuccess: (response) => {
      console.log("response", response);
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
    console.log("data :>> ", data);
    const postDetails = data;
    postDetails.tags = postDetails.problemTags.split(",");
    mutation.mutate({ postId, postDetails });
  };

  return (
    <div>
      <MainNavbar />
      <div className="col-md-8 container">
        <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group mb-4">
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
            <input
              type="text"
              defaultValue={onePostDetails?.problemSolution}
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
              defaultValue={
                onePostDetails?.tags
                  ? onePostDetails?.tags.map((tag) => `${tag.name}`)
                  : ""
              }
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

export default EditPost;
