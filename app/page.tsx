import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Image } from "@heroui/image";
import myPhoto from "@/public/profile-Photoroom (1).jpg";
export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-1 md:py-10">
        <Image
          className="rounded-full shadow-lg border border-default-200 dark:border-default-700 w-40 h-40 md:w-56 md:h-56"
          alt=" Mahmoud Gamal - MGCODE"
          src="https://lh3.googleusercontent.com/a/ACg8ocIqGEtb3ONENhYaRQbeQOfYeHr9kqDIBixq8qR8A2ST76qf9_o=s360-c-no"
        />
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title({ color: "violet" })}>MgCode&nbsp;</span>
          <br />
          <span className={title()}>We craft, not just code.</span>
          <br />
          <div className={subtitle({ class: "mt-4 " })}>
            Empowering scalable websites for every vision.
          </div>
        </div>
        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Download CV
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>
      </section>
    </>
  );
}
