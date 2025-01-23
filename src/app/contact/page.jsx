"use client";

import AlertMessage from "@/components/AlertMessage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+55) 83 9 9903-1108",
  },
  {
    icon: <FaEnvelope />,
    title: "E-mail",
    description: "thaalesheenrique@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "João Pessoa, Paraíba",
  },
];

const INIT_FORM_DATA = {
  name: "",
  lastName: "",
  email: "",
  phone: "",
  email: "",
};
const Contact = () => {
  const [formData, setFormData] = useState(INIT_FORM_DATA);
  const [typeAlert, setTypeAlert] = useState(null);
  const [disabledButton, setDisabledButton] = useState(false);

  const closeAlertAfter = (delay) => {
    setTimeout(() => {
      setTypeAlert(null);
    }, delay);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabledButton(true);

    const service_id = "service_da3bwia";
    const template_id = "template_x9wamyr";
    const user_id = "TgOmwARKlRMmiI0gn";

    try {
      const data = {
        service_id,
        template_id,
        user_id,
        template_params: {
          to_name: "Thales",
          name: formData.name,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
      };

      const res = await axios.post(
        `https://api.emailjs.com/api/v1.0/email/send`,
        data
      );
      setFormData(INIT_FORM_DATA);
      setDisabledButton(false);
      setTypeAlert("success");

      closeAlertAfter(3000);
    } catch (error) {
      setTypeAlert("destructive");
      setDisabledButton(false);
      closeAlertAfter(3000);
    }
  };

  const handleChangeForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              action=""
            >
              <AlertMessage variant={typeAlert} />
              <h3 className="text-4xl text-accent">Let`s work together</h3>
              <p className="text-white/60">
                I’d love to hear from you! Whether you have a question, want to
                collaborate, or simply want to say hello, feel free to reach out
                using the form below. I’m always open to new opportunities and
                connections. Let’s start a conversation!
              </p>
              {/*input*/}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="name"
                  value={formData.name}
                  label="Name"
                  onChange={(e) => handleChangeForm(e)}
                  placeholder="Firstname"
                />
                <Input
                  name="lastName"
                  label="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleChangeForm(e)}
                  placeholder="Lastname"
                />
                <Input
                  name="email"
                  label="email"
                  value={formData.email}
                  onChange={handleChangeForm}
                  placeholder="Email address"
                />
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChangeForm}
                  label="phone"
                  placeholder="Phone number"
                />
              </div>

              <Textarea
                className="h-[200px]"
                name="message"
                onChange={handleChangeForm}
                value={formData.message}
                placeholder="Type your message here."
              />

              <Button
                disabled={disabledButton}
                onClick={handleSubmit}
                size="md"
                className="max-w-40"
              >
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex gap-6 items-center">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
