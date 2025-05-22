import { BriefcaseIcon, CpuChipIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const industries = [
  {
    name: 'FinTech',
    description: 'Grow visibility and trust in a regulated space',
    icon: BriefcaseIcon,
    color: 'bg-blue-50',
  },
  {
    name: 'AI & DeepTech',
    description: 'Turn complex products into search-friendly narratives',
    icon: CpuChipIcon,
    color: 'bg-purple-50',
  },
  {
    name: 'Productivity SaaS',
    description: 'Win intent-driven search terms in competitive categories',
    icon: ChartBarIcon,
    color: 'bg-green-50',
  },
];

export default function IndustriesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-10 text-center">Industries we specialize in:</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {industries.map(({ name, description, icon: Icon, color }) => (
            <div
              key={name}
              className={`rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 p-8 flex flex-col items-center text-center ${color}`}
            >
              <Icon className="h-12 w-12 text-primary mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-2">{name}</h3>
              <p className="text-gray-600 text-base">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
