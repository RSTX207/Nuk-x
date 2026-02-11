import React, { useState } from 'react';
import { 
  MessageCircle, Zap, Cpu, Mic, Brain, 
  QrCode, TrendingUp, Presentation, Palette, 
  HardDrive, Rocket, ArrowUpRight, X, ShoppingBag, 
  Target, Globe
} from 'lucide-react';

const App = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const tools = [
    { id: 1, title: "IA_TRADING", price: "999", color: "#70FF00", icon: <TrendingUp />, desc: "Algoritmos predictivos de alta frecuencia para mercados volátiles." },
    { id: 2, title: "ADS_IA", price: "750", color: "#FF3E91", icon: <Target />, desc: "Optimización de pauta publicitaria basada en comportamiento neuronal." },
    { id: 3, title: "IA_APRENDIZAJE", price: "600", color: "#BD00FF", icon: <Brain />, desc: "Entrenamiento de modelos personalizados con data propia." },
    { id: 4, title: "IA_TEXTO", price: "450", color: "#00E5FF", icon: <Cpu />, desc: "Generación de narrativa compleja y copy de conversión masiva." },
    { id: 5, title: "IA_VOZ", price: "400", color: "#FF6B00", icon: <Mic />, desc: "Clonación y síntesis de voz con matices emocionales humanos." },
    { id: 6, title: "MEETINGS_IA", price: "350", color: "#FFD600", icon: <Presentation />, desc: "Asistente autónomo para minutas y ejecución de tareas post-reunión." },
    { id: 7, title: "STORE_LAUNCHER", price: "299", color: "#FFFFFF", icon: <Globe />, desc: "Despliegue instantáneo de ecosistemas e-commerce de alto rendimiento." },
    { id: 8, title: "DESIGN_PREVIEW", price: "199", color: "#70FF00", icon: <Palette />, desc: "Renderizado en tiempo real de activos visuales para prototipado." },
    { id: 9, title: "STORAGE_5GB", price: "99", color: "#00E5FF", icon: <HardDrive />, desc: "Almacenamiento encriptado de baja latencia para activos NUK." },
    { id: 10, title: "QR_DYNAMIC", price: "49", color: "#FF3E91", icon: <QrCode />, desc: "Puentes físicos-digitales con tracking de data avanzado." },
  ];

  const addToCart = (tool) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === tool.id);
      if (exists) return prev.map(item => item.id === tool.id ? {...item, qty: item.qty + 1} : item);
      return [...prev, {...tool, qty: 1}];
    });
    setIsCartOpen(true);
  };

  const total = cart.reduce((acc, item) => acc + (parseInt(item.price) * item.qty), 0);

  const handleApply = () => {
    const message = `Hola Humberto, estoy listo para elevar mi infraestructura con NUK.\n\nPROYECTO:\n${cart.map(i => `- ${i.title} (x${i.qty})`).join('\n')}\n\nTOTAL ESTIMADO: $${total}\n\n"the question is the nuk"`;
    window.open(`https://wa.me/34642291836?text=${encodeURIComponent(message)}`);
  };

  return (
    <div className="bg-[#f8f8f8] text-[#0a0a0a] min-h-screen selection:bg-[#70FF00] font-sans">
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@800&family=Inter:wght@300;500;800&display=swap');
          .font-orbitron { font-family: 'Orbitron', sans-serif; }
          .neo-brutal { border: 2px solid #000; box-shadow: 4px 4px 0px #000; transition: all 0.2s; }
          .neo-brutal:hover { transform: translate(-2px, -2px); box-shadow: 8px 8px 0px #000; }
          .marquee { background: #000; color: #fff; padding: 10px 0; overflow: hidden; border-bottom: 2px solid #000; white-space: nowrap; }
          .marquee-inner { display: inline-block; animation: scroll 20s linear infinite; font-family: 'Orbitron'; font-size: 10px; }
          @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        `}
      </style>

      <div className="marquee">
        <div className="marquee-inner">
          THE QUESTION IS THE NUK • INFRAESTRUCTURA 2026 • THE QUESTION IS THE NUK • INFRAESTRUCTURA 2026 • THE QUESTION IS THE NUK • INFRAESTRUCTURA 2026 • 
        </div>
      </div>

      <nav className="p-6 flex justify-between items-center sticky top-0 bg-[#f8f8f8]/90 backdrop-blur-sm z-50">
        <h1 className="font-orbitron text-2xl italic border-b-4 border-[#70FF00]">NUK</h1>
        <button onClick={() => setIsCartOpen(true)} className="neo-brutal bg-black text-white px-6 py-2 flex items-center gap-3">
          <ShoppingBag size={18} />
          <span className="font-bold">{cart.length}</span>
        </button>
      </nav>

      <header className="px-6 py-16 max-w-7xl mx-auto">
        <h2 className="text-[10vw] md:text-[6vw] font-extrabold leading-none tracking-tighter uppercase mb-6">
          NUK DIGITAL <br/><span className="text-[#70FF00] italic">INFRASTRUCTURE</span>
        </h2>
        <p className="text-xl max-w-2xl text-zinc-600 font-medium italic">"the question is the nuk"</p>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool) => (
          <div key={tool.id} className="neo-brutal bg-white p-8 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 flex items-center justify-center neo-brutal mb-6" style={{ backgroundColor: tool.color }}>
                {React.cloneElement(tool.icon, { size: 24, strokeWidth: 3 })}
              </div>
              <h3 className="text-2xl font-black uppercase mb-2">{tool.title}</h3>
              <p className="text-sm text-zinc-500 mb-6">{tool.desc}</p>
              <p className="font-orbitron text-xl mb-6">${tool.price}</p>
            </div>
            <button onClick={() => addToCart(tool)} className="w-full neo-brutal bg-black text-white py-3 font-bold text-xs uppercase hover:bg-[#70FF00] hover:text-black transition-colors">
              Añadir Activo +
            </button>
          </div>
        ))}
      </main>

      {isCartOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />
          <aside className="relative w-full max-w-md bg-white border-l-4 border-black p-8 flex flex-col shadow-2xl h-full">
            <div className="flex justify-between items-center mb-10">
              <h3 className="font-orbitron text-lg font-black italic underline decoration-[#70FF00]">NUK_CHECKOUT</h3>
              <X onClick={() => setIsCartOpen(false)} className="cursor-pointer" />
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-4">
              {cart.map((item, idx) => (
                <div key={idx} className="neo-brutal p-4 flex justify-between items-center bg-zinc-50">
                  <div>
                    <p className="font-black text-xs uppercase">{item.title}</p>
                    <p className="text-[10px] font-bold opacity-60">QTY: {item.qty} • ${item.price}</p>
                  </div>
                  <button onClick={() => setCart(cart.filter(i => i.id !== item.id))} className="text-red-500 font-bold">X</button>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t-2 border-black">
              <div className="flex justify-between items-end mb-8">
                <span className="font-black text-[10px] uppercase">Total</span>
                <span className="font-orbitron text-4xl font-black">${total}</span>
              </div>
              <button 
                onClick={handleApply}
                className={`w-full neo-brutal py-5 bg-[#70FF00] font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 ${cart.length === 0 ? 'opacity-50' : ''}`}
              >
                <MessageCircle size={18}/> Aplicar vía WhatsApp
              </button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
};

export default App;
