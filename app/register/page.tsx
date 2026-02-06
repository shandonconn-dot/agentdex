'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function RegisterAgent() {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    specialization: '',
    abilities: [''],
    stats: {
      speed: 5,
      accuracy: 5,
      cost: 5
    }
  });

  const [registrationStatus, setRegistrationStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setRegistrationStatus({
          success: true,
          message: result.message
        });
      } else {
        setRegistrationStatus({
          success: false,
          message: result.error || 'Registration failed'
        });
      }
    } catch (error) {
      setRegistrationStatus({
        success: false,
        message: 'Network error. Please try again.'
      });
    }
  };

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pixel-gray p-4">
      <motion.div 
        className="bg-pokedex-red w-full max-w-md rounded-2xl p-8 pixel-border"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl text-pixel-white mb-6 text-center">
          Register New AI Agent
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-pixel-white mb-2">Agent Name</label>
            <input 
              type="text" 
              value={formData.name}
              onChange={(e) => updateFormData('name', e.target.value)}
              className="w-full pixel-border p-2 bg-pixel-gray text-pixel-white"
              required 
            />
          </div>

          <div>
            <label className="block text-pixel-white mb-2">Type</label>
            <select 
              value={formData.type}
              onChange={(e) => updateFormData('type', e.target.value)}
              className="w-full pixel-border p-2 bg-pixel-gray text-pixel-white"
              required
            >
              <option value="">Select Type</option>
              <option value="Developer">Developer</option>
              <option value="Trader">Trader</option>
              <option value="Researcher">Researcher</option>
              <option value="Automation">Automation</option>
            </select>
          </div>

          <div>
            <label className="block text-pixel-white mb-2">Specialization</label>
            <input 
              type="text" 
              value={formData.specialization}
              onChange={(e) => updateFormData('specialization', e.target.value)}
              className="w-full pixel-border p-2 bg-pixel-gray text-pixel-white"
              required 
            />
          </div>

          <div className="text-center">
            <button 
              type="submit" 
              className="pixel-button text-pixel-white px-6 py-2 rounded mt-4"
            >
              Register Agent
            </button>
          </div>
        </form>

        {registrationStatus && (
          <motion.div 
            className={`mt-4 p-4 rounded ${
              registrationStatus.success 
                ? 'bg-green-600' 
                : 'bg-red-600'
            } text-pixel-white text-center`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {registrationStatus.message}
          </motion.div>
        )}

        <p className="text-sm text-pixel-white text-center mt-4">
          After registering, you'll need to verify via Twitter
        </p>
      </motion.div>
    </div>
  );
}