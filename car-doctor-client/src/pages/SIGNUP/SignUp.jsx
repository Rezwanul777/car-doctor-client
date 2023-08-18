import { Link } from "react-router-dom";

import img from "../../assets/images/login/login.svg";

const SignUp = () => {
    
    const handleSignUp=(e)=>{
        e.preventDefault()
    }


    return (
        <div>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col lg:flex-row">
					<div className="w-1/2  mr-10">
						<img src={img} alt="img" />
					</div>
					<div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
						<div className="card-body">
							<h1 className="text-3xl font-bold">Sign Up</h1>
							<form onSubmit={handleSignUp}>
                            <div className="form-control">
								<label className="label">
									<span className="label-text">Name</span>
								</label>
								<input
									type="text"
									placeholder="name"
									className="input input-bordered"
                                    name="name"
								/>
							</div>
                            <div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									type="text"
									placeholder="email"
									className="input input-bordered"
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input
									type="text"
									placeholder="password"
									className="input input-bordered"
								/>
								<label className="label">
									<a href="#" className="label-text-alt link link-hover">
										Forgot password?
									</a>
								</label>
							</div>
							<div className="form-control mt-6">
								<input
									className="btn btn-primary"
									type="submit"
									value="Sign Up"
								/>
							</div>
                            </form>
                            <p className="py-3">Alraedy have account ? <Link className="text-orange-500" to='/login'>Login</Link></p>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
};

export default SignUp;