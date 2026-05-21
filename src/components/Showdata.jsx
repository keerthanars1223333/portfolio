import React from "react";

function Showdata({ photos = [] }) {
  return (
    <div style={styles.container}>
      {/* Background Quantum Mesh/Glows */}
      <div className="bg-glow-1"></div>
      <div className="bg-glow-2"></div>
      <div className="bg-glow-3"></div>

      {/* Headline Container */}
      <div className="title-container">
        <h1 style={styles.title} className="main-title">
          Verified Gallery
        </h1>
        <div className="title-underline"></div>
      </div>

      <div style={styles.grid} className="perspective-grid">
        {photos && photos.map((photo, index) => (
          <div 
            key={photo.id} 
            style={{
              ...styles.card,
              animationDelay: `${index * 0.08}s`
            }} 
            className="new-user-card"
          >
            {/* Inner Content Wrapper */}
            <div className="card-inner-content">
              
              {/* 📸 ഒറിജിനൽ ഫോട്ടോ ലോഡ് ചെയ്യുന്ന ഇമേജ് ടാഗ് */}
              <img 
                src={photo.thumbnailUrl} 
                alt={photo.title} 
                style={styles.avatar} 
                className="avatar-glow"
                onError={(e) => {
                 
                  e.target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop";
                }}
              />
              
              <h2 style={styles.name}>
                {photo.title.length > 22 ? photo.title.substring(0, 22) + "..." : photo.title}
              </h2>
              <p style={styles.username}>Photo ID: #{photo.id}</p>
              
              <div style={styles.divider}></div>
              
              <p style={styles.email}>
                <span style={styles.icon}>📁</span>
                Album ID: {photo.albumId}
              </p>

              <a 
                href={photo.url} 
                target="_blank" 
                rel="noreferrer" 
                style={styles.link}
              >
                <span style={styles.icon}>🔗</span>
                View Full Image
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* ✨ High-Level CSS Engine */}
      <style>{`
        body {
          margin: 0;
          background-color: #03050c;
          overflow-x: hidden;
        }

        .title-container {
          text-align: center;
          margin-bottom: 70px;
          animation: cinematicTitleEntrance 1.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .main-title {
          background: linear-gradient(90deg, #00f2fe 0%, #7f00ff 33%, #ff007f 66%, #00f2fe 100%) !important;
          background-size: 300% auto !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          display: inline-block;
          animation: 
            chromaticShine 6s linear infinite,
            textPulseGlow 3s ease-in-out infinite alternate;
        }

        .title-underline {
          height: 3px;
          width: 60px;
          background: linear-gradient(90deg, #00f2fe, #7f00ff, #ff007f);
          margin: 18px auto 0;
          border-radius: 20px;
          box-shadow: 0 0 25px rgba(0, 242, 254, 0.7);
          animation: fluidPulse 4s ease-in-out infinite;
        }

        .bg-glow-1 {
          position: fixed;
          top: -20%;
          left: -10%;
          width: 60vw;
          height: 60vw;
          background: radial-gradient(circle, rgba(0, 242, 254, 0.12) 0%, transparent 75%);
          z-index: 0;
          pointer-events: none;
          animation: driftGlow 20s ease-in-out infinite alternate;
        }
        .bg-glow-2 {
          position: fixed;
          bottom: -20%;
          right: -10%;
          width: 60vw;
          height: 60vw;
          background: radial-gradient(circle, rgba(127, 0, 255, 0.08) 0%, transparent 75%);
          z-index: 0;
          pointer-events: none;
          animation: driftGlow 25s ease-in-out infinite alternate-reverse;
        }

        .perspective-grid {
          perspective: 1200px;
        }

        .new-user-card {
          opacity: 0;
          transform: translateY(60px) rotateX(15deg) scale(0.92);
          animation: premiumEntrance 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;
          position: relative;
          z-index: 1;
          overflow: hidden;
          transition: transform 0.5s cubic-bezier(0.25, 1, 0.3, 1), box-shadow 0.5s cubic-bezier(0.25, 1, 0.3, 1) !important;
        }

        .new-user-card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(transparent, rgba(0, 242, 254, 0.1), #00f2fe, #7f00ff, transparent 40%);
          animation: rotateBorder 4s linear infinite;
          z-index: -2;
        }

        .card-inner-content {
          position: relative;
          width: 100%;
          height: 100%;
          background: rgba(10, 13, 29, 0.92);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border-radius: 27px;
          padding: 40px 30px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: -1;
        }

        .new-user-card:hover {
          transform: translateY(-12px) scale(1.04) rotateY(2deg) !important;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 242, 254, 0.25), 0 0 80px rgba(127, 0, 255, 0.15) !important;
        }

        .new-user-card:hover::before {
          animation: rotateBorder 1.5s linear infinite;
          background: conic-gradient(transparent, rgba(0, 242, 254, 0.2), #00f2fe, #ff007f, transparent 50%);
        }

        .new-user-card:hover .avatar-glow {
          transform: scale(1.08) rotate(4deg);
          box-shadow: 0 0 35px rgba(0, 242, 254, 0.7);
        }

        .avatar-glow {
          transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s ease;
        }

        @keyframes rotateBorder { 100% { transform: rotate(360deg); } }
        @keyframes cinematicTitleEntrance {
          0% { opacity: 0; transform: translateY(-50px) scale(0.95); filter: blur(15px); letter-spacing: 15px; }
          60% { filter: blur(4px); }
          100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); letter-spacing: 2px; }
        }
        @keyframes textPulseGlow {
          0% { filter: drop-shadow(0 0 2px rgba(0, 242, 254, 0.2)); }
          100% { filter: drop-shadow(0 0 15px rgba(127, 0, 255, 0.6)) drop-shadow(0 0 30px rgba(0, 242, 254, 0.3)); }
        }
        @keyframes chromaticShine { 0% { background-position: 0% center; } 100% { background-position: 300% center; } }
        @keyframes fluidPulse {
          0%, 100% { width: 60px; opacity: 0.7; transform: scaleX(1); }
          50% { width: 140px; opacity: 1; transform: scaleX(1.05); box-shadow: 0 0 35px rgba(127, 0, 255, 0.8); }
        }
        @keyframes premiumEntrance { to { opacity: 1; transform: translateY(0) rotateX(0deg) scale(1); } }
        @keyframes driftGlow { 0% { transform: translate(0, 0) scale(1); } 100% { transform: translate(8%, 8%) scale(1.15); } }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    background: "radial-gradient(circle at 50% 20%, #0a0d1d 0%, #03050c 100%)",
    maxWidth: "100%",
    margin: "0",
    padding: "100px 20px",
    minHeight: "100vh",
    boxSizing: "border-box",
    position: "relative",
  },
  title: {
    margin: "0",
    fontSize: "3.8rem",
    fontWeight: "900",
    textTransform: "uppercase",
    lineHeight: "1.1",
    padding: "10px 0",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "40px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  card: {
    background: "rgba(255, 255, 255, 0.01)",
    borderRadius: "28px",
    border: "none", 
    boxShadow: "0 20px 50px 0 rgba(0, 0, 0, 0.5)",
    padding: "1px",
  },
  avatar: {
    width: "130px", 
    height: "130px",
    borderRadius: "24px", 
    objectFit: "cover",
    marginBottom: "25px",
    boxShadow: "0 0 25px rgba(0, 242, 254, 0.35)",
    border: "2px solid rgba(255, 255, 255, 0.15)",
  },
  name: {
    color: "#f8fafc",
    fontSize: "1.2rem",
    marginTop: "5px",
    marginBottom: "6px",
    fontWeight: "700",
    letterSpacing: "-0.4px",
    textAlign: "center",
    lineHeight: "1.4"
  },
  username: {
    color: "#64748b",
    fontSize: "0.95rem",
    margin: "0 0 2px 0",
    letterSpacing: "0.5px",
  },
  divider: {
    width: "100%",
    height: "1px",
    background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.06), transparent)",
    margin: "20px 0",
  },
  email: {
    color: "#94a3b8",
    fontSize: "0.9rem",
    margin: "0 0 14px 0",
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  link: {
    color: "#ff007f",
    fontSize: "0.9rem",
    textDecoration: "none",
    margin: "0",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    fontWeight: "600",
    transition: "color 0.2s ease",
  },
  icon: {
    fontSize: "1.1rem",
    color: "#00f2fe",
  },
};

export default Showdata;