"use client"
import { cn } from '@/lib/utils';
import { useState } from 'react';

type Tamanho = "P" | "M" | "G";

const TamanhoComponent: React.FC = () => {
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState<Tamanho | null>(null);

  const handleSelecionarTamanho = (tamanho: Tamanho) => {
    if (tamanho === tamanhoSelecionado) {
      // Se o tamanho já estiver selecionado, desselecione-o
      setTamanhoSelecionado(null);
    } else {
      // Senão, selecione-o
      setTamanhoSelecionado(tamanho);
    }
  };

  return (
    <div>
      <h2>Escolha o tamanho:</h2>
      <div className="flex justify-center">
        <button
          className={cn("mx-2 py-2 px-4 rounded", {
            "bg-blue-500 text-white": tamanhoSelecionado === "P",
            "bg-gray-200 text-gray-700": tamanhoSelecionado !== "P"
          })}
          onClick={() => handleSelecionarTamanho("P")}
        >
          P
        </button>
        <button
          className={cn("mx-2 py-2 px-4 rounded", {
            "bg-blue-500 text-white": tamanhoSelecionado === "M",
            "bg-gray-200 text-gray-700": tamanhoSelecionado !== "M"
          })}
          onClick={() => handleSelecionarTamanho("M")}
        >
          M
        </button>
        <button
          className={cn("mx-2 py-2 px-4 rounded", {
            "bg-blue-500 text-white": tamanhoSelecionado === "G",
            "bg-gray-200 text-gray-700": tamanhoSelecionado !== "G"
          })}
          onClick={() => handleSelecionarTamanho("G")}
        >
          G
        </button>
      </div>
      {tamanhoSelecionado && (
        <p className="mt-4">Tamanho selecionado: {tamanhoSelecionado}</p>
      )}
    </div>
  );
};

export default TamanhoComponent;
