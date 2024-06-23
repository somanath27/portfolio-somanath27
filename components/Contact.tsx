import { PhoneIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onChangeContact = (e: any) => {
    const { name, value } = e.target;
    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(contact);
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        toast.success("Message sent successfully!");
        setContact({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    });
  };

  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center w-[80%] mx-auto">
        <div>
          <p className="heading__mini">Get in Touch</p>
          <h1 className="heading__primary">
            Lets make your <span className="text-yellow-400">Brand</span>{" "}
            brilliant
          </h1>
          <p className="text-[15px] text-white mt-[1rem] opacity-75">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            illum, adipisci explicabo blanditiis voluptate soluta! Provident,
            libero, quaerat incidunt qui blanditiis quas mollitia iure dolorem
            nulla assumenda, doloremque officiis quidem.
          </p>
          <h1 className="mt-[2rem] mb-[2rem] text-[25px] text-yellow-300 underline font-bold font-mono">
            +91-7683844093
          </h1>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center">
            <input
              value={contact.name}
              name="name"
              type="text"
              placeholder="Name"
              className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4 "
              onChange={onChangeContact}
            />
            <input
              value={contact.email}
              name="email"
              type="email"
              placeholder="Email"
              className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4 "
              onChange={onChangeContact}
            />
          </div>
          <input
            value={contact.subject}
            name="subject"
            type="text"
            placeholder="Subject"
            className="py-[0.7rem] mt-[1.5rem] mb-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4"
            onChange={onChangeContact}
          />
          <textarea
            value={contact.message}
            name="message"
            className="py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4"
            placeholder="Message"
            rows={4}
            onChange={onChangeContact}
          />
          <button
            className="py-[0.7rem] mb-[1.5rem]
           w-full outline-none text-white bg-blue-700
            hover:bg-blue-800 rounded-md px-4"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
