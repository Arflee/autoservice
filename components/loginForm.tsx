export default function LoginForm() {
    //TODO: on submit, check credentials and if correct redirect to admin panel
    return (
      <form className="flex flex-col w-64 mx-auto p-4 rounded-lg shadow-md bg-blue-200 mt-[10%] mb-[10%]">
        <input
          type="text"
          placeholder="Username"
          className="input input-bordered mb-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered mb-4"
        />
        <div className="flex justify-between flex-col mb-4">
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <a href="#" className="text-sm text-blue-500 mx-auto pt-5">
          Forgot password?
        </a>
      </div>
      </form>
    );
  }