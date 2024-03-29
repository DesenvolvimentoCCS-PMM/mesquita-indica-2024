import { useEffect } from "react";
import { BannerCategorys } from "../../components/voting/banner-categorys";
import { BannerText } from "../../components/voting/banner-text";
import { Votation } from "../../components/voting/votation";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { getAnalytics, logEvent } from "firebase/analytics";

export function Voting() {
  const navigateTo = useNavigate();
  const analytics = getAnalytics();

  useEffect(() => {
    checkVotingPermission();

    const entradaNaPagina = Date.now();
    // Retorna uma função de limpeza que será chamada quando o componente for desmontado
    return () => {
      // Calcula quanto tempo (em segundos) o usuário passou na página
      const tempoGasto = (Date.now() - entradaNaPagina) / 1000;

        logEvent(analytics, 'tempo_na_pagina_votar', {
        tempo_em_segundos: tempoGasto
      });
    };
  }, [navigateTo, analytics]);

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
      <div className="flex rounded-[65px] relative overflow-hidden bg-[#241A0C] max-w-7xl max-h-[890px] m-auto sm:items-center sm:justify-center">
        {/* Blur/Degrade */}
        <div className="h-full w-2/5 rounded-full filter bg-[#7D2D0A] blur-[120px] bg-opacity-80 absolute -left-52 -bottom-40"></div>
        <div className="h-full w-2/5 rounded-full filter bg-amber-300 blur-[100px] bg-opacity-60 absolute -top-80 -right-64"></div>

        {/* Box */}
        <div className="w-full relative">
          {/* Texts */}
          <BannerText />
          <BannerCategorys />
        </div>
      </div>

      {/* Voting */}
      <Votation />
    </div>
  );
}
