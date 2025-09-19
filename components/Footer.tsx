
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-300 mt-12">
      <div className="w-full max-w-7xl mx-auto py-6 px-4 sm:px-6 text-center text-sm">
        <p>Cet outil est à usage éducatif uniquement et ne fournit pas d'avis médical. Le diagnostic final et les décisions de traitement incombent au professionnel de santé qualifié.</p>
        <p className="mt-2 opacity-70">&copy; 2025 Guide de prise en charge des hémoptysies graves développé par le Dr. Zouhair Souissi. Le contenu est basé sur les dernières recommandations cliniques.</p>
      </div>
    </footer>
  );
};