"use client";
import { Playfair_Display, Inter } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Volume2, VolumeX } from "lucide-react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
});

type Section = "inicio" | "regalos" | "selfies" | "predicciones" | "itinerario" | "lia";

const EVENT_DATE = new Date("2026-05-25T13:00:00");
const MAPS_URL =
  "https://www.google.com/maps/place/Quincho+Bayer/@-34.524855,-58.5164662,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcb1004146ce3b:0xae0d000ed4e2a9ff!8m2!3d-34.524855!4d-58.5138913!16s%2Fg%2F11w1xwl3f2?entry=ttu&g_ep=EgoyMDI2MDUxMC4wIKXMDSoASAFQAw%3D%3D";

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

export default function Home() {
  const [entered, setEntered] = useState(false);
  const [guestName, setGuestName] = useState("");
  const [section, setSection] = useState<Section>("inicio");

  const [loadingEnter, setLoadingEnter] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [musicPlaying, setMusicPlaying] = useState(true);

  useEffect(() => {
    const savedGuest = localStorage.getItem("guestName");
  
    if (savedGuest) {
      setGuestName(savedGuest);
      setEntered(true);
    }
  }, []);

const toggleMusic = () => {
  if (!audioRef.current) return;

  if (musicPlaying) {
    audioRef.current.pause();
    setMusicPlaying(false);
  } else {
    audioRef.current
  .play()
  .then(() => setMusicPlaying(true))
  .catch((error) => console.error(error));
  }
};

  const canEnter = guestName.trim().length >= 2;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [section]);

  useEffect(() => {
    if (entered && audioRef.current) {
      audioRef.current
        .play()
        .catch((error) => console.error(error));
    }
  }, [entered]);

  if (!entered) {
    return (
      <>
        <audio ref={audioRef} loop>
          <source src="/music.mp3" type="audio/mpeg" />
        </audio>
      <main className="relative min-h-screen overflow-hidden animate-cinematicEntrance animate-fadeLuxury bg-[radial-gradient(circle_at_top,#FFFDFB,#FFF4EE,#FDF0E8)] flex items-center justify-center px-6">
      <div className="absolute bottom-[12%] left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-[#FFE8DA] opacity-40 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[18%] left-[14%] text-4xl opacity-60 animate-floatLuxury">
  ✨
</div>

<div className="absolute top-[22%] right-[12%] text-5xl opacity-50 animate-floatLuxury">
  🌼
</div>

<div className="absolute bottom-[18%] left-[18%] text-3xl opacity-45 animate-floatLuxury">
  ☁️
</div>

<div className="absolute bottom-[22%] right-[16%] text-4xl opacity-55 animate-floatLuxury">
  ⭐
  
</div>

<div className="absolute top-[9%] left-[18%] text-4xl opacity-55 animate-floatLuxury">🐝</div>
<div className="absolute top-[12%] right-[18%] text-4xl opacity-55 animate-floatLuxury">🌸</div>
<div className="absolute top-[32%] left-[8%] text-3xl opacity-50 animate-floatLuxury">✨</div>
<div className="absolute top-[36%] right-[7%] text-5xl opacity-45 animate-floatLuxury">☁️</div>
<div className="absolute bottom-[32%] left-[8%] text-5xl opacity-45 animate-floatLuxury">🌼</div>
<div className="absolute bottom-[28%] right-[9%] text-4xl opacity-55 animate-floatLuxury">⭐</div>
<div className="absolute bottom-[10%] left-[20%] text-4xl opacity-50 animate-floatLuxury">🧸</div>
<div className="absolute bottom-[11%] right-[22%] text-4xl opacity-50 animate-floatLuxury">🎀</div>

<div className="absolute bottom-[12%] left-1/2 -translate-x-1/2 w-[360px] h-[360px] bg-[#FCE7F3] opacity-30 blur-[120px] rounded-full pointer-events-none" />
<div className="relative z-10 w-full max-w-sm">
<div className="relative overflow-hidden bg-white/55 backdrop-blur-[45px] rounded-[52px] shadow-[0_30px_90px_rgba(212,184,167,0.24)] p-9 text-center border border-white/60 animate-fadeLuxury">
<div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-[#F7D7C4]/10 pointer-events-none" />
<div className="absolute top-0 left-10 right-10 h-px bg-white/80" />
<div className="relative z-10 text-6xl mb-4 animate-softFloat">🌼</div>

            <h1 className={`${playfair.className} text-[64px] text-[#C17D72] tracking-[-0.05em] leading-[0.92]`}>
              Lia Francesca
            </h1>

            <p className={`${inter.className} text-[#B08E87] mt-3 text-[13px] tracking-[0.32em] uppercase`}>
              Baby Shower Experience
            </p>

            <div className="relative z-10 mt-8 bg-gradient-to-br from-[#FFF3EC]/80 via-white/45 to-[#FFE7D8]/55 backdrop-blur-2xl rounded-[38px] p-6 border border-white/60 shadow-[0_18px_45px_rgba(247,215,196,0.24)] animate-[floatSoft_5s_ease-in-out_infinite]">
              <p className="text-sm text-[#9A746D] mb-3">Cada segundo nos acerca a un dia lleno de amor, juegos y recuerdos ✨</p>
              <Countdown />

              <p className="mt-4 text-center text-[13px] text-[#B08E87] italic animate-fadeIn">
  “Un día pensado para celebrar amor, familia y nuevos comienzos 🤍”
</p>

            </div>

            <input
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              placeholder="Tu nombre"
              className={`${playfair.className} w-full bg-white/40 backdrop-blur-2xl border border-white/55 rounded-[28px] px-6 py-5 text-center text-[20px] text-[#6E514E] placeholder:text-[#C2AAA4] outline-none shadow-[0_12px_30px_rgba(255,220,200,0.20)] focus:bg-white/55 focus:scale-[1.01] focus:border-white/70 transition-all duration-500`}
            />

            <button
              disabled={!canEnter}
              onClick={async () => {
                setLoadingEnter(true);
              
                const { error } = await supabase.from("guests").insert([
                  {
                    name: guestName,
                  },
                ]);
                
                console.log(error);
              
                localStorage.setItem("guestName", guestName);
              
                setTimeout(() => {
                  localStorage.setItem("guestName", guestName);
                
                  setEntered(true);
                }, 900);
              }}
              className="relative overflow-hidden w-full bg-gradient-to-r from-[#F7D7C4] via-[#FFE7D8] to-[#F4CFC4] disabled:opacity-40 rounded-full py-5 text-[#6B4F4B] text-[18px] font-semibold tracking-[0.01em] shadow-[0_18px_38px_rgba(247,215,196,0.38)] active:scale-[0.985] transition-all duration-500"
            >
              <span className="flex items-center justify-center gap-2">
              {loadingEnter ? "Entrando..." : "Entrar al evento"}
              <span className="text-lg">✨</span>
              </span>
            </button>

          </div>
        </div>
      </main>
      </>
    );
  }

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#FCE7DD_0%,#FFF8F3_35%,#FFF8F3_100%)] px-5 py-6 pb-44 animate-cinematicEntrance">
    <AppBackground />
    <div className="relative z-10 max-w-md mx-auto space-y-7">
    <div
  key={section}
  className="animate-[fadeIn_0.45s_ease] space-y-7"
>
  {section === "inicio" && (
    <Inicio guestName={guestName} setSection={setSection} />
  )}
  {section === "selfies" && <Selfies />}
  {section === "predicciones" && <Predicciones />}
  {section === "itinerario" && (
  <Itinerario setSection={setSection} />
)}
  {section === "lia" && <Lia guestName={guestName} />}
</div>
      </div>

      {section !== "itinerario" && (
        <>
        <button
        onClick={toggleMusic}
        className="fixed top-5 right-5 z-50 w-14 h-14 rounded-full bg-white/35 backdrop-blur-[20px] border border-white/50 shadow-[0_10px_30px_rgba(212,184,167,0.25)] flex items-center justify-center text-2xl active:scale-95 hover:scale-[1.02] duration-300 transition group"
      >
        {musicPlaying ? "🎵" : "🔇"}
        <span className="absolute -bottom-7 text-[10px] text-[#A07C74] opacity-0 group-hover:opacity-100 transition">
  Música
</span>

      </button>

  <nav className="fixed z-50 bottom-5 left-1/2 -translate-x-1/2 w-[92%] max-w-md bg-white/28 backdrop-blur-[40px] border border-white/45 rounded-[34px] shadow-[0_20px_60px_rgba(212,184,167,0.28)] px-3 py-3 flex justify-between items-center overflow-hidden">
  <div className="absolute inset-0 rounded-[34px] bg-gradient-to-br from-white/25 via-transparent to-[#F7D7C4]/10 pointer-events-none" />
    {[
      ["inicio", "🏠", "Inicio"],
      ["selfies", "📸", "Selfies"],
      ["predicciones", "🔮", "Votar"],
      ["itinerario", "🕰️", "Plan"],
      ["lia", "💌", "Lia"],
    ].map(([id, icon, label]) => (
      <button
        key={id}
        onClick={() => setSection(id as Section)}
        className={`flex flex-col items-center gap-[2px] transition-all duration-500 ease-out px-3 py-2 rounded-[26px] active:scale-95 hover:scale-[1.02] duration-300 relative overflow-hidden ${
          section === id
            ? "bg-gradient-to-br from-[#FFF3EC] via-white to-[#FFE7D8] text-[#6B4F4B] shadow-[0_10px_30px_rgba(247,215,196,0.45)] scale-105 animate-pulse"
            : "text-[#B08E87] hover:text-[#8D6E68]"
        }`}
      >
        <div className="relative w-12 h-12 rounded-[18px] flex items-center justify-center overflow-hidden">

        {section === id && (
  <span className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-[#F7D7C4]/20 pointer-events-none" />
)}

  {section === id && (
    <div className="absolute inset-0 bg-gradient-to-br from-[#FFF6F1] to-[#FFE9DD] shadow-[0_8px_20px_rgba(255,220,200,0.45)]" />
  )}

  <span className="relative z-10 text-[23px]">
    {icon}
  </span>
</div>
<span className="text-[11px] leading-none font-medium">
  {label}
</span>
      </button>
    ))}
  </nav>
  </>
  )}
  </main>
  </>
  );
  }

