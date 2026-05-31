import Image from "next/image";
import Link from "next/link";
import styles from "./CompanionCard.module.css";

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
    <article className={styles.cardOuter} style={{ background: color }}>
      <div className={styles.cardInner} style={{ background: color }}>
        <span className={styles.label}>{subject}</span>
        <h2 className={styles.question}>{name}</h2>
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
        <Link href={`/companions/${id}`} className="w-full flex justify-center">
          <button
            className={styles.btn}
            style={{ background: `color-mix(in srgb, ${color} 80%, black)` }}
          >
            Launch lesson
          </button>
        </Link>
      </div>
    </article>
  );
};
export default CompanionCard;
