import { DeleteIcon, Trash, Trash2, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CompanionsList from "./CompanionsList";
interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
}

const CompanionCard = ({
  id,
  name,
  topic,
  subject,
  duration,
  color,
}: CompanionCardProps) => {
  return (
    <article
      className="companion-card shadow-gray-800 hover:scale-102 backdrop-blur-5xl bg-amber-50 transition-transform duration-300 hover:shadow-2xl "
      style={{ backgroundColor: color }}
    >
      <div className="flex justify-between items-center">
        <div className="subject-badge flex justify-center items-center">
          {subject}
        </div>

        <button className="companion-bookmark flex justify-center items-center">
          <Image
            src="/icons/bookmark.svg"
            alt="bookmark"
            width={12.5}
            height={13.5}
          />
        </button>
      </div>
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-sm">{topic}</p>
      <div className="flex items-center gap-2">
        <Image
          src="/icons/clock.svg"
          alt="duration"
          width={13.5}
          height={13.5}
        />
        <p className="text-sm">{duration} mins duration</p>
      </div>
      <div className="flex gap-2 justify-center">
        <Link href={`companions/${id}`} className="w-full">
          <button className="hover:bg-green-500 transition duration-300 btn-primary w-full justify-center">
            Launch Lesson
          </button>
        </Link>
        <button>
          <X
            color="black"
            size={20}
            className="active:scale-95 bg-red-500 h-10 w-10 rounded-2xl cursor-pointer duration-100"
          />
        </button>
      </div>
    </article>
  );
};

export default CompanionCard;
