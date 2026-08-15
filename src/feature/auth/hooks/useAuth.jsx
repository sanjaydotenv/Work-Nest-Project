import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { employeeLogin } from "../state/auth/authAction";

export const useAuth = () => {
  const navigate = useNavigate();
  const dispath = useDispatch();
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
    dispath(employeeLogin(dets));
  };

  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    registerSubmit,
    loginSubmit,
  };
};
