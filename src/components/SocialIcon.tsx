import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaGlobe,
} from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const icons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaXTwitter,
  email: HiOutlineMail,
  instagram: FaInstagram,
  youtube: FaYoutube,
  website: FaGlobe,
};

export default function SocialIcon({ icon }: { icon: string }) {
  const Icon = icons[icon as keyof typeof icons] ?? FaGlobe;
  return <Icon className="h-6 w-6" />;
}
