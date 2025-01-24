import { useState, useRef } from 'react';
import { PlayIcon, PauseIcon, BackwardIcon, ForwardIcon, SpeakerWaveIcon } from '@heroicons/react/24/solid';
const songs = [
  
  {
    id: 1,
    title: "ADDICTED TO YOU",
    artist: "Metoushela",
    cover: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=500&h=500&fit=crop",
    audio: "/music/song1.mp3"
  },
  {
    id: 2,
    title: "Avenir Radieux",
    artist: "Metoushela",
    cover: "https://images.unsplash.com/photo-1614149162883-504ce4d13909,
    audio: "/music/song2.mp3"
  },
  {
    id: 3,
    title: "Resilience in Shadows",
    artist: "Metoushela",
    cover: "https://images.unsplash.com/photo-1513829596324-4bb2800c5efb?w=500&h=500&fit=crop",
    audio: "/music/song3.mp3"
  },
  {
    id: 4,
    title: "Rising from Doubt",
    artist: "Metoushela",
    cover: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=500&h=500&fit=crop",
    audio: "/music/song4.mp3"
  },
  {
    id: 5,
    title: "Awakening in Light",
    artist: "Metoushela",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop",
    audio: "/music/song5.mp3"
  },
  {
    id: 6,
    title: "Chasing Tomorrow",
    artist: "Metoushela",
    cover: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=500&h=500&fit=crop",
    audio: "/music/song6.mp3"
  },
  {
    id: 7,
    title: "Chasing Cosmic Dreams",
    artist: "Metoushela",
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop",
    audio: "/music/song7.mp3"
  },
  {
    id: 8,
    title: "Un Soutien Éternel remix v1",
    artist: "Metoushela",
    cover: "https://images.unsplash.com/photo-1533577116850-9cc66cad8a9b?w=500&h=500&fit=crop",
    audio: "/music/song8.mp3"
  },
  {
    id: 9,
    title: "Un Soutien Éternel remix v2",
    artist: "Metoushela",
    cover: "https://images.unsplash.com/photo-1506765515384-028b60a970df?w=500&h=500&fit=crop",
    audio: "/music/song9.mp3"
  },
  {
    id: 10,
    title: "Eternal Light",
    artist: "Metoushela",
    cover: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=500&h=500&fit=crop",
    audio: "/music/song10.mp3"
  },
  {
    id: 11,
    title: "Un Soutien Éternel",
    artist: "Metoushela",
    cover: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=500&h=500&fit=crop",
    audio: "/music/song11.mp3"
  },
  {
    id: 12,
    title: "In Memoriam",
    artist: "Metoushela",
    cover: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=500&h=500&fit=crop",
    audio: "/music/song12.mp3"
  },
  {
    id: 13,
    title: "Étoile des Innovations",
    artist: "Metoushela",
    cover: "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?w=500&h=500&fit=crop",
    audio: "/music/song13.mp3"
  },
  {
    id: 14,
    title: "Rêves de Technologie",
    artist: "Metoushela",
    cover: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=500&h=500&fit=crop",
    audio: "/music/song14.mp3"
  },
  {
    id: 15,
    title: "Echoes of Metoushela",
    artist: "Metoushela",
    cover: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500&h=500&fit=crop",
    audio: "/music/song15.mp3"
  }
];



