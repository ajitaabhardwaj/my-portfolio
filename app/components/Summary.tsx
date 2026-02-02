import { FileText, Github, Linkedin, Mail } from "lucide-react";

const basePill =
  "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm no-underline border transition-colors";

const greenPill =
  basePill +
  " bg-green-500 text-green-950 border-white/10 hover:bg-green-600";


  const neutralPill =
  basePill +
  " bg-white/[0.06] text-white/85 border-white/15 hover:bg-white/[0.10]";


export default function Summary() {
  return (
    <div className="mt-2">
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="https://github.com/ajitaabhardwaj"
          target="_blank"
          rel="noopener noreferrer"
          className={neutralPill}
          aria-label="Open GitHub"
        >
          <Github size={18} />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/ajitabhardwaj/"
          target="_blank"
          rel="noopener noreferrer"
          className={neutralPill}
          aria-label="Open LinkedIn"
        >
          <Linkedin size={18} />
          <span>LinkedIn</span>
        </a>

        <a href="mailto:abhard46@asu.edu" className={neutralPill} aria-label="Send email">
          <Mail size={18} />
          <span>Email</span>
        </a>

        <a
          href="/Ajita_Bhardwaj_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={greenPill}
          aria-label="Open resume"
        >
          <FileText size={18} />
          <span>Resume</span>
        </a>
      </div>
    </div>
  );
}
