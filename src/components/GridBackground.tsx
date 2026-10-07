export default function GridBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
      <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-blue/10 blur-[140px]" />
      <div className="absolute top-[38vh] right-[-10%] h-[420px] w-[420px] rounded-full bg-purple/10 blur-[130px]" />
      <div className="absolute bottom-[-10%] left-[-8%] h-[380px] w-[380px] rounded-full bg-green/10 blur-[120px]" />
    </div>
  );
}
