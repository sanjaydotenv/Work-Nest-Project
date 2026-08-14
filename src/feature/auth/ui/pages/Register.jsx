import React from "react";
import { User, Mail, Lock, Sparkles, ShieldCheck } from "lucide-react";

const Register = () => {
  return (
    <div className="h-screen w-full overflow-hidden bg-[#09070F] text-white flex flex-col">
      {/* Main Section */}
      <div className="flex-1 min-h-0 flex flex-col lg:flex-row">
        {/* ================= LEFT SIDE ================= */}
        <div className="relative hidden lg:flex lg:w-[46%] xl:w-1/2 border-r border-white/10 overflow-hidden">
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
            alt="ai-bg"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#08112B]/80 via-[#09070F]/60 to-[#09070F]" />

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-between p-8 xl:p-10 2xl:p-12 w-full h-full">
            {/* Logo */}
            <h1 className="text-2xl xl:text-3xl font-bold tracking-wide">
              Work-Nest
            </h1>

            {/* Bottom Content */}
            <div className="space-y-5 xl:space-y-7">
              {/* Label */}
              <div className="flex items-center gap-2 text-xs xl:text-sm tracking-[0.25em] uppercase text-purple-300">
                <Sparkles size={15} />
                <span>Next-Gen Intelligence</span>
              </div>

              {/* Heading */}
              <div>
                <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold leading-tight max-w-xl">
                  Accelerate your team's intelligence.
                </h2>

                <p className="mt-4 xl:mt-5 text-sm xl:text-base 2xl:text-lg text-gray-300 leading-relaxed max-w-lg">
                  Connect your enterprise data to our specialized AI models and
                  unlock unparalleled strategic insights in seconds.
                </p>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-10 xl:gap-14 pt-3 xl:pt-5">
                <div>
                  <h3 className="text-2xl xl:text-3xl 2xl:text-4xl font-bold">
                    99.9%
                  </h3>

                  <p className="text-gray-400 mt-1 text-xs xl:text-sm">
                    Uptime SLA
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl xl:text-3xl 2xl:text-4xl font-bold">
                    ISO
                  </h3>

                  <p className="text-gray-400 mt-1 text-xs xl:text-sm">
                    27001 Certified
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex-1 min-h-0 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-4">
          <div className="w-full max-w-lg xl:max-w-xl">
            {/* Heading */}
            <div className="mb-5 xl:mb-6">
              <h1 className="text-2xl sm:text-3xl xl:text-4xl font-bold">
                Create your account
              </h1>

              <p className="text-gray-400 mt-2 text-sm xl:text-base">
                Experience the future of collaborative data intelligence.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-3.5 xl:space-y-4">
              {/* Full Name */}
              <div>
                <label className="block mb-1.5 text-xs xl:text-sm font-medium text-gray-300">
                  Full Name
                </label>

                <div
                  className="
                  flex items-center
                  border border-white/10
                  bg-white/[0.03]
                  rounded-xl
                  px-3.5
                  h-11 xl:h-12
                  focus-within:border-purple-400
                  transition
                "
                >
                  <User className="text-gray-500 shrink-0" size={18} />

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="
                      bg-transparent
                      w-full
                      h-full
                      outline-none
                      px-3
                      text-sm
                      text-white
                      placeholder:text-gray-500
                    "
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block mb-1.5 text-xs xl:text-sm font-medium text-gray-300">
                  Email Address
                </label>

                <div
                  className="
                  flex items-center
                  border border-white/10
                  bg-white/[0.03]
                  rounded-xl
                  px-3.5
                  h-11 xl:h-12
                  focus-within:border-purple-400
                  transition
                "
                >
                  <Mail className="text-gray-500 shrink-0" size={18} />

                  <input
                    type="email"
                    placeholder="name@company.com"
                    className="
                      bg-transparent
                      w-full
                      h-full
                      outline-none
                      px-3
                      text-sm
                      text-white
                      placeholder:text-gray-500
                    "
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block mb-1.5 text-xs xl:text-sm font-medium text-gray-300">
                  Password
                </label>

                <div
                  className="
                  flex items-center
                  border border-white/10
                  bg-white/[0.03]
                  rounded-xl
                  px-3.5
                  h-11 xl:h-12
                  focus-within:border-purple-400
                  transition
                "
                >
                  <Lock className="text-gray-500 shrink-0" size={18} />

                  <input
                    type="password"
                    placeholder="••••••••"
                    className="
                      bg-transparent
                      w-full
                      h-full
                      outline-none
                      px-3
                      text-sm
                      text-white
                      placeholder:text-gray-500
                    "
                  />
                </div>

                {/* Password Strength */}
                <div className="flex gap-1.5 mt-2">
                  <div className="h-1 flex-1 rounded-full bg-purple-400" />
                  <div className="h-1 flex-1 rounded-full bg-purple-400" />
                  <div className="h-1 flex-1 rounded-full bg-white/10" />
                  <div className="h-1 flex-1 rounded-full bg-white/10" />
                </div>

                <p className="text-xs text-purple-300 mt-1">Strong password</p>
              </div>

              {/* Terms */}
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  className="
                    mt-0.5
                    w-4 h-4
                    rounded
                    border border-white/20
                    bg-transparent
                    accent-purple-500
                    shrink-0
                  "
                />

                <span className="text-gray-400 text-xs leading-relaxed">
                  I agree to the{" "}
                  <span className="text-purple-300 hover:text-purple-200 cursor-pointer">
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span className="text-purple-300 hover:text-purple-200 cursor-pointer">
                    Privacy Policy
                  </span>
                  .
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="
                  w-full
                  h-11 xl:h-12
                  rounded-xl
                  bg-gradient-to-r
                  from-purple-600
                  to-purple-300
                  text-black
                  font-semibold
                  text-sm xl:text-base
                  hover:opacity-90
                  active:scale-[0.99]
                  transition
                "
              >
                Create Account
              </button>

              {/* Divider */}
              <div className="flex items-center gap-3 py-1">
                <div className="h-px flex-1 bg-white/10" />

                <p className="text-[10px] xl:text-xs text-gray-500 whitespace-nowrap">
                  OR CONTINUE WITH
                </p>

                <div className="h-px flex-1 bg-white/10" />
              </div>

              {/* Social Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="
                    h-11 xl:h-12
                    rounded-xl
                    border border-white/10
                    bg-white/[0.02]
                    hover:bg-white/[0.05]
                    transition
                    flex items-center
                    justify-center
                    gap-2
                  "
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                    alt="google"
                    className="w-4 h-4"
                  />

                  <span className="text-sm">Google</span>
                </button>

                <button
                  type="button"
                  className="
                    h-11 xl:h-12
                    rounded-xl
                    border border-white/10
                    bg-white/[0.02]
                    hover:bg-white/[0.05]
                    transition
                    flex items-center
                    justify-center
                    gap-2
                  "
                >
                  <ShieldCheck size={18} />

                  <span className="text-sm">SSO</span>
                </button>
              </div>

              {/* Login */}
              <p className="text-center text-gray-400 pt-2 text-xs xl:text-sm">
                Already have an account?{" "}
                <button
                  type="button"
                  className="
                    text-purple-300
                    font-semibold
                    hover:text-purple-200
                    transition
                  "
                >
                  Log In
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <footer
        className="
        shrink-0
        border-t border-white/10
        px-4 sm:px-6 lg:px-8
        py-3
        flex
        flex-col
        lg:flex-row
        items-center
        justify-between
        gap-2
        text-[10px] sm:text-xs
        text-gray-400
      "
      >
        <h2 className="hidden lg:block text-lg font-bold text-white">
          work-nest
        </h2>

        <div className="flex items-center gap-4 sm:gap-6">
          <p className="hover:text-white cursor-pointer">Privacy Policy</p>

          <p className="hover:text-white cursor-pointer">Terms of Service</p>

          <p className="hidden sm:block hover:text-white cursor-pointer">
            Security
          </p>

          <p className="hidden sm:block hover:text-white cursor-pointer">
            System Status
          </p>
        </div>

        <p className="hidden xl:block">
          © 2024 work-nest. Enterprise Intelligence Platforms.
        </p>
      </footer>
    </div>
  );
};

export default Register;
