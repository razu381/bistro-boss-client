import { useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

function Login() {
  let captchaRef = useRef(null);
  let [isDisabled, setDisabled] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let email = e.target.email.value;
    let pass = e.target.pass.value;
    console.log(email, pass);
  }

  function handleCaptcha() {
    let captchaData = captchaRef.current.value;
    console.log(captchaData);
    if (validateCaptcha(captchaData) == true) {
      setDisabled(false);
    } else {
      alert("Captcha doesn't match, please retry");
      setDisabled(true);
    }
  }

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="pass"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Type this captcha</span>
              </label>
              <div>
                <LoadCanvasTemplate />
              </div>

              <input
                ref={captchaRef}
                type="text"
                name="captcha"
                placeholder="captcha"
                className="input input-bordered"
                required
              />
              <button
                type="button"
                onClick={handleCaptcha}
                className="mt-3 btn btn-xs border-black text-black"
              >
                Validate
              </button>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" disabled={isDisabled}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
