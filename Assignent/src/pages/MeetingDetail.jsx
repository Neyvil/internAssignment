import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Clock,
  Video,
  ArrowLeft,
  Earth,
  Calendar as Calendar1,
  Check,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

import img1 from "../assets/Creuto.png";
import img2 from "../assets/creutoLogo.png";
import img3 from "../assets/india.jpeg";

const MeetingDetail = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    projectBrief: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [addGuests, setAddGuests] = useState(false);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) newErrors.phone = "Contact number is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.projectBrief.trim())
      newErrors.projectBrief = "Project brief is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  const descriptionContent = (
    <div className="space-y-4">
      <p className="text-gray-800">
        Book a one-on-one session with our experts at Creuto to dive deep into
        your project requirements, goals, and challenges.
      </p>

      <p className="text-gray-800">
        We'll provide tailored insights and recommendations to help you harness
        the power of cutting-edge technology for your business.
      </p>

      <div className="space-y-3">
        <p className="font-medium text-gray-900">
          In a one-on-one consultation, our team will:
        </p>

        <ol className="space-y-2 list-none">
          {[
            "Understand your unique project requirements.",
            "Identify your key goals and potential roadblocks.",
            "Offer tailored insights and recommendations.",
            "Help you choose the best technology solutions.",
          ].map((item, index) => (
            <li key={index} className="flex gap-3">
              <span className="font-medium text-gray-900">{index + 1}.</span>
              <span className="text-gray-800">{item}</span>
            </li>
          ))}
        </ol>
      </div>

      <p className="font-medium text-gray-900">
        Schedule Your Free Consultation Today
      </p>
    </div>
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <Card className="md:w-full h-[100vh] md:h-auto md:max-w-5xl mx-auto my-4 overflow-y-auto">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex flex-col h-full max-h-[95vh]  relative p-6 md:border-r">
          <button
            className="w-10 h-10 rounded-full flex justify-center items-center border border-slate-500 hover:text-white hover:bg-blue-600 transition-colors duration-200 mb-6"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <div className="flex flex-col overflow-y-auto">
            <div className="mb-4 flex flex-col items-center">
              <img src={img1} alt="crueto" className="h-8" />
              <div className="border-t-2 bg-slate-200 w-full my-4" />
            </div>

            <div className="mb-6">
              <img src={img2} alt="logo" className="h-12 mb-2 rounded-full" />
              <p className="text-gray-600">Creuto</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Book Your Project Expert Session with Creuto Today
              </h2>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <Clock className="h-5 w-5 flex-shrink-0" />
                  <span>30 min</span>
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                  <Video className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm">
                    Web conferencing details provided upon confirmation.
                  </span>
                </div>

                <div className="flex items-center gap-3 text-gray-600">
                  <Calendar1 className="h-5 w-5 flex-shrink-0" />
                  <span>7:00am - 7:30am, Friday, January 17, 2025</span>
                </div>

                <div className="flex items-center gap-3 text-gray-600">
                  <Earth className="h-5 w-5 flex-shrink-0" />
                  <span>Indian Standard Time</span>
                </div>
              </div>
              <div className="md:hidden">
                <button
                  onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
                  className="flex items-center justify-between w-full py-2 text-left text-gray-900 font-medium"
                >
                  <span>Description</span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 transition-transform duration-200",
                      isDescriptionOpen ? "transform rotate-180" : ""
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "transition-all duration-200 overflow-hidden",
                    isDescriptionOpen
                      ? "max-h-[1000px] opacity-100"
                      : "max-h-0 opacity-0"
                  )}
                >
                  {descriptionContent}
                </div>
              </div>
              <div className="hidden md:block">{descriptionContent}</div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t hidden md:flex justify-between text-sm text-blue-600">
            <button className="hover:underline">Cookie settings</button>
            <button className="hover:underline">Report abuse</button>
          </div>
        </div>
        {!isSubmitted ? (
          <div className="p-6">
            <div className="max-w-xl mx-auto flex-1 md:pr-8">
              <h3 className="text-xl font-semibold mb-6">Enter Details</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <FormField
                    label="Name"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    error={errors.name}
                    required
                  />

                  <FormField
                    label="Email"
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    error={errors.email}
                    required
                  />

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium text-gray-900"
                      >
                        Contact No/ WhatsApp No{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <button
                        type="button"
                        onClick={() => setAddGuests(!addGuests)}
                        className="text-sm text-blue-600 hover:text-blue-700"
                      >
                        Add Guests
                      </button>
                    </div>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50">
                        <img src={img3} alt="India flag" className="h-4 w-6" />
                      </span>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={cn(
                          "block w-full rounded-r-md border px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500",
                          errors.phone ? "border-red-500" : "border-gray-300"
                        )}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <FormField
                    label="Location"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    error={errors.location}
                    required
                  />

                  <div>
                    <label
                      htmlFor="projectBrief"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Project Brief <span className="text-red-500">*</span>
                    </label>
                    <p className="text-sm text-gray-500 mb-2">
                      Please be as detailed as possible, as this will help us
                      align the best-suited subject matter expert for your
                      consultation
                    </p>
                    <textarea
                      id="projectBrief"
                      name="projectBrief"
                      rows={4}
                      value={formData.projectBrief}
                      onChange={handleInputChange}
                      className={cn(
                        "block w-full rounded-md border px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500",
                        errors.projectBrief
                          ? "border-red-500"
                          : "border-gray-300"
                      )}
                    />
                    {errors.projectBrief && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.projectBrief}
                      </p>
                    )}
                  </div>
                </div>

                <div className="text-sm text-gray-600">
                  By proceeding, you confirm that you have read and agree to
                  Calendly's{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Terms of Use
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Privacy Notice
                  </a>
                  .
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  Schedule Event
                </button>
              </form>
            </div>
            <div className="mt-6 pt-4 border-t flex md:hidden justify-between text-sm text-blue-600">
              <button className="hover:underline">Cookie settings</button>
              <button className="hover:underline">Report abuse</button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[50vh]">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <Check className="w-8 h-8 text-white" />
            </div>
            <p className="text-lg font-medium text-gray-900">
              Booking Confirmed!
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};

const FormField = ({ label, id, error, required, ...props }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-900">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      id={id}
      className={cn(
        "mt-1 block w-full rounded-md border px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500",
        error ? "border-red-500" : "border-gray-300"
      )}
      {...props}
    />
    {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
  </div>
);

export default MeetingDetail;
