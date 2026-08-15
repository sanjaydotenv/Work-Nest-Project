import React from "react";
import { Cloud, ArrowRightToLine } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
  const { register, handleSubmit, errors, loginSubmit, navigate } = useAuth();

  return (
    <div className="h-screen w-full overflow-hidden bg-[#09070F] relative flex items-center justify-center px-3 sm:px-5">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-72 h-72 sm:w-[450px] sm:h-[450px] bg-purple-700/10 blur-3xl rounded-full" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 w-72 h-72 sm:w-[450px] sm:h-[450px] bg-purple-700/10 blur-3xl rounded-full" />

      {/* Decorative Card */}
      <div className="hidden 2xl:block absolute bottom-16 right-16 w-52 h-64 rounded-3xl overflow-hidden border border-white/10 bg-[#14111D]/60 backdrop-blur-xl">
        <img
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop"
          alt="ai"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Login Card */}
      <div
        className="
          relative z-10
          w-full
          max-w-[430px]
          bg-[#15121D]/95
          border border-white/10
          backdrop-blur-xl
          rounded-2xl sm:rounded-3xl
          px-5 py-5
          sm:px-7 sm:py-6
          lg:px-8 lg:py-7
          shadow-2xl
        "
      >
        {/* Logo */}
        <div className="flex flex-col items-center text-center">
          <div
            className="
            w-12 h-12
            sm:w-14 sm:h-14
            rounded-xl sm:rounded-2xl
            bg-purple-600
            flex items-center justify-center
            shadow-lg shadow-purple-500/20
          "
          >
            <Cloud size={25} className="text-white sm:w-7 sm:h-7" />
          </div>

          <h1
            className="
            text-white
            text-2xl
            sm:text-3xl
            font-bold
            mt-3
            sm:mt-4
          "
          >
            work-nest
          </h1>

          <p className="text-gray-400 mt-1 text-sm sm:text-base">
            Sign in to your workspace
          </p>
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-3 mt-6 sm:mt-7">
          <button
            type="button"
            className="
              h-11 sm:h-12
              rounded-xl
              border border-white/10
              bg-white/[0.03]
              hover:bg-white/[0.06]
              active:scale-[0.98]
              transition
              flex items-center justify-center
              text-white
              font-medium
              text-xs sm:text-sm
            "
          >
            GOOGLE
          </button>

          <button
            type="button"
            className="
              h-11 sm:h-12
              rounded-xl
              border border-white/10
              bg-white/[0.03]
              hover:bg-white/[0.06]
              active:scale-[0.98]
              transition
              flex items-center justify-center
              text-white
              font-medium
              text-xs sm:text-sm
            "
          >
            GITHUB
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 my-5 sm:my-6">
          <div className="h-px flex-1 bg-white/10" />

          <span className="text-gray-500 text-[10px] sm:text-xs whitespace-nowrap">
            or continue with email
          </span>

          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(loginSubmit)} className="space-y-4 sm:space-y-5">
          {/* Email */}
          <div>
            <label
              className="
              block
              mb-2
              text-[11px] sm:text-xs
              font-semibold
              tracking-wide
              text-gray-300
              uppercase
            "
            >
              Email Address
            </label>

            <input
              type="email"
              placeholder="name@company.com"
              className="
                w-full
                h-11 sm:h-12
                rounded-xl
                bg-[#09070F]
                border border-white/10
                px-4
                text-sm
                text-white
                outline-none
                transition
                focus:border-purple-500
                focus:ring-1
                focus:ring-purple-500/30
                placeholder:text-gray-500
              "
              {...register("email", {
                required: "Email is Required",
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <label
                className="
                text-[11px] sm:text-xs
                font-semibold
                tracking-wide
                text-gray-300
                uppercase
              "
              >
                Password
              </label>

              <button
                type="button"
                className="
                  text-[11px] sm:text-xs
                  text-purple-300
                  hover:text-purple-200
                  transition
                  whitespace-nowrap
                "
              >
                Forgot password?
              </button>
            </div>

            <input
              type="password"
              placeholder="••••••••"
              className="
                w-full
                h-11 sm:h-12
                rounded-xl
                bg-[#09070F]
                border border-white/10
                px-4
                text-sm
                text-white
                outline-none
                transition
                focus:border-purple-500
                focus:ring-1
                focus:ring-purple-500/30
                placeholder:text-gray-500
              "
               {...register("password", {
              required: "Password is Required",
            })}
            />
           

            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Checkbox */}
          <label className="flex items-center gap-2.5 cursor-pointer select-none">
            <input
              type="checkbox"
              className="w-4 h-4 accent-purple-600 cursor-pointer"
            />

            <span className="text-gray-400 text-xs sm:text-sm">
              Stay signed in
            </span>
          </label>

          {/* Sign In */}
          <button
            type="submit"
            className="
              w-full
              h-11 sm:h-12
              rounded-xl
              bg-purple-600
              hover:bg-purple-500
              active:scale-[0.98]
              transition
              text-white
              font-semibold
              text-sm sm:text-base
              flex items-center justify-center gap-2
              shadow-lg shadow-purple-600/10
            "
          >
            Sign In
            <ArrowRightToLine size={18} />
          </button>
        </form>

        {/* Footer */}
        <div
          className="
          mt-5
          sm:mt-6
          pt-5
          border-t border-white/10
          text-center
        "
        >
          <p className="text-gray-400 text-xs sm:text-sm">
            Don&apos;t have an account?{" "}
            <button
              onClick={() => navigate("/register")}
              type="button"
              className="
                text-purple-300
                font-semibold
                hover:text-purple-200
                transition
              "
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div
        className="
        hidden
        sm:block
        absolute
        bottom-3
        left-0
        right-0
        text-center
        text-gray-500
        text-[10px] sm:text-xs
      "
      >
        <p>© 2024 Synthetix AI. Enterprise Intelligence Platforms.</p>

        <div className="flex items-center justify-center gap-5 mt-1.5">
          <button className="hover:text-gray-300 transition">
            Privacy Policy
          </button>

          <button className="hover:text-gray-300 transition">
            Terms of Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