function Inicio({
  guestName,
  setSection,
}: {
  guestName: string;
  setSection: (s: Section) => void;
}) {
  const openMaps = () => {
    window.open(MAPS_URL, "_blank");
  };

  return (
    <>
      <HeroCard guestName={guestName} />

      <section className="relative overflow-hidden bg-white/35 backdrop-blur-[30px] rounded-[38px] p-6 border border-white/70 shadow-[0_20px_60px_rgba(212,184,167,0.18)]">
      <div className="absolute -top-16 -right-12 w-44 h-44 bg-[#FFD9C7] rounded-full blur-[110px] opacity-60 animate-floatLuxury" />

<div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#FFDCC8] rounded-full blur-3xl opacity-50" />
        <p className="text-sm text-[#B08E87] mb-3">Cuenta regresiva</p>
        <div className="relative z-10">
  <Countdown />
</div>
      </section>

      <section className="bg-white/25 backdrop-blur-[22px] rounded-[34px] p-5 shadow-[0_10px_30px_rgba(212,184,167,0.14)] border border-white/35 mb-5">
  <div className="flex items-center gap-4">
    <div className="w-14 h-14 rounded-3xl bg-[#FFF3EC] flex items-center justify-center text-3xl">
      ☁️
    </div>

    <div>
      <p className="text-sm text-[#B08E87]">Clima estimado</p>
      <h2 className="text-lg font-semibold !text-[#C17D72]">
        Nublado · 15°C / 9°C
      </h2>
      <p className="text-xs text-[#A07C74] mt-1">
        Ideal llevar abrigo liviano para estar cómodo o comoda.
      </p>
    </div>
  </div>
</section>

      <div className="grid gap-4">
        <Card
          icon="📍"
          title="Cómo llegar"
          text="Abrí la ubicación del evento en Google Maps."
          button="Abrir mapa"
          onClick={openMaps}
        />

        <Card
          icon="📸"
          title="Selfie antes de salir"
          text="Subí una fotito para armar una galería hermosa."
          button="Subir selfie"
          onClick={() => setSection("selfies")}
        />

        <Card
          icon="🔮"
          title="Predicciones"
          text="Votá si Lia se va a parecer más a mamá o a papá."
          button="Votar"
          onClick={() => setSection("predicciones")}
          />
          
          <Card
            icon="🕰️"
            title="Itinerario"
            text="Conocé los momentos principales del Baby Shower."
            button="Ver momentos"
            onClick={() => setSection("itinerario")}
            />

        <Card
          icon="💌"
          title="Mensajes para Lia"
          text="Dejá un deseo o frase para que quede de recuerdo."
          button="Escribir mensaje"
          onClick={() => setSection("lia")}
        />
      </div>
    </>
  );
}

