import Image from "next/image";
import Link from "next/link";

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
    <article className="speaking-card-outer" style={{ background: color }}>
      <div className="speaking-card-inner" style={{ background: color }}>
        <span className="speaking-card-label">{subject}</span>
        <h2 className="speaking-card-question">{name}</h2>
        <p className="text-sm text-neutral-500">{topic}</p>
        <div className="flex items-center gap-2 text-neutral-500">
          <Image
            src="/icons/clock.svg"
            alt="duration"
            width={13.5}
            height={13.5}
          />
          <p className="text-sm">{duration} minutes</p>
        </div>
        <Link href={`/companions/${id}`} className="w-full">
          <button className="btn-primary w-full justify-center">
            Launch lesson
          </button>
        </Link>
      </div>
    </article>
  );
};

export default CompanionCard;
