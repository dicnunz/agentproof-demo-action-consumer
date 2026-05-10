export function renderPage(route) {
  if (route === "/fixed") {
    return page("AgentProof consumer fixed route", fixedBody());
  }
  return page("AgentProof consumer demo", homeBody());
}

function page(title, body) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <style>
    :root {
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      color: #17201d;
      background: #f4f6f1;
    }
    body {
      margin: 0;
      min-height: 100vh;
      display: grid;
      place-items: center;
    }
    main {
      width: min(920px, calc(100vw - 32px));
      padding: 44px;
      background: #ffffff;
      border: 1px solid #dfe4dc;
      border-radius: 8px;
      box-shadow: 0 18px 50px rgba(17, 24, 39, 0.08);
    }
    nav {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
      margin-bottom: 30px;
    }
    a {
      color: #0f6b4f;
      font-weight: 760;
    }
    h1 {
      font-size: clamp(34px, 6vw, 68px);
      line-height: 0.98;
      letter-spacing: 0;
      margin: 0 0 18px;
    }
    p {
      color: #52605a;
      font-size: 18px;
      line-height: 1.55;
      max-width: 760px;
    }
    .proof {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 12px;
      margin-top: 28px;
    }
    .proof div {
      border: 1px solid #dfe4dc;
      border-radius: 8px;
      padding: 16px;
      background: #f9faf7;
    }
    button {
      min-height: 42px;
      border: 0;
      border-radius: 7px;
      background: #111318;
      color: #ffffff;
      padding: 0 16px;
    }
    @media (max-width: 760px) {
      main {
        padding: 28px;
      }
      .proof {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>${body}</body>
</html>`;
}

function homeBody() {
  return `<main>
    <nav><a href="/">Home</a><a href="/fixed">Fixed route</a></nav>
    <h1>AgentProof consumer demo</h1>
    <p>This small repo exists to prove the released AgentProof GitHub Action works from an outside repository.</p>
    <div class="proof"><div>External repo</div><div>Action tag</div><div>Report artifact</div></div>
  </main>`;
}

function fixedBody() {
  return `<main>
    <nav><a href="/">Home</a></nav>
    <h1>Fixed fixture</h1>
    <p>The route is deliberately plain and stable so the workflow proves integration instead of hiding behind app complexity.</p>
    <button aria-label="Run local proof">Run local proof</button>
  </main>`;
}
