interface WeatherDetailsCardProps {
  title: string;
  value: string;
}

function WeatherDetailsCard({ title, value }: WeatherDetailsCardProps) {
  return (
    <div
      className="bg-neutral-800 p-4 rounded-lg border-1
      border-solid
      border-neutral-600"
    >
      <h4 className="text-sm text-neutral-300 mb-4">{title}</h4>
      <p className="text-lg font-semibold">{value}</p>
    </div>
  );
}

export default WeatherDetailsCard;
