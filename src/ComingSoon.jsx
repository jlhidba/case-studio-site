export default function ComingSoon() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#080314",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div>
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
          Coming Soon
        </h1>

        <p style={{ opacity: 0.75, maxWidth: "520px", lineHeight: "1.6" }}>
          We’re working on something exciting.
          <br />
          Our online customisation experience will be available shortly.
        </p>

        <a
          href="/"
          style={{
            display: "inline-block",
            marginTop: "30px",
            color: "#080314",
            background: "white",
            padding: "12px 22px",
            borderRadius: "14px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}