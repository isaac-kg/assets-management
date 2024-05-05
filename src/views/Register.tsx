import React, { useState } from "react";
import CustomModal from "../components/Modal";
import { Button, Input, Typography } from "antd";

const Register = () => {
  const [openModal, setModalOpen] = useState(false);

  return (

    <React.Fragment>
       <Button type="primary" onClick={() => setModalOpen(true)}>Create Users</Button>
      <CustomModal
      title="Create User"
        isOpen={openModal}
        setIsOpen={(value) => setModalOpen(value)}
        content={
          <div>
            <div>
              <Typography className="text-base mb-1">Firstname</Typography>
              <Input
                size="large"
                name="name"
                placeholder="Enter email address"
              />
            </div>
            <div>
              <Typography className="text-base mb-1 mt-3">Lastname</Typography>
              <Input
                size="large"
                name="name"
                placeholder="Enter email address"
              />
            </div>
            <div>
              <Typography className="text-base mb-1 mt-3">
                Email Address
              </Typography>
              <Input
                size="large"
                name="name"
                placeholder="Enter email address"
              />
            </div>
            <div>
              <Typography className="text-base mb-1 mt-3">
                Cell Number
              </Typography>
              <Input
                size="large"
                name="name"
                placeholder="Enter email address"
              />
            </div>
          </div>
        }
      />
    </React.Fragment>
  );
};

export default Register;
