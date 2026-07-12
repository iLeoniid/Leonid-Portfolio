import { Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon, TwitterIcon } from "../ui/SocialIcons"
import { personalInfo } from "../../data/portfolio"

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-neutral-500">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={personalInfo.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <TwitterIcon size={18} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
