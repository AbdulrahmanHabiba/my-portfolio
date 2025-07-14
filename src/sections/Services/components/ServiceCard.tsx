// components/ServiceCard.tsx

interface Props {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function ServiceCard({ title, description, icon }: Props) {
  return (
    <div className="flex items-start gap-4 p-6 sm:p-8 rounded-xl border border-[color:var(--neon-purple)] bg-card hover:shadow-[0_0_30px_rgba(255,0,255,0.2)] active:shadow-[0_0_30px_rgba(255,0,255,0.2)] transition-all">
    {/* Icon */}
    <div className="text-3xl sm:text-4xl text-[color:var(--neon-purple)]">
      {icon}
    </div>

    {/* Text content */}
    <div>
      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{description}</p>
    </div>
  </div>
  );
}
