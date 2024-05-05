import { FC } from "react";
import { Input, Button, Typography } from "antd";

const Login:FC = () => {
  return (
    <div className="h-screen flex">
      <div className="w-6/12 bg-slate-200 hidden md:flex">
        <div className="m-auto w-96 px-10">
          <Typography>PWY CONSULTING</Typography>
          <Typography className="text-3xl my-6">
            Integrated engineered solutions for complete assets management.
          </Typography>
          <Typography>Managing Assets Made Simple.</Typography>
        </div>
      </div>

      <div className="md:w-6/12 flex m-auto">
        <div className="w-96 m-auto px-10">
          <Typography className="font-semibold text-2xl">Sign Up</Typography>
          <Typography className="text-base mt-2 mb-8">
            Welcome to PWY Consulting assets management platform.
          </Typography>
          <div>
            <Typography className="text-base mb-1">Email Address</Typography>
            <Input size="large" name="name" placeholder="Enter email address" />
          </div>
          <div className="mt-6">
            <Typography className="text-base mb-1">Password</Typography>
            <Input size="large" name="name" placeholder="Enter email address" />
          </div>
          <Typography className="text-right mt-2">Forgot Password?</Typography>
          <div className="mt-6">
            <Button type="primary" size="large" block>
              Link Button
            </Button>
          </div>
          <Typography className="mt-4 text-center text-base">
            Don't have an account?{" "}
            <span className="text-primary font-bold">Sign Up</span>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Login;
