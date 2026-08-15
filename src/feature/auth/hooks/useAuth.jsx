import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

export const useAuth = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const registerSubmit = (dets) => {
    console.log(dets);
    reset();
  };

  const loginSubmit = (dets) => {
    console.log(dets)
  }

  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    registerSubmit,
    loginSubmit
  };
};
