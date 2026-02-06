import { NextResponse } from 'next/server';

// Mock agent data
const agents = [
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

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const agent = agents.find(a => a.id === params.id);
  
  if (!agent) {
    return NextResponse.json({ error: 'Agent not found' }, { status: 404 });
  }
  
  return NextResponse.json(agent);
}