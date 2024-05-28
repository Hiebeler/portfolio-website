import Image from "next/image";

interface ProjectPopupProps {
  title: string;
  logoPath: string | null;
  description: string;
  programmingLanguages: ProgrammingLanguageItem[];
  website: string;
  github: string[];
  playStore: string | null;
  closePopup: () => void;
}

interface ProgrammingLanguageItem {
  link: string;
  imagePath: string;
}

const ProjectPopup = (props: ProjectPopupProps) => {
  return (
    <div className="absolute w-screen h-screen backdrop-blur-sm grid place-content-center">
      <div className="bg-[#41444b] p-6 flex flex-col max-w-3xl rounded-lg">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-5">
            {props.logoPath != null ? (
              <Image
                src={props.logoPath}
                alt={"Pixelix Logo"}
                width={70}
                height={70}
              />
            ) : null}
            <h2 className="text-4xl">{props.title}</h2>
          </div>
          <button onClick={props.closePopup}>
            <p className="text-3xl">&#x2715;</p>
          </button>
        </div>
        <div className="mt-4">{props.description}</div>
        <div className="mt-4">
          <h4 className="text-2xl">Programming languages/Frameworks:</h4>
          <div className="flex flex-row gap-4">
            {props.programmingLanguages.map(
              (programmingLanguage: ProgrammingLanguageItem) => (
                <a href={programmingLanguage.link}>
                  <Image
                    src={programmingLanguage.imagePath}
                    alt="Programminglanguage Logo"
                    width={60}
                    height={60}
                  />
                </a>
              )
            )}
          </div>
        </div>
        <div className="mt-4">
          <h4 className="text-2xl">Website:</h4>
          <a
            className="hover:cursor-pointer hover:underline"
            href={props.website}
          >
            {props.website}
          </a>
        </div>
        {props.playStore != null ? (
          <div className="mt-4">
            <h4 className="text-2xl">Play Store:</h4>
            <a
              className="hover:cursor-pointer hover:underline"
              href={props.playStore}
            >
              {props.playStore}
            </a>
          </div>
        ) : null}
        <div className="mt-4">
          <h4 className="text-2xl">Github:</h4>
          <div className="flex flex-col">
            {props.github.map((githubLink: string) => (
              <a
                className="hover:cursor-pointer hover:underline"
                href={githubLink}
              >
                {githubLink}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPopup;
