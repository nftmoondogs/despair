import { Button } from "~/components/ui/button";
import { Link } from "@remix-run/react";
import { Command } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";
import { ThemeToggle } from "./resources.theme-toggle";
import { Hero3DCard } from "~/components/hero-3d-card";
import { Card2 } from "~/components/card2";
import { SparklesCore } from "~/components/ui/sparkles";
import { TextGenerateEffect } from "~/components/ui/text-generate-effect";
import { LampDemo } from "~/components/ui/lamp";
import { CardStack } from "~/components/ui/card-stack"; 

import { TextRevealCard, TextRevealCardTitle, TextRevealCardDescription } from "~/components/ui/text-reveal-card";
import { AnimatedTooltipPreview } from "~/components/animated-preview";
import { HeroParallax } from "~/components/ui/hero-parallax";  // Corrected import path
import { AnimatedPinDemo } from "~/components/animated-3d-pin";


const stackCards = [
  {
    id: 1,

    content: (
<div>
  <h3 className="text-lg font-bold pb-8">Sup! Dawg👋</h3>

  <ul className="list-disc list-inside text-left">

    <li>See for yourself Dev is a chad</li>
    <li>The Art is sick and memeable af</li>
    <li>Dexscreener, Coingecko requested</li>
    <li>Active Tweets and Spaces</li>
    <li>Foot is Pink🤯🩷</li>
  </ul>
</div>

    )
  }
];
// Sample product data for HeroParallax
const sampleProducts = [
  { title: "", link: "/product-1", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F18531%252F7d1c5493-1da5-4a75-b31d-0fa5975c70f8%252Furi%252Fimage-2023-08-28-22-08-hml2x?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=9c93698b77d10966f068798455de778b" },
  { title: "", link: "/product-2", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F46984%252F25d1271e3a41da08a3c5085c921d2b2021ee8ba1ec2a269503d964e475c0aee5.gif?ixlib=js-3.8.0&width=550&height=550&format=avif&fit=crop&quality=75&video=false&name=ImageMedium&auto=format%2Ccompress&s=33b3a214c2ae7c076ece2a43f9b689c1" },
  { title: "", link: "/product-3", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F46302%252F15bffe7c-015a-4d4e-afd0-903c3f6f8506%252Furi%252Fimage-2023-10-07-12-59-406sy?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=bd601265308a386a30af9f649a5cc50c" },
  { title: "", link: "/product-4", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F44558%252Fi6yjvf?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=c667cb9c7f9fb053d1e1d4f75e52d555" },
  { title: "", link: "/product-5", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F43460%252Fk3yt5?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=7bd7f2bc009481ca1375a7f5c2374f4e" },
  { title: "", link: "/product-6", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F41415%252F08crc?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=41988cb8ab0c59e83b88f0ce3c7f4220" },
  { title: "", link: "/product-7", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F40069%252F9f64b91c-d146-42b7-964b-5082eac62169%252Furi%252Fimage-2023-08-28-22-12-huio9?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=705ccdb37b951af14ee752eeee8ddca0" },
  { title: "", link: "/product-8", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F35683%252F9838ef87-6c1b-4a26-9e9f-ac9febb898a8%252Furi%252Fimage-2023-08-28-22-40-7u8po?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=b5c1faf7f9b87701c8bcff5210477c0d" },
  { title: "", link: "/product-9", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F33792%252Fsmxzwj?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=4eb5c5a37dfd4ee2450dd0c6a3acd7c0" },
  { title: "", link: "/product-10", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F30648%252Fe8e6a?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=45585bab921e1a4dfdfdb36802e156aa" },
  { title: "", link: "/product-11", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F29241%252F5c76f619-cef4-42da-8d9f-1ee122a6b65a%252Furi%252Fimage-2023-08-28-23-08-2krspi?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=689bea73d772ad6da04075d8ce7452a1" },
  { title: "", link: "/product-12", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F26456%252F06462b5d-e9d9-425b-8da5-e6cac5f14d80%252Furi%252Fimage-2023-08-28-21-59-nsilz?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=9934a60a039a053831801aedac4a23d1" },
  { title: "", link: "/product-13", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F24110%252F26a43d6a-82d8-43ed-889f-970878d28e28%252Furi%252Fimage-2023-08-28-23-02-mwdip?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=a8c08449a2d266171fba63a655683ab9" },
  { title: "", link: "/product-14", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F19670%252Fc152cefb-5259-4d54-9fbd-7df08e573de0%252Furi%252Fimage-2023-08-28-22-13-p7m61?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=021c957ae30b48ee6fb982634d2d8c10" },
  { title: "", link: "/product-15", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F17669%252F03d21b46-1322-4035-89c9-96d3daab7f18%252Furi%252Fimage-2023-08-10-20-11-m2v4j?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=a05755518cc08ff5afc5eb6e2ce0f589" },
];

export default function Index() {
  return (
    <section className="w-full min-h-screen flex flex-col">
<nav className="flex items-center justify-between p-4 w-full">
  <Link to="/" className="flex items-center space-x-2">
    <img src="https://ipfs.pixura.io/ipfs/QmXLteujd3E3prBa5phkkcshVVamdq82vRDZdb1jiZ85WW/eye2.gif" alt="Logo" className="h-20 w-20 mr-2"/> {/* Logo Image */}
    <h1 className="text-3xl md:text-4xl font-bold tracking-tighter font-extrabold bg-gradient-to-r from-red-800 via-red-300 to-red-50 text-transparent bg-clip-text bg-300% animate-gradient">$Despair</h1>
  </Link>
  <ThemeToggle />
</nav>








{/* <div className="flex-1 min-w-0">
    <CardStack
      items={stackCards}
      offset={30}
      scaleFactor={0.95}
    />
  </div>

  <div className="flex items-center justify-center space-x-4"> 
  <div className="flex items-center justify-center  w-full">
    <TextRevealCard
      text="Hover to reveal"
      revealText="Radium is coming!"
      className="cursor-pointer md:w-full"
    />
  </div>
</div> */}
          <div className="flex items-center justify-center w-full">
  <Card2 />
  <Hero3DCard />
  <Hero3DCard />
  <Card2 />
</div>

<div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>

<h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-red-800">
            The{" "}
            <span className="font-extrabold bg-gradient-to-r from-red-800 via-red-300 to-red-50 text-transparent bg-clip-text bg-300% animate-gradient">
            $Despair
            </span>{" "}
            Destruction of {" "}
            <Link
              to="https://pump.fun/board"
              className="font-extrabold bg-gradient-to-r from-red-800 via-red-300 to-red-50 text-transparent bg-clip-text bg-300% animate-gradient hover:text-emerald-500"
            >
              Pump.Fun
            </Link>
          </h1>



  
          <SparklesCore
        className="absolute top-0 left-0 w-full h-full z-[-1]"
        particleColor="#FFC0CB"  // White particles
        particleDensity={10}     // Moderate density
        speed={3}                // Medium speed
        minSize={1}              // Minimum size of particles
        maxSize={3}              // Maximum size of particles
      />
          </div>


          <div className="flex items-center justify-center  w-full ">
        <div className="flex flex-col items-center space-y-4 text-center p-4 md:w-1/2">
        <TextGenerateEffect words={"This token is not scary it just wants you to be a good degen boy and lose hope, give up hope, Sending to Radium is for loosers, abandon hope, give up, pain, misery, Despair Despair Despair Despair Despair DESPAIR!!!!!!!!!!!!!!!!!"} />
     
        </div>

          </div>

          <div className="flex items-center justify-center  w-full ">
        <div className="flex flex-col items-center space-y-4 text-center p-4 md:w-1/2">


          

          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
  <Card className="relative group overflow-hidden rounded-lg">

    <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-300 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
        <Link to="https://twitter.com/DespairToken">
        Twitter
        </Link>
        </div>
      </button>

  </Card>
  <Card className="relative group overflow-hidden rounded-lg">

    <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-300 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
        <Link to="https://pump.fun/board">
          Pump.Fun💊
        </Link>
        </div>
      </button>

  </Card>
  <Card className="relative group overflow-hidden rounded-lg">

    <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-300 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
        <Link to="https://t.me/despaircommunity">
        Telegram
        </Link>
        </div>
      </button>

  </Card>
</div>



          </div>
          {/* <LampDemo />  */}
        </div>
        
<div className="flex items-center justify-between p-4 w-full">          <HeroParallax products={sampleProducts} />  {/* Full-width HeroParallax component */}</div>
    </section>
  );
}