function Selfies() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [photos, setPhotos] = useState<string[]>([]);

  const [isUploading, setIsUploading] = useState(false);
const [uploadStatus, setUploadStatus] = useState("");
const [previewUrl, setPreviewUrl] = useState("");
  useEffect(() => {
    fetchPhotos();
  }, []);
  
  const fetchPhotos = async () => {
    const { data, error } = await supabase.storage
      .from("selfies")
      .list("", {
        limit: 100,
        offset: 0,
      });
  
    if (error) {
      console.error(error);
      return;
    }
  
    const urls =
      data?.map((file) => {
        const { data: publicUrlData } = supabase.storage
          .from("selfies")
          .getPublicUrl(file.name);
  
        return publicUrlData.publicUrl;
      }) || [];
  
    setPhotos(urls.reverse());
  };

  const uploadPhoto = async () => {
    if (!selectedFile) return;

    const fileName = `${Date.now()}-${selectedFile.name}`;

    const { error } = await supabase.storage
      .from("selfies")
      .upload(fileName, selectedFile);

    if (error) {
      console.error(error);
      return;
    }

    const { data } = supabase.storage
      .from("selfies")
      .getPublicUrl(fileName);

    fetchPhotos();
    setSelectedFile(null);
  };

  return (
    <section>
      <Header
        title="Selfie antes de salir 📸"
        text=""
      />

<p className="text-center text-sm text-[#A07C74] leading-relaxed mb-5">
  Antes de salir, dejanos una selfie ✨<br />
  Queremos guardar un recuerdo lindo de este día 💖
</p>

      <div className="bg-white rounded-[32px] p-6 shadow-sm border border-[#F5E6DC] text-center mb-5">
        <div className="text-5xl mb-5">🤳</div>

        <p className="text-sm text-[#A07C74] mb-4">
          Elegí una foto desde tu celular o compu.
        </p>

        <label className="inline-flex cursor-pointer items-center justify-center rounded-full bg-[#F7D7C4] px-8 py-3 text-[#7A5C58]">
        Tomar selfie ✨
          <input
  type="file"
  accept="image/*"
  capture="user"
  className="hidden"
  onChange={(e) => {
    const file = e.target.files?.[0];

    if (file) {
      setSelectedFile(file);
setPreviewUrl(URL.createObjectURL(file));
    }
  }}
/>
        </label>

        {selectedFile && (
          <p className="mt-3 text-xs text-[#A07C74]">
            Foto seleccionada: {selectedFile.name}
          </p>
        )}
        {previewUrl && (
  <img
    src={previewUrl}
    alt="Preview selfie"
    className="w-40 h-40 object-cover rounded-3xl mx-auto mt-4 shadow-md border border-[#F5E6DC]"
  />
)}

        <button
          onClick={uploadPhoto}
          className="mt-4 w-full rounded-full bg-[#FFE7EF] py-3 text-[#B86B84] font-medium"
        >
          {isUploading ? "Subiendo..." : "Subir selfie 📸"}
        </button>

        {uploadStatus && (
  <p className="mt-3 text-xs text-[#A07C74]">
    {uploadStatus}
  </p>
)}
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        {photos.map((photo, index) => (
          <div
          key={index}
          className="relative bg-white pt-3 px-3 pb-10 rounded-[10px] shadow-[0_18px_40px_rgba(0,0,0,0.14)] rotate-[-2deg] hover:rotate-0 transition-all duration-500"
        >
          <img
  src={photo}
  alt="Selfie del evento"
  onError={() => {
    setPhotos((prev) => prev.filter((item) => item !== photo));
  }}
  className="aspect-square w-full rounded-[6px] object-cover"
/>

<div className="absolute bottom-3 right-3 text-lg opacity-80">
  🐝
</div>

        </div>
        ))}
      </div>
    </section>
  );
}

