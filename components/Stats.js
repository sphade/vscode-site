const Stats = () => {
  return (
    <div className="stats bg-secondary w-full shadow text-word">
      <div className="stat text-word  bg-blue-500 place-items-center place-content-center">
        <div className="stat-title">APPs Made</div>
        <div className="stat-value">100+</div>
        <div className="stat-desc">in just 5 years</div>
      </div>
      <div className="stat text-word bg-red-400 place-items-center place-content-center">
        <div className="stat-title">Lines Of Code</div>
        <div className="stat-value ">5000+</div>
        <div className="stat-desc "> ↗︎400 (22%)</div>
      </div>
      <div className="stat text-word bg-green-500 place-items-center place-content-center">
        <div className="stat-title">Coffe Cunsumption</div>
        <div className="stat-value ">1,200</div>
        <div className="stat-desc ">↗︎ 90 (14%)</div>
      </div>
    </div>
  );
};

export default Stats;
