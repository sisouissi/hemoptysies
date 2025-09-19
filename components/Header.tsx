import React from 'react';
import { HeartPulseIcon } from './Icons';

export const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-red-800 to-rose-700 shadow-lg w-full text-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 p-3 rounded-full">
              <HeartPulseIcon className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Prise en Charge de l'Hémoptysie Grave</h1>
              <p className="text-sm text-rose-100 opacity-90">Guide interactif basé sur les données de la littérature récente</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};