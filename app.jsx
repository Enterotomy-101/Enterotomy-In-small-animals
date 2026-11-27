const { useState } = React;
const asset = (f) => `assets/${f}`;

function Paw({ className = "", style }) {
  return (
    <svg className={`paw ${className}`} style={style} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <ellipse cx="13" cy="29" rx="7" ry="10" transform="rotate(-22 13 29)" />
      <ellipse cx="25" cy="14" rx="7" ry="10" transform="rotate(-8 25 14)" />
      <ellipse cx="40" cy="14" rx="7" ry="10" transform="rotate(8 40 14)" />
      <ellipse cx="52" cy="29" rx="7" ry="10" transform="rotate(22 52 29)" />
      <path d="M32 30c-9 0-18 9-18 17 0 6 5 8 10 7 3-.7 5-1.5 8-1.5s5 .8 8 1.5c5 1 10-1 10-7 0-8-9-17-18-17z" />
    </svg>
  );
}

function VideoSection() {
  const [playing, setPlaying] = useState(false);
  return (
    <section className="video">
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${window.VIDEO_ID}?autoplay=1&rel=0`}
          title="Enterotomy in Small Animals"
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <button className="thumb" onClick={() => setPlaying(true)} aria-label="Play video: Enterotomy in Small Animals">
          <img src={asset("thumbnail.jpg")} alt="Enterotomy in Small Animals" />
        </button>
      )}
    </section>
  );
}

function TeamHeader() {
  return (
    <header className="head">
      <div className="title">
        <Paw className="paw-l" />
        <h1>Team Members</h1>
        <Paw className="paw-r" />
      </div>
      <div className="sec"><i /><span>Section W</span><i /></div>
    </header>
  );
}

function TeamTable({ members }) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr><th>#</th><th>Name</th><th>Code</th></tr>
        </thead>
        <tbody>
          {members.map((m, i) => (
            <tr key={m.code} className={m.tone}>
              <td className="n">{i + 1}</td>
              <td>{m.name}</td>
              <td>{m.code}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DecorativeAnimals() {
  return (
    <div className="deco-row" aria-hidden="true">
      <img className="deco deco-l" src={asset("deco-left.jpg")} alt="" />
      <img className="deco deco-r" src={asset("deco-right.jpg")} alt="" />
    </div>
  );
}

function TeamSection({ members }) {
  return (
    <section className="card">
      <div className="card-grid">
        <img className="logo logo-l" src={asset("logo-faculty.png")} alt="Faculty of Veterinary Medicine, Cairo University" />
        <TeamHeader />
        <img className="logo logo-r" src={asset("logo-department.png")} alt="Department of Surgery, Anesthesiology and Radiology" />
        <TeamTable members={members} />
      </div>
      <DecorativeAnimals />
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <svg className="wave" viewBox="0 0 1000 60" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 30C150 10 300 50 500 28S850 8 1000 34V60H0Z" fill="#ead6ae" />
        <path d="M0 42C160 20 320 58 520 38S860 18 1000 44V60H0Z" fill="#47291a" />
      </svg>
      <div className="foot">
        <div className="foot-in">
          <i className="line" /><Paw /><i className="dash" />
          <p>Under Supervision: Dr. Mohamed Said</p>
          <i className="dash" /><Paw /><i className="line" />
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <main className="page">
        <VideoSection />
        <TeamSection members={window.TEAM_MEMBERS} />
      </main>
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
