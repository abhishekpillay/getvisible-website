// Simple industry section without external icon dependencies

const industries = [
  {
    name: 'FinTech',
    description: 'Grow visibility and trust in a regulated space',
    emoji: '💼',
    color: 'bg-blue-50',
  },
  {
    name: 'AI & DeepTech',
    description: 'Turn complex products into search-friendly narratives',
    emoji: '🧠',
    color: 'bg-purple-50',
  },
  {
    name: 'Productivity SaaS',
    description: 'Win intent-driven search terms in competitive categories',
    emoji: '📈',
    color: 'bg-green-50',
  },
];

export default function IndustriesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-10 text-center">Industries we specialize in:</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {industries.map(({ name, description, emoji, color }) => (
            <div
              key={name}
              className={`rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 p-8 flex flex-col items-center text-center ${color}`}
            >
              <span className="text-4xl mb-4" role="img" aria-label={name}>{emoji}</span>
              <h3 className="text-xl font-semibold mb-2">{name}</h3>
              <p className="text-gray-600 text-base">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
