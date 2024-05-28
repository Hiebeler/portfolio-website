import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Typewriter from "typewriter-effect";
import {
  EnvelopeSimple,
  GithubLogo,
  InstagramLogo,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import ProjectPopup from "@/components/projectPopup";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const randomChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const instagramNameFinished = "@hiebeler05";
  const [instagramName, setInstagramName] = useState<string>(
    instagramNameFinished
  );
  const githubNameFinished = "Hiebeler";
  const [githubName, setGithubName] = useState<string>(githubNameFinished);
  const nameFinished = "Emanuel Hiebeler";
  const [name, setName] = useState<string>(nameFinished);
  let AgeFinished = "";
  const [age, setAge] = useState<string>("");
  const emailFinished = "emanuel.hiebeler@gmail.com";
  const [email, setEmail] = useState<string>(emailFinished);
  const residenceFinished = "Lustenau, Austria";
  const [residence, setResidence] = useState<string>(residenceFinished);
  const pixelixFinished = "Pixelix";
  const [pixelix, setPixelix] = useState<string>("");
  const [pixelixPopupOpen, setPixelixPopupOpen] = useState<Boolean>(false);
  const kommiunitiFinished = "Kommiuniti";
  const [kommiuniti, setKommiuniti] = useState<string>("");
  const [kommiunitiPopupOpen, setKommiunitiPopupOpen] =
    useState<Boolean>(false);

  useEffect(() => {
    AgeFinished = getAge().toString() + " years";
    setAge(AgeFinished);
    console.log(age);
    randomTextAnimation(nameFinished, setName);
    randomTextAnimation(AgeFinished, setAge);
    randomTextAnimation(emailFinished, setEmail);
    randomTextAnimation(residenceFinished, setResidence);
    randomTextAnimation(instagramNameFinished, setInstagramName);
    randomTextAnimation(githubNameFinished, setGithubName);
    randomTextAnimation(pixelixFinished, setPixelix);
    randomTextAnimation(kommiunitiFinished, setKommiuniti);
  }, []);

  function randomTextAnimation(name: string, setter: Function) {
    let iterations: number = 0;

    const interval = setInterval(() => {
      let localName = name;
      localName = localName
        .split("")
        .map((char, index) => {
          if (index < iterations) {
            return name[index];
          }
          if (char === " ") {
            return " ";
          }
          return randomChars[Math.floor(Math.random() * randomChars.length)];
        })
        .join("");

      setter(localName);

      if (iterations >= name.length) {
        clearInterval(interval);
        return;
      }

      iterations += 1 / 4;
    }, 30);
  }

  function getAge() {
    const birthDate = new Date("2005-05-03");
    const currentDate = new Date();
    const diff = currentDate.getTime() - birthDate.getTime();
    const age = new Date(diff).getFullYear() - 1970;
    return age;
  }

  return (
    <>
      <Head>
        <title>Emanuel Hiebeler</title>
        <meta name="description" content="Portfolio for Emanuel Hiebeler, a Programmer from Austria" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-background h-screen flex flex-wrap-reverse flex-row max-w-screen text-[#fff]">
        <div className="basis-full xl:basis-3/5 flex justify-center sm:items-center">
          <div className="text-sm sm:text-xl md:text-3xl max-w-[100vw]">
            <p className="break-normal">
              <span className="text-secondary">&lt;</span>
              <span className="text-primary">name</span>
              <span className="text-secondary">&gt;</span>
              <span className="">{name}</span>
              <span className="text-secondary">&lt;/</span>
              <span className="text-primary">name</span>
              <span className="text-secondary">&gt;</span>
            </p>
            <p>
              <span className="text-secondary">&lt;</span>
              <span className="text-primary">age</span>
              <span className="text-secondary">&gt;</span>
              <span className="">{age}</span>
              <span className="text-secondary">&lt;/</span>
              <span className="text-primary">age</span>
              <span className="text-secondary">&gt;</span>
            </p>
            <p>
              <span className="text-secondary">&lt;</span>
              <span className="text-primary">email</span>
              <span className="text-secondary">&gt;</span>
              <span className="">{email}</span>
              <span className="text-secondary">&lt;/</span>
              <span className="text-primary">email</span>
              <span className="text-secondary">&gt;</span>
            </p>
            <p>
              <span className="text-secondary">&lt;</span>
              <span className="text-primary">residence</span>
              <span className="text-secondary">&gt;</span>
              <span className="">{residence}</span>
              <span className="text-secondary">&lt;/</span>
              <span className="text-primary">residence</span>
              <span className="text-secondary">&gt;</span>
            </p>
            <br />
            <p>
              <span className="text-secondary">&lt;</span>
              <span className="text-primary">social</span>
              <span className="text-secondary">&gt;</span>
            </p>
            <p>
              &nbsp;&nbsp;
              <span className="text-secondary">&lt;</span>
              <span className="text-primary">
                <InstagramLogo className="inline" />
              </span>
              <span className="text-secondary">&gt;</span>
              <a
                className="hover:cursor-pointer hover:underline"
                href="https://www.instagram.com/hiebeler05/"
                onMouseEnter={() =>
                  randomTextAnimation(instagramNameFinished, setInstagramName)
                }
              >
                {instagramName}
              </a>
              <span className="text-secondary">&lt;/</span>
              <span className="text-primary">
                <InstagramLogo className="inline" />
              </span>
              <span className="text-secondary">&gt;</span>
            </p>
            <p>
              &nbsp;&nbsp;
              <span className="text-secondary">&lt;</span>
              <span className="text-primary">
                <GithubLogo className="inline" />
              </span>
              <span className="text-secondary">&gt;</span>
              <a
                className="hover:cursor-pointer hover:underline"
                href="https://github.com/Hiebeler/"
                onMouseEnter={() =>
                  randomTextAnimation(githubNameFinished, setGithubName)
                }
              >
                {githubName}
              </a>
              <span className="text-secondary">&lt;/</span>
              <span className="text-primary">
                <GithubLogo className="inline" />
              </span>
              <span className="text-secondary">&gt;</span>
            </p>
            <p>
              <span className="text-secondary">&lt;/</span>
              <span className="text-primary">social</span>
              <span className="text-secondary">&gt;</span>
            </p>
            <br />
            <p>
              <span className="text-secondary">&lt;</span>
              <span className="text-primary">projects</span>
              <span className="text-secondary">&gt;</span>
            </p>
            <p>
              &nbsp;&nbsp;
              <span className="text-secondary">&lt;</span>
              <span className="text-primary">title</span>
              <span className="text-secondary">&gt;</span>
              <span
                className="hover:cursor-pointer hover:underline"
                onMouseEnter={() =>
                  randomTextAnimation(pixelixFinished, setPixelix)
                }
                onClick={() => setPixelixPopupOpen(true)}
              >
                {pixelix}
              </span>
              <span className="text-secondary">&lt;/</span>
              <span className="text-primary">title</span>
              <span className="text-secondary">&gt;</span>
            </p>
            <p>
              &nbsp;&nbsp;
              <span className="text-secondary">&lt;</span>
              <span className="text-primary">title</span>
              <span className="text-secondary">&gt;</span>
              <span
                className="hover:cursor-pointer hover:underline"
                onMouseEnter={() =>
                  randomTextAnimation(kommiunitiFinished, setKommiuniti)
                }
                onClick={() => setKommiunitiPopupOpen(true)}
              >
                {kommiuniti}
              </span>
              <span className="text-secondary">&lt;/</span>
              <span className="text-primary">title</span>
              <span className="text-secondary">&gt;</span>
            </p>
            <p>
              <span className="text-secondary">&lt;/</span>
              <span className="text-primary">projects</span>
              <span className="text-secondary">&gt;</span>
            </p>
          </div>
        </div>
        <div className="basis-full xl:basis-2/5 xl:mt-0 mt-10 xl:max-h-[100%] max-h-[80%] flex items-center pb-10 md:pb-0">
          <div className="w-3/5 lg:w-3/5 xl:w-4/5 h-full relative mx-auto ">
            <Image
              className="absolute !top-1/2 -translate-y-1/2 object-contain rounded-lg !h-min max-h-full grayscale rotate-3"
              fill
              src={"/images/me.jpg"}
              alt=""
            />
          </div>
        </div>
        {pixelixPopupOpen ? (
          <ProjectPopup
            title="Pixelix"
            description="Pixelix is a user-friendly Android client for Pixelfed, a fediverse platform dedicated to photo sharing. With Pixelix, users can effortlessly access their Pixelfed accounts, upload photos, and browse posts, providing a seamless and enjoyable experience."
            logoPath={"/images/pixelix_logo.webp"}
            programmingLanguages={[
              {link: "https://www.android.com/", imagePath: "/images/android.svg"},
              {link: "https://developer.android.com/develop/ui/compose", imagePath: "/images/jetpack_compose_logo.png"},
              {link: "https://kotlinlang.org/", imagePath: "/images/kotlin.svg"},
            ]}
            website="https://pixelix.vercel.app"
            github={["https://github.com/daniebeler/pixelix"]}
            playStore={"https://play.google.com/store/apps/details?id=com.daniebeler.pfpixelix"}
            closePopup={() => {
              setPixelixPopupOpen(false);
            }}
          />
        ) : null}
        {kommiunitiPopupOpen ? (
          <ProjectPopup
            title="Kommiuniti"
            description="Kommiuniti is a web app designed to streamline community management. You can assign and manage tasks such as cooking and cleaning, ensuring everyone knows their responsibilities. The app features a collective shopping list that keeps all community members informed about needed items. Additionally, Kommiuniti includes a debt manager to easily track and manage communal finances."
            logoPath={"/images/kommiuniti_logo.svg"}
            programmingLanguages={[
              {link: "https://nodejs.org", imagePath: "/images/nodeJs.svg"},
              {link: "https://mariadb.org/", imagePath: "/images/mariaDb.svg"},
              {link: "https://angular.io/", imagePath: "/images/angular.svg"},
            ]}
            website="https://kommiuniti.netlify.app/"
            github={["https://github.com/Hiebeler/Community-Frontend", "https://github.com/Hiebeler/Community-Backend"]}
            playStore={null}
            closePopup={() => {
              setKommiunitiPopupOpen(false);
            }}
          />
        ) : null}
      </main>
    </>
  );
}
