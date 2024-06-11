import {useState} from "react";
import {useNavigate} from "react-router-dom";
const Login = () => {
  const [form, setForm] = useState({username: "", password: ""});
  const navigate = useNavigate();

  const handleChange = event => {
    const {name, value} = event.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleLogin = event => {
    event.preventDefault();
    console.log("Form submitted", form);
    navigate("/products");
  };

  return (
    <main className="h-full w-full flex flex-col items-center justify-center gap-8">
      <h2 className="font-medium text-xl mt-9">Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <label className="input input-bordered flex items-center gap-2">
          Username
          <input
            type="text"
            className="grow"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Password
          <input
            type="password"
            className="grow"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="btn">
          Login
        </button>
      </form>
    </main>
  );
};

export default Login;
