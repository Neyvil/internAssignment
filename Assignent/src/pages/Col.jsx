import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Clock, Video, ArrowLeft, Earth, Calendar as Calendar1, Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const MeetingDetail = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    projectBrief: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [addGuests, setAddGuests] = useState(false);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  // ... other functions remain the same ...

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
          <Check className="w-8 h-8 text-white" />
        </div>
        <p className="text-lg font-medium text-gray-900">Booking Confirmed!</p>
      </div>
    );
  }

  const descriptionContent = (
    <div className="space-y-4">
      <p className="text-gray-800">
        Book a one-on-one session with our experts at Creuto to dive
        deep into your project requirements, goals, and challenges.
      </p>

      <p className="text-gray-800">
        We'll provide tailored insights and recommendations to help
        you harness the power of cutting-edge technology for your
        business.
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
            "Help you choose the best technology solutions."
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

  return (
    <div className="container mx-auto px-4 my-8">
      <Card className="md:w-full md:max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2">
          {/* Left Column */}
          <div className="relative p-6 md:border-r">
            <button className="w-10 h-10 rounded-full flex justify-center items-center border border-slate-500 hover:text-white hover:bg-blue-600 transition-colors duration-200 mb-6">
              <ArrowLeft className="w-5 h-5" />
            </button>

            {/* Main Content */}
            <div className="space-y-6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 pr-4 max-h-[calc(100vh-16rem)]">
              <div className="flex flex-col items-center space-y-4">
                <img src={img1} alt="crueto" className="h-8" />
                <div className="border-t-2 bg-slate-200 w-full" />
              </div>

              <div className="space-y-2">
                <img src={img2} alt="logo" className="h-12 rounded-full" />
                <p className="text-gray-600">Creuto</p>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Book Your Project Expert Session with Creuto Today
                </h2>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="h-5 w-5 flex-shrink-0" />
                    <span>30 min</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-600">
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

                {/* Description Section - Mobile Dropdown */}
                <div className="md:hidden">
                  <button
                    onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
                    className="flex items-center justify-between w-full py-2 text-left text-gray-900 font-medium"
                  >
                    <span>Description</span>
                    <ChevronDown className={cn(
                      "w-5 h-5 transition-transform duration-200",
                      isDescriptionOpen ? "transform rotate-180" : ""
                    )} />
                  </button>
                  <div className={cn(
                    "transition-all duration-200 overflow-hidden",
                    isDescriptionOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                  )}>
                    {descriptionContent}
                  </div>
                </div>

                {/* Description Section - Desktop */}
                <div className="hidden md:block">
                  {descriptionContent}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t flex justify-between text-sm text-blue-600">
              <button className="hover:underline">Cookie settings</button>
              <button className="hover:underline">Report abuse</button>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="p-6">
            <div className="max-w-xl mx-auto">
              <h3 className="text-xl font-semibold mb-6">Enter Details</h3>
              {/* Form content remains the same */}
              {/* ... */}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MeetingDetail;