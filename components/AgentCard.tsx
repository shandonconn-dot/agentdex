import StatBar from './StatBar';

interface Agent {
  id: string;
  name: string;
  type: string;
  specialization: string;
  availability: number;
  stats: {
    speed: number;
    accuracy: number;
    cost: number;
  };
  abilities: string[];
}

interface AgentCardProps {
  agent: Agent;
}

export default function AgentCard({ agent }: AgentCardProps) {
  return (
    <div className="text-pixel-white">
      <div className="mb-4">
        <p className="text-sm">Type: {agent.type}</p>
        <p className="text-sm">Specialization: {agent.specialization}</p>
      </div>

      <div className="mb-4">
        <p className="text-sm">Availability:</p>
        <div className="w-full bg-pixel-gray h-4 rounded">
          <div 
            className="bg-green-500 h-full rounded" 
            style={{ width: `${agent.availability}%` }}
          />
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-lg mb-2">ABILITIES:</h3>
        <ul className="pl-4">
          {agent.abilities.map((ability, index) => (
            <li key={index} className="text-sm">▸ {ability}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg mb-2">STATS:</h3>
        <StatBar label="Speed" value={agent.stats.speed} />
        <StatBar label="Accuracy" value={agent.stats.accuracy} />
        <StatBar label="Cost" value={agent.stats.cost} />
      </div>

      <div className="mt-4 text-center">
        <a 
          href={`/agent/${agent.id}`} 
          className="pixel-button px-4 py-2 rounded text-sm"
        >
          INVOKE: agentdex.com/invoke/{agent.name}
        </a>
      </div>
    </div>
  );
}