// import { Button, Checkbox, Label, TextInput } from "../.flowbite-react";

import axios from "axios";
import CustomizedTables from "./Table";
import { useEffect, useState } from "react";
  import { ToastContainer, toast } from 'react-toastify';
function EnquiryForm() {
  let [enquiryList, setEnquiryList] = useState([]);
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    msg: "",
  });
  let saveEnquiry = (e) => {
    // alert("Submitted");
    e.preventDefault();

    // let formData = {
    //   email : e.target.email.value,
    //   name : e.target.name.value,
    //   phone : e.target.phone.value,
    //   msg : e.target.msg.value,
    // }
    axios
      .post("http://localhost:8020/api/website/enquiry/insert", formData)
      .then((res) => {
        console.log(res.data);
        setFormData({
          name: "",
          email: "",
          phone: "",
          msg: "",
        });
      });
      toast.success("Form saved succesfully !");
      getAllEnquiry();
  };
  let getAllEnquiry = (e) => {
    axios
      .get("http://localhost:8020/api/website/enquiry/view")
      .then((res) => {
        return res.data
      }).then((finalData) => {
        if((finalData.status)) {
          setEnquiryList(finalData.enquiryList)
        }
      })
  }
  let getValue = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    let oldData = { ...formData };
    oldData[inputName] = inputValue;
    setFormData(oldData);
  };

  useEffect(() => {
    getAllEnquiry();
  }, [setFormData]);

  return (
    <div>
      <ToastContainer />
      <h1 className="text-[40px] text-center py-3 font-bold">User Enquiry</h1>

      <div className="grid grid-cols-[30%_auto] gap-[40px]">
        <div className="bg-gray-200 p-4 ml-2">
          <h2 className="text-[20px] font-bold">Enquiry Form</h2>
          <form action="" onSubmit={saveEnquiry}>
            <div className="py-3">
              <label htmlFor="name" className="block mb-1 font-medium">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                required
                name="name"
                value={formData.name}
                onChange={getValue}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="py-3">
              <label htmlFor="email" className="block mb-1 font-medium">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
                name="email"
                value={formData.email}
                onChange={getValue}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="py-3">
              <label htmlFor="phone" className="block mb-1 font-medium">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                required
                name="phone"
                value={formData.phone}
                onChange={getValue}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="py-3">
              <label htmlFor="message" className="block mb-1 font-medium">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                required
                rows="4"
                name="msg"
                value={formData.msg}
                onChange={getValue}
                className="w-full p-2 border border-gray-300 rounded"
              ></textarea>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded w-[100%] hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="bg-gray-200 p-4 mr-2">
          <h2 className="text-[20px] font-bold">Enquiry List</h2>
          <CustomizedTables data={enquiryList} getAllEnquiry = {getAllEnquiry}/>
        </div>
      </div>
    </div>
  );
}

export default EnquiryForm;
