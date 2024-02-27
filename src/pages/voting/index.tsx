import { useEffect } from "react";
import { BannerCategorys } from "../../components/voting/banner-categorys";
import { BannerText } from "../../components/voting/banner-text";
import { Votation } from "../../components/voting/votation";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export function Voting() {
  const navigateTo = useNavigate();

  useEffect(() => {
    checkVotingPermission();
  }, []);

  const checkVotingPermission = () => {
    const voteId = localStorage.getItem("voteId");

    if (!voteId) {
      navigateTo("/cadastrar");
      return;
    }
  };

  return (
    <div className="min-h-screen bg-darkBrown p-4 sm:p-10">
      <Toaster position="top-right" reverseOrder={false} />

      {/* Blur */}
      <div className="h-96 w-96 rounded-full filter bg-amber-300 blur-[100px] bg-opacity-70 fixed -top-52 -right-44 z-50"></div>

      {/* Container */}
      <div className="flex flex-col items-center py-20 rounded-[38px] relative overflow-hidden bg-[#241A0C] max-w-7xl m-auto sm:items-center sm:justify-center">
        {/* Blur/Degrade */}
        <div className="h-full w-2/5 rounded-full filter bg-[#7D2D0A] blur-[120px] bg-opacity-80 absolute -left-52 -bottom-40"></div>
        <div className="h-full w-2/5 rounded-full filter bg-amber-300 blur-[100px] bg-opacity-60 absolute -top-80 -right-64"></div>

        <BannerText />
        <BannerCategorys />
      </div>

      {/* Voting */}
      <Votation />
    </div>
  );
}
