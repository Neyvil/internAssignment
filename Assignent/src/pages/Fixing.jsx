import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import React, { useState } from "react";
import { Clock, Video, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/Creuto.png";
import img2 from "../assets/creutoLogo.png";

const timeSlots = [
  "6:00am",
  "6:30am",
  "7:00am",
  "7:30am",
  "8:00am",
  "8:30am",
  "9:00am",
  "9:30am",
  "10:00am",
  "10:30am",
  "11:00am",
  "11:30am",
  "12:00pm",
  "12:30pm",
  "1:00pm",
  "1:30pm",
  "2:00pm",
  "2:30pm",
  "3:00pm",
  "3:30pm",
  "4:00pm",
  "4:30pm",
  "5:00pm",
  "5:30pm",
  "6:00pm",
  "6:30pm",
  "7:00pm",
  "7:30pm",
  "8:00pm",
  "8:30pm",
  "9:00pm",
  "9:30pm",
  "10:00pm",
  "10:30pm",
  "11:00pm",
];

const Fixing = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const isDateDisabled = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today || date.getDay() === 0;
  };

  const handleDateSelect = (date) => {
    if (selectedDate?.toDateString() === date?.toDateString()) {
      setSelectedDate(null);
      setSelectedTime(null);
    } else {
      setSelectedDate(date);
      setSelectedTime(null);
    }
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  return (
    <Card className="md:w-full h-[100vh]  md:h-auto md:max-w-5xl mx-auto my-4 overflow-y-auto scrollbar-hide">
      <div
        className={` grid place-items-center ${
          selectedDate ? "md:grid-cols-3" : "md:grid-cols-2"
        } gap-6`}
      >
        <div className="flex flex-col h-full max-h-[95vh] overflow-y-auto relative p-6 md:border-r ">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full flex justify-center items-center border border-slate-500 hover:text-white hover:bg-blue-600 transition-colors duration-200"
          >
            <ArrowLeft />
          </button>
          
          <div className="flex flex-col overflow-y-auto">
            <div className="mb-4 flex flex-col items-center">
              <img src={img1} alt="crueto" className="h-8" />
              <div className="border-t-2 bg-slate-400 w-full my-4" />
            </div>

            <div className="mb-6">
              <img src={img2} alt="logo" className="h-12 mb-2 rounded-full" />
              <p className="text-gray-600">Creuto</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                Book Your Project Expert Session with Creuto Today
              </h2>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="h-5 w-5" />
                  <span>30 min</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Video className="h-6 w-6" />
                  <span>
                    Web conferencing details provided upon confirmation.
                  </span>
                </div>

                <div className=" pr-2 space-y-2">
                  <p className="text-[#03080C]">
                    Book a one-on-one session with our experts at Creuto to dive
                    deep into your project requirements, goals, and challenges.
                  </p>

                  <p className="text-[#03080C]">
                    We'll provide tailored insights and recommendations to help
                    you harness the power of cutting-edge technology for your
                    business.
                  </p>

                  <p className="text-[#03080C] font-medium">
                    In a one-on-one consultation, our team will:
                  </p>

                  <ol className="list-none space-y-2">
                    <li className="flex gap-2">
                      <span className="text-[#03080C] font-medium">1.</span>
                      <span className="text-[#03080C]">
                        Understand your unique project requirements.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#03080C] font-medium">2.</span>
                      <span className="text-[#03080C]">
                        Identify your key goals and potential roadblocks.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#03080C] font-medium">3.</span>
                      <span className="text-[#03080C]">
                        Offer tailored insights and recommendations.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#03080C] font-medium">4.</span>
                      <span className="text-[#03080C]">
                        Help you choose the best technology solutions.
                      </span>
                    </li>
                  </ol>

                  <p className="text-[#03080C] font-medium mt-4">
                    Schedule Your Free Consultation Today
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-4 flex justify-between px-2 text-sm text-blue-600 py-4 bg-white">
            <button className="hover:underline">Cookie settings</button>
          </div>
        </div>
        <div className="p-6">
          <div className="flex flex-col max-w-xl mx-auto ">
            <h3 className="text-xl font-semibold mb-4">Select a Date & Time</h3>

            <div className="mb-6">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={handleDateSelect}
                disabled={isDateDisabled}
                className="rounded-md text-4xl gap-y-2 p-2 flex justify-center items-center"
                classNames={{
                  day_selected:
                    "bg-blue-600 text-white hover:bg-blue-700 hover:text-white",
                  day_today: "bg-blue-500 text-white",
                  day: "h-10 w-10 p-0 font-normal aria-selected:opacity-100 hover:bg-gray-100 rounded-full",
                  day_disabled:
                    "text-gray-300 cursor-not-allowed hover:bg-transparent",
                  day_range_middle: "aria-selected:bg-blue-50",
                  day_hidden: "invisible",
                  row: "flex w-full mt-2",
                  head_row: "flex",
                  head_cell:
                    "text-gray-500 rounded-md w-10 font-normal text-sm",
                  cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-blue-50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                  nav_button:
                    "border border-gray-300 hover:bg-gray-100 rounded-full",
                  nav_button_previous: "absolute left-1",
                  nav_button_next: "absolute right-1",
                  caption:
                    "flex justify-center pt-1 relative items-center px-10",
                  caption_label: "text-sm font-medium",
                  table: "w-full border-collapse space-y-1",
                }}
              />
            </div>

            <div className="mt-6">
              <label className="text-xl font-bold text-gray-600">
                Time Zone
              </label>
              <div className="flex items-center gap-2 text-sm">
                <span>🌍</span>
                <span>India Standard Time (11:30pm)</span>
              </div>
            </div>
          </div>
        </div>{" "}
        {selectedDate && (
          <div className="flex flex-col w-full p-4 md:p-0">
            <h3 className="text-xl font-semibold mb-4">
              {selectedDate.toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </h3>
            <div className="h-[75vh] overflow-y-auto gap-x-2 space-y-2">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => handleTimeClick(time)}
                  className={cn(
                    "flex w-full transition-all duration-300 ease-in-out",
                    selectedTime === time
                      ? "rounded-l shadow-md"
                      : "rounded shadow-sm",
                    "border hover:bg-gray-50"
                  )}
                >
                  <span
                    className={cn(
                      "py-3 px-4 transition-all duration-300 ease-in-out",
                      selectedTime === time ? "w-1/2" : "w-full",
                      "text-blue-600 text-center"
                    )}
                  >
                    {time}
                  </span>
                  {selectedTime === time && (
                    <button
                      onClick={() => {
                        navigate("/meeting");
                      }}
                      className="w-1/2 ml-2  bg-blue-600 text-white font-medium py-3 px-4 rounded-r
                    transition-all duration-300 ease-in-out
                    hover:bg-blue-700 transform hover:shadow-lg"
                    >
                      Next
                    </button>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default Fixing;
