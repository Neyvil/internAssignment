import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play } from "lucide-react";
import img from "../assets/creutoLogo.png";
import { useNavigate } from "react-router-dom";


const Homepage = () => {
  const navigate = useNavigate();
  
  return (
    <Card className="md:w-full h-[100vh] shadow-xl  md:h-auto md:max-w-5xl mx-auto my-4 overflow-y-auto scrollbar-hide">
      <CardHeader className="flex flex-col items-center gap-7">
        <CardTitle className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 flex items-center justify-center">
          <img src={img} alt="Logo" className=" rounded-full w-16" />
          </div>
          <p className="text-gray-500 text-lg font-bold">Creuto</p>
        </CardTitle>
        <CardDescription className="flex justify-center items-center">
          <div className="w-[75%] md:w-[35%] px-4">
            <p className="text-center text-gray-600 leading-relaxed">
              Welcome to Creuto's Calendly page! We're here to discuss how our 
              cutting-edge technology solutions can transform your business. 
              Schedule a meeting using the calendar below and let's make your 
              digital aspirations a reality together!
            </p>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex md:justify-start justify-center  md:ml-10">
        <div className=" md:w-[40%] hover:bg-slate-300">
          <button className="w-full" onClick={() => navigate("/calenderPage")}>
            <div className="border-t-2 p-4  group  transition-colors duration-300">
              <div className="flex items-center gap-6 md:gap-5">
                <div className="flex-shrink-0">
                  <div className="rounded-full border-slate-400 border-2 w-8 h-8 bg-[#0099FF]"></div>
                </div>
                <div className="md:h-12 md:w-56">
                  <h3 className="text-base text-left font-bold text-[#0A2540]">
                    Book Your Project Expert Session with Creuto Today
                  </h3>
                </div>
                <div className="flex-shrink-0 text-gray-400 cursor-pointer" >
                  <Play color="black" fill="black" className="w-5 h-5" />
                </div>
              </div>
              <p className=" text-sm text-left p-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus minus explicabo fugiat ratione nam perferendis laborum suscipit ab mollitia, adipisci laudantium exercitationem consequatur culpa hic quam voluptatum dignissimos id sequi!
              </p>
            </div>
          </button>
        </div>
      </CardContent>
      <div className="flex justify-start px-8 py-4">
        <button className="text-blue-600 hover:underline text-sm">
          Cookie settings
        </button>
      </div>
    </Card>
  );
};

export default Homepage;