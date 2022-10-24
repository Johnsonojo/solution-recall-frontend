import React from "react";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LandingNavbar from "../../components/LandingNavbar";
import authAPI from "../../redux/api/authAPI";
import "./signup.scss";

const SignupPage = () => {
  const {
    register,
    formState: { errors, isDirty, isValid },
    handleSubmit,
  } = useForm({ mode: "onChange" });

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation(authAPI.signupUser, {
    onSuccess: (data) => {
      if (!data.error) {
        queryClient.setQueryData("registeredUserDetails", () => data.data);
        toast.success(data?.message);
        navigate("/login");
      }
    },
    onError: (data) => {
      toast.error(data?.response?.data?.message);
    },
  });
  const onSubmit = (data) => {
    const userDetails = data;
    mutation.mutate({ userDetails });
  };

  const passwordTest = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  const emailTest = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  return (
    <div>
      <LandingNavbar />
      <div className="col-sm-12 col-md-6 col-lg-4 container">
        <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="mb-4">Register</h3>
          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control"
              id="exampleInputFirstName"
              placeholder="First name"
              {...register("firstName", { required: true, maxLength: 20 })}
            />
            <label className="error-label">
              {errors.firstName?.type === "required" &&
                "First name is required"}
            </label>
          </div>

          <div className="form-group mb-4">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail"
              aria-describedby="emailHelp"
              placeholder="Email"
              {...register("email", {
                required: true,
                validate: (value) =>
                  emailTest.test(value) || "Invalid email format",
              })}
            />
            <label className="error-label">
              {errors.email?.type === "required" && "Email is required"}
            </label>
            <label className="error-label">{errors?.email?.message}</label>
          </div>

          <div className="form-group mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword"
              placeholder="Password"
              {...register("password", {
                required: true,
                validate: (value) =>
                  passwordTest.test(value) ||
                  "Password must have at least (1) uppercase letter, (1) lowercase letter, (1) number, and minimum of (8) characters long",
              })}
            />
            <label className="error-label">
              {errors?.password?.type === "required" && "Password is required"}
            </label>
            <label className="error-label">{errors?.password?.message}</label>
          </div>
          <Button
            variant="dark"
            type="submit"
            disabled={!isDirty || !isValid}
            className="col-12 mt-4"
            size="lg"
          >
            {mutation.isLoading ? "Please wait..." : "Register"}
          </Button>
          <div className="mt-4">
            <p>
              Already have an account yet?{" "}
              <Link className="signup" to="/login">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