function Itinerario({
  setSection,
}: {
  setSection: (section: Section) => void;
}) {
  const moments = [
    {
      time: "12:00 hs",
      title: "Recepción y almuerzo",
      icon: "🍽️",
      text: "Llegada de invitados, saludos y primer momento para compartir.",
    },
    {
      time: "14:00 hs",
      title: "Juegos y premios",
      icon: "🎲",
      text: "Juegos, risas y pequeños premios para disfrutar todos juntos.",
    },
    {
      time: "15:30 hs",
      title: "Fotos, mesa dulce y mates",
      icon: "📸",
      text: "Momento para sacar fotos, disfrutar algo rico y compartir unos mates.",
    },
    {
      time: "17:00 hs",
      title: "Cierre",
      icon: "🤍",
      text: "Despedida y agradecimiento por acompañarnos en este día tan especial.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white/45 backdrop-blur-[28px] rounded-[48px] p-8 shadow-[0_30px_80px_rgba(212,184,167,0.22)] border border-white/80 mb-7 animate-fadeLuxury">

<div className="absolute top-4 left-6 text-2xl opacity-50 animate-floatSlow">
  ✨
</div>

<div className="absolute bottom-5 right-7 text-3xl opacity-60 animate-floatSlow">
  🌼
</div>

    <button
  onClick={() => setSection("inicio")}
  className="mb-8 flex items-center gap-3 text-sm text-[#A07C74] bg-white/60 backdrop-blur-2xl border border-white/50 rounded-full px-4 py-3 shadow-[0_10px_30px_rgba(212,184,167,0.18)] transition-all duration-300 hover:scale-[1.03] hover:bg-white/80 active:scale-95 hover:scale-[1.02] duration-300"
>
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFF6F1] to-[#FFE8DA] flex items-center justify-center shadow-[0_4px_12px_rgba(255,220,200,0.25)]">
  <span className="text-[18px]">←</span>
</div>
<span className="font-medium tracking-[0.02em]">
  Volver
</span>
</button>

      <div className="absolute top-6 right-6 text-4xl opacity-70">
        ☁️
      </div>

      <div className="absolute bottom-8 left-5 text-3xl opacity-60">
        ⭐
      </div>

      <div className="absolute top-28 left-2 text-3xl opacity-50">
        ☁️
      </div>

      <div className="text-center mb-8 relative z-10">
        <p className="text-xs uppercase tracking-[0.3em] text-[#C9A28F] mb-2">
          Momentos del día
        </p>

        <h1 className="text-4xl font-serif text-[#8D6E68] italic">
          Itinerario
        </h1>

        <p className="text-sm text-[#A07C74] mt-3">
          Una guía simple para acompañar cada momento del Baby Shower.
        </p>
      </div>

      <div className="relative z-10 space-y-5">
        <div className="absolute left-[29px] top-2 bottom-2 w-px bg-[#D8B69D]" />

        <div className="space-y-7">
        {moments.map((moment, index) => (
            <div
            key={moment.time}
            className="relative flex gap-5 animate-fadeLuxury"
            style={{
              animationDelay: `${index * 0.15}s`,
            }}
          >

              <div className="relative z-10 w-14 flex justify-center">
                <div className="w-4 h-4 rounded-full bg-[#D8B69D] border-4 border-[#FFFDF9] mt-2 shadow-sm" />
              </div>

              <div className="flex-1 bg-white/85 rounded-[30px] border border-[#F5E6DC] px-5 py-4 shadow-[0_12px_30px_rgba(212,184,167,0.16)] transition-all duration-300 active:scale-[0.98] hover:shadow-md">
                <div className="flex items-start gap-3">
                  <div className="text-3xl">
                    {moment.icon}
                  </div>

                  <div>
                    <p className="text-xs tracking-[0.18em] uppercase text-[#C9A28F]">
                      {moment.time}
                    </p>

                    <h2 className="font-serif text-xl text-[#C17D72] mt-1">
                      {moment.title}
                    </h2>

                    <p className="text-sm text-[#A07C74] mt-1 leading-relaxed">
                      {moment.text}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
      <p className="relative z-10 mt-8 text-center text-[13px] italic text-[#A07C74]">
  Un día pensado para compartir, reírnos y guardar recuerdos de Lia 🤍
</p>
    </section>
  );
}

function Predicciones() {
  const [vote, setVote] = useState<"mama" | "papa" | null>(null);
  const [birthDate, setBirthDate] = useState("");
const [birthDateSent, setBirthDateSent] = useState(false);

  const [personalityVote, setPersonalityVote] = useState<
  "dormilona" | "terremoto" | null
>(null);

  const mamaVotes = vote === "mama" ? 58 : 48;
  const papaVotes = vote === "papa" ? 52 : 42;

  const totalParecidoVotes = mamaVotes + papaVotes;
  
  const dormilonaVotes = personalityVote === "dormilona" ? 61 : 54;
const terremotoVotes = personalityVote === "terremoto" ? 39 : 31;

  return (
    <section>
      <Header
        title="Predicciones para Lia 🔮"
        text="Votá una sola vez y dejá tu predicción."
      />

      <div className="bg-white/15 backdrop-blur-[24px] rounded-[38px] p-6 shadow-[0_10px_30px_rgba(212,184,167,0.15)] border border-white/45">
      <div className="relative overflow-hidden rounded-[28px] shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
  <img
    src="/lia-eco.jpg"
    alt="Lia"
    className="h-[320px] w-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

  <div className="absolute bottom-0 left-0 right-0 p-5">
    <p className="text-white text-[11px] tracking-[0.3em] uppercase opacity-80">
      Lia Francesca
    </p>

    <h3 className="text-white text-3xl font-serif italic mt-1">
    ¿A quién se parecerá? ✨
    </h3>

    <p className="text-white/80 text-sm mt-2 leading-relaxed">
    La carita de Lia ya empieza a aparecer 😭 Votá a quien se parecerá más !
    </p>
  </div>
</div>

        <div className="grid grid-cols-2 gap-3">
          <button
            disabled={vote !== null}
            onClick={() => setVote("mama")}
            className={`rounded-[28px] p-4 border transition active:scale-95 hover:scale-[1.02] duration-300 ${
              vote === "mama"
                ? "bg-[#FFF3EC] border-[#F7D7C4]"
                : "bg-white border-[#F5E6DC]"
            }`}
          >
            <div className="mb-3 overflow-hidden rounded-[22px]">
  <img
    src="/mama.jpg"
    alt="Mamá"
    className="h-40 w-full object-cover object-top"
  />
</div>
            <p className="font-semibold text-[#7A5C58]">Mamá</p>
          </button>

          <button
            disabled={vote !== null}
            onClick={() => setVote("papa")}
            className={`rounded-[28px] p-4 border transition active:scale-95 hover:scale-[1.02] duration-300 ${
              vote === "papa"
                ? "bg-[#FFF3EC] border-[#F7D7C4]"
                : "bg-white border-[#F5E6DC]"
            }`}
          >
            <div className="mb-3 overflow-hidden rounded-[22px]">
  <img
    src="/papa.jpg"
    alt="Papá"
    className="h-40 w-full object-cover object-top"
  />
</div>
            <p className="font-semibold text-[#7A5C58]">Papá</p>
          </button>
        </div>

        {vote && (
          <div className="mt-6 animate-fadeIn">
            <p className="text-sm text-[#7A5C58] font-medium mb-3">
            Resultado parcial ✨ · {totalParecidoVotes} votos
            </p>

            <ResultBar label="Mamá" value={mamaVotes} />
            <ResultBar label="Papá" value={papaVotes} />
          </div>
        )}

<div className="mt-8 bg-white/40 rounded-[30px] p-5 border border-white/50">
  <div className="mb-4">
    <p className="text-[16px] font-semibold text-[#B0897F]">
      🍼 ¿Cuándo nacerá Lia?
    </p>

    <p className="text-sm text-[#A07C74] mt-2">
      Fecha probable de parto:{" "}
      <span className="font-semibold">27/07/2026</span> ✨
    </p>
  </div>

  <input
    type="date"
    value={birthDate}
    onChange={(e) => {
      setBirthDate(e.target.value);
      setBirthDateSent(false);
    }}
    className="w-full rounded-full bg-white/80 border border-[#F5E6DC] px-5 py-3 text-center text-[#7A5C58] outline-none"
  />

  <button
    disabled={!birthDate}
    onClick={() => setBirthDateSent(true)}
    className="mt-4 w-full rounded-full bg-[#F7D7C4] py-3 text-[#7A5C58] font-medium disabled:opacity-40 active:scale-95 hover:scale-[1.02] duration-300 transition"
  >
    Enviar predicción ✨
  </button>

  {birthDateSent && (
    <p className="mt-4 text-center text-sm text-[#A07C74] italic">
      Tu predicción quedó guardada:{" "}
      {birthDate.split("-").reverse().join("/")} 💖
    </p>
  )}
</div>

<div className="mt-8 bg-white/40 rounded-[30px] p-5 border border-white/50">
<div className="mb-4">
  <p className="text-[16px] font-semibold text-[#B0897F]">
    😅 ¿Cómo será Lia?
  </p>
</div>

  <div className="grid grid-cols-2 gap-3">
    <button
      disabled={personalityVote !== null}
      onClick={() => setPersonalityVote("dormilona")}
      className={`rounded-[22px] p-3 border transition active:scale-95 hover:scale-[1.02] duration-300 ${
        personalityVote === "dormilona"
          ? "bg-[#FFF3EC] border-[#F7D7C4]"
          : "bg-white border-[#F5E6DC]"
      }`}
    >
      <p className="text-sm text-[#7A5C58] font-medium">
        Dormilona 😴
      </p>
    </button>

    <button
      disabled={personalityVote !== null}
      onClick={() => setPersonalityVote("terremoto")}
      className={`rounded-[22px] p-3 border transition active:scale-95 hover:scale-[1.02] duration-300 ${
        personalityVote === "terremoto"
          ? "bg-[#FFF3EC] border-[#F7D7C4]"
          : "bg-white border-[#F5E6DC]"
      }`}
    >
      <p className="text-sm text-[#7A5C58] font-medium">
        Terremoto 🌪️
      </p>
    </button>
  </div>

  {personalityVote && (
    <div className="mt-5">
      <ResultBar label="Dormilona" value={dormilonaVotes} />
      <ResultBar label="Terremoto" value={terremotoVotes} />
    </div>
  )}
  </div>
  </div>
  </section>
);
}

function ResultBar({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="mb-3">
      <div className="flex justify-between text-xs text-[#7A5C58] mb-1">
      <span className="text-[12px] leading-none">
  {label}
</span>
        <span>{value}%</span>
      </div>

      <div className="h-3 rounded-full bg-[#FFF3EC] overflow-hidden">
        <div
          className="h-full rounded-full bg-[#F7D7C4]"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function Lia({ guestName }: { guestName: string }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
const [photos, setPhotos] = useState<string[]>([]);
const [isUploading, setIsUploading] = useState(false);
const [uploadStatus, setUploadStatus] = useState("");
const [previewUrl, setPreviewUrl] = useState("");

  const icons = ["🤍", "💛", "💗", "🧸", "🌼", "😊", "🥰", "😍", "🐝", "✨", "🎀"];
  const totalMessages = messages.length;

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) setMessages(data);
    if (error) console.error(error);
  };

  const addIcon = (icon: string) => {
    setMessage((prev) => `${prev}${icon}`);
  };

  const uploadPhoto = async () => {
    if (!selectedFile) return;
    setIsUploading(true);
setUploadStatus("");
  
    const fileName = `${Date.now()}-${selectedFile.name}`;
  
    const { error } = await supabase.storage
      .from("selfies")
      .upload(fileName, selectedFile);
  
      if (error) {
        console.error(error);
        setUploadStatus("No se pudo subir la foto. Probá otra vez.");
        setIsUploading(false);
        return;
      }
  
    const { data } = supabase.storage
      .from("selfies")
      .getPublicUrl(fileName);
  
    setSelectedFile(null);
    setUploadStatus("Selfie subida con éxito 💖");

    setTimeout(() => {
      setUploadStatus("");
    }, 3000);

setIsUploading(false);
  };

  const sendMessage = async () => {
    if (!message.trim()) return;

    const { error } = await supabase.from("messages").insert([
      {
        text: message,
        author: guestName,
        created_at: new Date(),
      },
    ]);

    if (!error) {
      setMessage("");
      fetchMessages();
    }

    if (error) console.error(error);
  };

  return (
    <section>
      <Header
        title="Mensajes para Lia 💌"
        text="Dejá un deseo para que quede guardado como recuerdo."
      />

<div className="text-center mb-5">
  <p className="text-sm text-[#B88B7D]">
    Ya hay <span className="font-semibold">{totalMessages}</span> mensajitos llenos de amor ✨
  </p>
</div>
  
      <div className="bg-white rounded-[32px] p-5 shadow-sm border border-[#F5E6DC] mb-5">
        <div className="flex flex-wrap gap-2 mb-4">
          {icons.map((icon) => (
            <button
              key={icon}
              onClick={() => addIcon(icon)}
              className="w-10 h-10 rounded-full bg-[#FFF3EC] text-xl flex items-center justify-center"
            >
              {icon}
            </button>
          ))}
        </div>
  
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escribí tu mensajito..."
          className="w-full h-32 bg-[#FFF8F3] rounded-3xl p-4 text-sm outline-none text-[#7A5C58]"
        />

  
        <button
          onClick={sendMessage}
          className="mt-4 w-full bg-[#F7D7C4] rounded-full py-3 text-[#6B4F4B]"
        >
          Enviar mensaje
        </button>
      </div>
  
      <div className="grid gap-4">
        {messages.map((item, index) => (
          <div
          key={index}
          className="relative overflow-hidden bg-white/55 backdrop-blur-[30px] rounded-[34px] p-5 border border-white/60 shadow-[0_18px_45px_rgba(212,184,170,0.22)]"
        >
          <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#FFE4EF] rounded-full blur-2xl opacity-60" />
        
          <p className="relative text-[#7A5C58] text-[15px] leading-[1.8] tracking-[0.01em]">
            {item.text}
          </p>
        
          <div className="relative mt-5 flex items-center justify-between border-t border-[#F3DDD5] pt-3">
            <p className="text-[13px] text-[#A88279] italic font-medium">
              — {item.author}
            </p>
        
            <p className="text-[11px] text-[#C6A59D] tracking-wide">
              {new Date(item.created_at).toLocaleDateString("es-AR")}
            </p>
          </div>
        </div>
        ))}
      </div>
    </section>
  );
  }

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setTimeLeft(getTimeLeft());

    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const eventStarted =
  timeLeft.days === 0 &&
  timeLeft.hours === 0 &&
  timeLeft.minutes === 0 &&
  timeLeft.seconds === 0;

  return (
    <div className="grid grid-cols-4 gap-3 text-center items-center">
      {[
        [timeLeft.days, "días"],
        [timeLeft.hours, "hs"],
        [timeLeft.minutes, "min"],
        [timeLeft.seconds, "seg"],
      ].map(([num, label]) => (
        <div className="bg-gradient-to-br from-white/55 to-[#FFF1E8]/45 backdrop-blur-2xl rounded-[28px] px-3 py-5 border border-white/50 shadow-[0_10px_24px_rgba(255,220,200,0.22)]" key={label}>
          <div className="text-[38px] font-bold text-[#6E514E] tracking-[-0.04em] leading-none flex items-center justify-center h-[44px]">
            {String(num).padStart(2, "0")}
          </div>

          <div className="text-[11px] uppercase tracking-[0.14em] text-[#B08E87] mt-1">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}

function getTimeLeft() {
  const diff = EVENT_DATE.getTime() - new Date().getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function Header({ title, text }: { title: string; text: string }) {
  return (
    <section className="mb-6">
      <h1 className="text-3xl font-serif text-[#B0897F]">{title}</h1>
      <p className="text-sm text-[#A07C74] mt-2">{text}</p>
    </section>
  );
}

function Card({
  icon,
  title,
  text,
  button,
  onClick,
}: {
  icon: string;
  title: string;
  text: string;
  button: string;
  onClick?: () => void;
}) {
  return (
    <div className="relative overflow-hidden bg-white/42 backdrop-blur-[38px] rounded-[42px] border border-white/55 shadow-[0_24px_70px_rgba(212,184,167,0.20)] p-7 hover:scale-[1.015] active:scale-[0.995] transition-all duration-500">
    <div className="absolute inset-0 bg-gradient-to-br from-white/22 via-transparent to-[#F7D7C4]/8 pointer-events-none" />
    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-[#F7D7C4]/10 pointer-events-none" />

    <div className="relative z-10 flex gap-6 items-start">
    <div className="relative w-16 h-16 rounded-[24px] bg-gradient-to-br from-white/55 to-[#FFE7D8]/45 backdrop-blur-2xl flex items-center justify-center shadow-[0_14px_35px_rgba(255,220,200,0.30)] border border-white/60">
    <div className="absolute inset-1 rounded-[20px] bg-gradient-to-br from-white/80 to-transparent opacity-70" />
    <span className="relative z-10 text-[30px]">
  {icon}
</span>
        </div>

        <div className="flex-1 pt-1">
        <h2 className={`${playfair.className} text-[24px] leading-[1.05] tracking-[-0.03em] !text-[#C17D72]drop-shadow-[0_2px_12px_rgba(255,255,255,0.35)]`}>
  {title}
</h2>
<p className={`${inter.className} text-[15px] leading-[1.9] text-[#A07C74] mt-2`}>
  {text}
</p>

          <button
            onClick={onClick}
            className="mt-5 relative overflow-hidden bg-gradient-to-r from-white/45 via-[#FFF3EC]/55 to-[#F7D7C4]/45 backdrop-blur-2xl rounded-full px-6 py-3 text-[#6B4F4B] text-[14px] font-semibold tracking-[0.02em] border border-white/60 shadow-[0_12px_28px_rgba(255,220,200,0.22)] active:scale-[0.98] transition-all duration-500"
          >
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/35 to-white/0 translate-x-[-120%] animate-shimmer" />
          <span className="relative z-10">
  {button}
</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function HeroCard({ guestName }: { guestName: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white/30 via-white/18 to-[#FFE9DD]/20 backdrop-blur-[55px] rounded-[48px] p-7 shadow-[0_25px_80px_rgba(212,184,167,0.22)] border border-white/40 animate-heroBreath">
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#F7D7C4] rounded-full blur-3xl opacity-60" />
      <div className="absolute -bottom-16 -left-10 w-44 h-44 bg-[#FFF0C9] rounded-full blur-[120px] opacity-50 animate-floatLuxury" />

      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-[#F7D7C4]/12 pointer-events-none" />
      <div className="absolute top-0 left-8 right-8 h-px bg-white/70" />  

      <div className="relative z-10 space-y-5">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#B08E87]">
            25 Mayo · 12:00 hs · Quincho Bayer
            </p>

            <h1 className={`${playfair.className} text-[58px] text-[#B0897F] mt-3 leading-[0.88] tracking-[-0.045em] drop-shadow-[0_8px_26px_rgba(255,255,255,0.42)]`}>
              Baby Shower
              <br />
              <span className="text-[#C17D72] italic">
                Lia Francesca
              </span>
            </h1>
          </div>

          <div className="relative w-16 h-16 rounded-full bg-white/45 backdrop-blur-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(212,184,167,0.22)] border border-white/50 text-3xl animate-softFloat">
            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/70 to-[#FCE7DD]/40" />
            <span className="relative z-10">🐝</span>
          </div>
        </div>

        <p className="text-[15px] text-[#8D6E68] leading-[1.75] max-w-[92%]">
  Hola {guestName} ✨ gracias por acompañarnos en este día tan especial.
  Preparamos este espacio para compartir recuerdos, fotos y mensajitos llenos de amor.
</p>
        <div className="flex gap-3 pt-2 flex-wrap">
          <div className="bg-white/40 backdrop-blur-xl px-4 py-2 rounded-full text-sm text-[#7A5C58] border border-white/40 shadow-sm">
            📍 Quincho Bayer
          </div>

          <div className="bg-white/40 backdrop-blur-xl px-4 py-2 rounded-full text-sm text-[#7A5C58] border border-white/40 shadow-sm">
            🌼 Dress comfy
          </div>

          <div className="bg-white/40 backdrop-blur-xl px-4 py-2 rounded-full text-sm text-[#7A5C58] border border-white/40 shadow-sm">
            ☁️ 15° / 9°
          </div>
        </div>
      </div>
    </section>
  );
}

function AppBackground() {
  const items = [
    { icon: "☁️", className: "top-8 left-6 text-5xl opacity-70 animate-floatLuxury" },
    { icon: "🐝", className: "top-20 right-8 text-4xl opacity-75 animate-floatLuxury" },
    { icon: "🌼", className: "top-36 left-[18%] text-3xl opacity-70 animate-floatLuxury" },
    { icon: "⭐", className: "top-48 right-[22%] text-3xl opacity-65 animate-floatLuxury" },

    { icon: "🍯", className: "top-[28%] left-4 text-4xl opacity-70 animate-floatLuxury" },
    { icon: "🐝", className: "top-[32%] right-6 text-3xl opacity-75 animate-floatLuxury" },
    { icon: "🌻", className: "top-[42%] left-[12%] text-5xl opacity-65 animate-floatLuxury" },
    { icon: "🌼", className: "top-[46%] right-[14%] text-4xl opacity-70 animate-floatLuxury" },

    { icon: "☁️", className: "top-[56%] left-6 text-5xl opacity-65 animate-floatLuxury" },
    { icon: "⭐", className: "top-[60%] right-[28%] text-3xl opacity-70 animate-floatLuxury" },
    { icon: "🐝", className: "top-[66%] left-[22%] text-3xl opacity-75 animate-floatLuxury" },
    { icon: "🍰", className: "top-[72%] right-8 text-4xl opacity-65 animate-floatLuxury" },

    { icon: "🌼", className: "bottom-28 left-5 text-4xl opacity-70 animate-floatLuxury" },
    { icon: "🍯", className: "bottom-24 right-6 text-5xl opacity-70 animate-floatLuxury" },
    { icon: "⭐", className: "bottom-44 left-[35%] text-3xl opacity-65 animate-floatLuxury" },
    { icon: "🐝", className: "bottom-52 right-[30%] text-3xl opacity-75 animate-floatLuxury" },
    { icon: "🌼", className: "top-[12%] left-[42%] text-3xl opacity-60 animate-floatLuxury" },
    { icon: "⭐", className: "top-[18%] left-[65%] text-3xl opacity-70 animate-floatLuxury" },
    { icon: "☁️", className: "top-[26%] right-[38%] text-4xl opacity-70 animate-floatLuxury" },

    { icon: "🍯", className: "top-[38%] left-[38%] text-3xl opacity-60 animate-floatLuxury" },
    { icon: "🌻", className: "top-[48%] right-[42%] text-3xl opacity-70 animate-floatLuxury" },
    { icon: "🐝", className: "top-[58%] left-[48%] text-3xl opacity-65 animate-floatLuxury" },

    { icon: "⭐", className: "top-[68%] right-[18%] text-3xl opacity-70 animate-floatLuxury" },
    { icon: "🌼", className: "top-[76%] left-[42%] text-3xl opacity-60 animate-floatLuxury" },
    { icon: "☁️", className: "bottom-[18%] right-[44%] text-4xl opacity-65 animate-floatLuxury" },

    { icon: "🍯", className: "bottom-[12%] left-[28%] text-3xl opacity-70 animate-floatLuxury" },
    { icon: "🐝", className: "bottom-[22%] right-[12%] text-3xl opacity-70 animate-floatLuxury" },
    { icon: "🌼", className: "top-[22%] left-[82%] text-3xl opacity-70 animate-floatLuxury" },
    { icon: "⭐", className: "bottom-[38%] left-[72%] text-3xl opacity-65 animate-floatLuxury" },
    { icon: "☁️", className: "bottom-[8%] left-[52%] text-4xl opacity-40 animate-floatLuxury" },
    { icon: "🐝", className: "top-[82%] right-[34%] text-3xl opacity-60 animate-floatLuxury" },
    { icon: "✨", className: "top-[8%] left-[18%] text-sm opacity-40 animate-floatLuxury" },
    { icon: "✨", className: "top-[14%] left-[28%] text-sm opacity-35 animate-floatLuxury" },
    { icon: "🌼", className: "top-[18%] left-[52%] text-3xl opacity-40 animate-floatLuxury" },

    { icon: "✨", className: "top-[22%] left-[72%] text-sm opacity-35 animate-floatLuxury" },
    { icon: "✨", className: "top-[28%] left-[82%] text-sm opacity-40 animate-floatLuxury" },
    { icon: "🌼", className: "top-[34%] left-[24%] text-lg opacity-35 animate-floatLuxury" },

    { icon: "✨", className: "top-[40%] left-[58%] text-sm opacity-35 animate-floatLuxury" },
    { icon: "✨", className: "top-[46%] left-[78%] text-sm opacity-40 animate-floatLuxury" },
    { icon: "🌼", className: "top-[52%] left-[8%] text-lg opacity-35 animate-floatLuxury" },

    { icon: "✨", className: "top-[58%] left-[36%] text-sm opacity-40 animate-floatLuxury" },
    { icon: "✨", className: "top-[64%] left-[68%] text-sm opacity-35 animate-floatLuxury" },
    { icon: "🌼", className: "top-[70%] left-[84%] text-lg opacity-35 animate-floatLuxury" },

    { icon: "✨", className: "top-[76%] left-[16%] text-sm opacity-40 animate-floatLuxury" },
    { icon: "✨", className: "top-[82%] left-[56%] text-sm opacity-35 animate-floatLuxury" },
    { icon: "🌼", className: "bottom-[12%] left-[72%] text-lg opacity-35 animate-floatLuxury" },
    ];

  return (
    <>
  <div className="absolute top-[10%] left-[8%] w-40 h-40 bg-[#FFE8D9] rounded-full blur-[90px] opacity-35" />

  <div className="absolute bottom-[12%] right-[6%] w-52 h-52 bg-[#FCE7F3] rounded-full blur-[120px] opacity-30" />

  <div className="absolute top-[45%] left-[35%] w-44 h-44 bg-[#FFF5D9] rounded-full blur-[100px] opacity-25" />
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {items.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.className} drop-shadow-[0_0_18px_rgba(255,255,255,0.35)]`}
        >
          {item.icon}
        </div>
      ))}
    </div>
    </>
  );
}