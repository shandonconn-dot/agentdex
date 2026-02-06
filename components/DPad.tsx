interface DPadProps {
  onNavigate: (direction: string) => void;
}

export default function DPad({ onNavigate }: DPadProps) {
  return (
    <div className="w-24 h-24 grid grid-cols-3 grid-rows-3 gap-1">
      <div />
      <button 
        onClick={() => onNavigate('up')} 
        className="pixel-button rounded flex items-center justify-center"
      >
        ▲
      </button>
      <div />
      
      <button 
        onClick={() => onNavigate('left')} 
        className="pixel-button rounded flex items-center justify-center"
      >
        ◀
      </button>
      <div className="bg-pixel-gray rounded" />
      <button 
        onClick={() => onNavigate('right')} 
        className="pixel-button rounded flex items-center justify-center"
      >
        ▶
      </button>
      
      <div />
      <button 
        onClick={() => onNavigate('down')} 
        className="pixel-button rounded flex items-center justify-center"
      >
        ▼
      </button>
      <div />
    </div>
  );
}