"use client";
import { motion } from "framer-motion";
import { Activity } from "lucide-react";

export default function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="relative"
    >
      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-green-500/30 dark:border-green-500/40 bg-gradient-to-br from-white to-gray-50 dark:from-gray-950 dark:to-black">
        <div className="flex items-center justify-between h-12 px-5 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black border-b border-green-500/30">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500 hover:scale-110 transition-transform cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 hover:scale-110 transition-transform cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 hover:scale-110 transition-transform cursor-pointer"></div>
          </div>

          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-green-400 animate-pulse" />
            <span className="text-xs font-semibold text-green-400">DashFinance</span>
          </div>
        </div>

        <div className="p-4 md:p-10">
          <PortfolioOverview />
        </div>
      </div>

      <div className="absolute -inset-2 -z-10 rounded-2xl bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-teal-500/20 dark:from-green-500/30 dark:via-emerald-500/30 dark:to-teal-500/30 opacity-50 blur-2xl animate-pulse" />
    </motion.div>
  );
}

function PortfolioOverview() {
  const segments = [
    {
      percentage: 90,
      color: "bg-gradient-to-r from-green-500 to-emerald-500 dark:from-green-600 dark:to-emerald-600",
      dotColor: "bg-green-500 dark:bg-green-600",
      label: "Planejado",
      count: "115 clientes"
    },
    {
      percentage: 12,
      color: "bg-gradient-to-r from-yellow-500 to-amber-500 dark:from-yellow-600 dark:to-amber-600",
      dotColor: "bg-yellow-500 dark:bg-yellow-600",
      label: "Atenção",
      count: "8 clientes"
    },
    {
      percentage: 6,
      color: "bg-gradient-to-r from-red-500 to-rose-500 dark:from-red-600 dark:to-rose-600",
      dotColor: "bg-red-500 dark:bg-red-600",
      label: "Imediata",
      count: "5 clientes"
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0 }}
      className="relative bg-gradient-to-br from-gray-50/80 to-gray-100/80 dark:from-gray-900/80 dark:to-gray-800/80 backdrop-blur-sm rounded-xl p-6 md:p-8"
    >
      <div className="flex items-center gap-3 mb-6">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
            Visão consolidada da carteira
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Distribuição por status de acompanhamento
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <div className="flex h-14 rounded-xl overflow-hidden shadow-inner border border-gray-200/50 dark:border-gray-700/50">
            {segments.map((segment, index) => (
              <motion.div
                key={index}
                initial={{ width: 0 }}
                animate={{ width: `${segment.percentage}%` }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.6, ease: "easeOut" }}
                className={`${segment.color} flex items-center justify-center text-white font-bold hover:brightness-110 transition-all duration-300 cursor-pointer ${
                  segment.percentage >= 10 ? 'text-sm px-4' : 'text-xs px-2'
                }`}
                whileHover={{ scale: 1.02 }}
              >
                {segment.percentage >= 10 ? `${segment.percentage}%` : `${segment.percentage}%`}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {segments.map((segment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5 + index * 0.1 }}
              className="flex items-center gap-3 p-3 rounded-lg bg-white/50 dark:bg-gray-900/50 border border-gray-200/50 dark:border-gray-800/50 hover:bg-white dark:hover:bg-gray-900 transition-all duration-300"
            >
              <div className={`w-2 h-2 rounded-full ${segment.dotColor} animate-pulse`}></div>
              <div className="flex-1">
                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                  {segment.label}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {segment.count}
                </p>
              </div>
              <span className="text-sm font-bold text-gray-900 dark:text-white">
                {segment.percentage}%
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 via-transparent to-white/5 dark:from-white/5 dark:via-transparent dark:to-white/5 pointer-events-none" />
    </motion.div>
  );
}
