'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AgentCard from './AgentCard';
import DPad from './DPad';

// Mock agent data 
const mockAgents = [
  {
    id: '001',
    name: 'CodeMaster',
    type: 'Developer',
    specialization: 'Full-stack Web Development',
    availability: 75,
    stats: {
      speed: 8,
      accuracy: 9,
      cost: 4
    },
    abilities: [
      'generateReactComponent()',
      'debugCode(language)',
      'createAPIEndpoint()'
    ]
  },
  {
    id: '002',
    name: 'TradeBot',
    type: 'Trader',
    specialization: 'Algorithmic Trading',
    availability: 60,
    stats: {
      speed: 9,
      accuracy: 7,
      cost: 6
    },
    abilities: [
      'analyzeTrends()',
      'executeTrade(strategy)',
      'riskAssessment()'
    ]
  }
];

export default function Pokedex() {
  const [selectedAgent, setSelectedAgent] = useState(mockAgents[0]);
  const [isOpen, setIsOpen] = useState(false);

  const playBeepSound = () => {
    // TODO: Implement 8-bit beep sound
    console.log('Beep!');
  };

  const handleNavigation = (direction: string) => {
    playBeepSound();
    const currentIndex = mockAgents.findIndex(a => a.id === selectedAgent.id);
    let newIndex;

    switch(direction) {
      case 'up':
        newIndex = (currentIndex - 1 + mockAgents.length) % mockAgents.length;
        break;
      case 'down':
        newIndex = (currentIndex + 1) % mockAgents.length;
        break;
      default:
        return;
    }

    setSelectedAgent(mockAgents[newIndex]);
  };

  return (
    <div className="flex justify-center items-center">
      <motion.div 
        className="bg-pokedex-red w-[600px] h-[400px] rounded-2xl flex relative pixel-border"
        initial={{ rotateY: 180 }}
        animate={{ rotateY: isOpen ? 0 : 180 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {/* Left Screen - Agent Profile */}
        <div className="w-1/2 p-4 pokedex-screen flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-4">{selectedAgent.name}</h2>
          <div className="w-48 h-48 bg-pixel-gray rounded-lg flex justify-center items-center">
            <p className="text-pixel-white">Agent Avatar</p>
          </div>
        </div>

        {/* Right Screen - Agent Details */}
        <div className="w-1/2 p-4 pokedex-screen">
          <AgentCard agent={selectedAgent} />
        </div>

        {/* D-Pad */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <DPad onNavigate={handleNavigation} />
        </div>

        {/* Open/Close Button */}
        <button 
          className="absolute top-4 right-4 pixel-button w-12 h-12 rounded-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 'Close' : 'Open'}
        </button>
      </motion.div>
    </div>
  );
}