import React, { useState } from "react";
import CustomModal from "../components/Modal";
import { Button} from "antd";
import CustomInput from "../components/Input";

const Register = () => {
  const [openModal, setModalOpen] = useState(false);

  return (
    <React.Fragment>
      <Button type="primary" onClick={() => {setModalOpen(true); console.log("hello wordll!")}}>
        Create Users
      </Button>
      <CustomModal
        title="Create User"
        isOpen={openModal}
        setIsOpen={(value) => setModalOpen(value)}
        content={
          <div>
            <div className="mb-1">
              <CustomInput
                label="Firstname"
                name="firstName"
                placeholder="Enter Firstname"
                onChange={(e) => console.log(e.target.value)}
              />
            </div>
            <div className="mt-4 mb-1">
              <CustomInput
                label="Lastname"
                name="lastName"
                placeholder="Enter Lastname"
                onChange={(e) => console.log(e.target.value)}
              />
            </div>
            <div  className="mt-4 mb-1">
              <CustomInput
                label="Email Address"
                name="email"
                placeholder="Enter email address"
                onChange={(e) => console.log(e.target.value)}
              />
            </div>
            <div  className="mt-4 mb-1">
              <CustomInput
                label="Cell Number"
                name="cellNumber"
                placeholder="Enter Cell Number"
                onChange={(e) => console.log(e.target.value)}
              />
            </div>
          </div>
        }
      />
    </React.Fragment>
  );
};

export default Register;