export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const [volume, setVolume] = useState(80);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const changeSong = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setCurrentSong((prev) => (prev + 1) % songs.length);
    } else {
      setCurrentSong((prev) => (prev - 1 + songs.length) % songs.length);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/30 backdrop-blur-lg z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              M.MUSIQUE 
            </h1>
            <div className="space-x-6">
              <a href="#" className="hover:text-purple-400 transition-colors">Accueil</a>
              <a href="https://facebook.com/MetoushelaWalker" className="hover:text-purple-400 transition-colors">contact</a>
              <a href="https://metoushela-portfolio.vercel.app" className="hover:text-purple-400 transition-colors">Portfolio</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 pt-24 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {songs.map((song, index) => (
            <div
              key={song.id}
              className={`bg-white/10 backdrop-blur-lg rounded-xl p-4 transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                currentSong === index ? 'ring-2 ring-purple-500' : ''
              }`}
              onClick={() => setCurrentSong(index)}
            >
              <img
                src={song.cover}
                alt={song.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{song.title}</h3>
              <p className="text-gray-400">{song.artist}</p>
            </div>
          ))}
        </div>

        {/* Player Controls */}
        <div className="fixed bottom-0 left-0 right-0 bg-black/30 backdrop-blur-lg">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={songs[currentSong].cover}
                  alt={songs[currentSong].title}
                  className="w-16 h-16 rounded-lg"
                />
                <div>
                  <h3 className="font-semibold">{songs[currentSong].title}</h3>
                  <p className="text-sm text-gray-400">{songs[currentSong].artist}</p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <button
                  onClick={() => changeSong('prev')}
                  className="hover:text-purple-400 transition-colors"
                >
                  <BackwardIcon className="w-8 h-8" />
                </button>
                <button
                  onClick={togglePlay}
                  className="bg-purple-600 hover:bg-purple-700 rounded-full p-3 transition-colors"
                >
                  {isPlaying ? (
                    <PauseIcon className="w-8 h-8" />
                  ) : (
                    <PlayIcon className="w-8 h-8" />
                  )}
                </button>
                <button
                  onClick={() => changeSong('next')}
                  className="hover:text-purple-400 transition-colors"
                >
                  <ForwardIcon className="w-8 h-8" />
                </button>
              </div>

              <div className="flex items-center space-x-2">
                <SpeakerWaveIcon className="w-6 h-6" />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={(e) => setVolume(parseInt(e.target.value))}
                  className="w-24 accent-purple-600"
                />
              </div>
            </div>
          </div>
        </div>

        <audio
          ref={audioRef}
          src={songs[currentSong].audio}
          onEnded={() => changeSong('next')}
        />
      </main>

      {/* Footer */}
      <footer className="fixed bottom-20 w-full bg-black/30 backdrop-blur-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-400">© 2025 Metoushela. Tous droits réservés.</p>
            <div className="space-x-4">
              <a href="https://www.google.com/search?q=politique+de+confidentialit%C3%A9&oq=politique+de+c&gs_lcrp=EgZjaHJvbWUqBwgEEAAYgAQyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABDIHCAoQABiABDIHCAsQABiABDIHCAwQABiABDIHCA0QABiABDIHCA4QABiABNIBCDc5MTdqMGoxqAIAsAIA&sourceid=chrome-mobile&ie=UTF-8" className="text-sm hover:text-purple-400 transition-colors">
                Politique de confidentialité
              </a>
              <a href="https://www.google.com/search?q=conditions+d%27utilisation+&sca_esv=07057cd0c5299605&sxsrf=AHTn8zohQgq7ZOaCWxSexkIWBgou_380oQ%3A1737721851453&ei=-4eTZ5ikG5ivhbIPvKrYwAo&oq=conditions+d%27utilisation+&gs_lp=EhNtb2JpbGUtZ3dzLXdpei1zZXJwIhljb25kaXRpb25zIGQndXRpbGlzYXRpb24gMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARIoFxQow5Y6k9wAngBkAEEmAGABKAB2y-qAQgzLTIuMTEuMbgBA8gBAPgBAZgCDKAC-iOoAg_CAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICBxAjGCcY6gLCAgoQIxjwBRgnGOoCwgIKECMYgAQYJxiKBcICChAAGIAEGEMYigXCAhAQABiABBixAxhDGIMBGIoFwgIKEC4YgAQYQxiKBcICEBAuGIAEGNEDGMcBGCcYigXCAg4QABiABBixAxiDARiKBcICDhAuGIAEGLEDGIMBGIoFwgISEAAYgAQYQxiKBRhGGPkBGKMFwgILEC4YgAQYsQMYgwHCAggQABiABBixA8ICFRAAGIAEGEMYigUYRhj5ARiMBdgBAcICCxAAGIAEGLEDGIMBwgIFEC4YgASYAyjxBRRt6cMN9y86iAYBkAYRugYECAEYE5IHBjIuNC0xMKAH4mM&sclient=mobile-gws-wiz-serp" className="text-sm hover:text-purple-400 transition-colors">
                Conditions d'utilisation
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
      }
    
