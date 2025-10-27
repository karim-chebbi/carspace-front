import React, { useState } from "react";
import {
    Modal,
  Button,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
} from "antd";
import { useDispatch } from "react-redux";
import { addCar } from "../JS/Actions/carActions";

const { TextArea } = Input;

const AddCar = () => {
    const dispatch = useDispatch()

    const [newCar, setNewCar] = useState({})

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

      const handleInputChange = (eOrValue, name) => {
        if (typeof eOrValue === "object" && eOrValue?.target) {
          // For regular Input and TextArea
          const { name, value } = eOrValue.target;
          setNewCar((prev) => ({ ...prev, [name]: value }));
        } else {
          // For InputNumber (value is passed directly)
          setNewCar((prev) => ({ ...prev, [name]: eOrValue }));
        }
      };

       const handleSubmit = () => {
        dispatch(addCar(newCar))
        handleCancel()
       }
  return (
    <>
      <Button className="my-4" type="primary" onClick={showModal}>
        Add new Car
      </Button>
      <Modal
        title="Adding a new Car"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleSubmit}
        onCancel={handleCancel}
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          style={{ maxWidth: 600 }}
        >
          <Form.Item label="Make">
            <Input name="make" placeholder="BMW" onChange={handleInputChange} />
          </Form.Item>

          <Form.Item label="Model">
            <Input name="model" placeholder="X6" onChange={handleInputChange} />
          </Form.Item>

          <Form.Item label="Year">
            <InputNumber
              onChange={(value) => handleInputChange(value, "year")}
            />
          </Form.Item>

          <Form.Item label="Price">
            <InputNumber
              onChange={(value) => handleInputChange(value, "price")}
            />
          </Form.Item>

          <Form.Item label="Description">
            <TextArea
              name="description"
              rows={4}
              onChange={handleInputChange}
            />
          </Form.Item>

          <Form.Item label="Color">
            <Input
              name="color"
              placeholder="Black"
              onChange={handleInputChange}
            />
          </Form.Item>

          <Form.Item label="ImageUrl">
            <Input
              name="picture"
              placeholder="http://google.com/image.png"
              onChange={handleInputChange}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};


export default AddCar;
