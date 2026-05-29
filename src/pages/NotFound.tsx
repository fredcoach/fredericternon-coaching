import { Helmet } from "react-helmet-async";

const NotFound = () => {

  return (
    <>
      <Helmet>
        <title>Page introuvable (404) | Frédéric Ternon</title>
        <meta name="description" content="Cette page n'existe pas ou a été déplacée. Retournez à l'accueil de mentalpro.biz." />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content="Page introuvable (404) | Frédéric Ternon" />
        <meta property="og:description" content="Cette page n'existe pas ou a été déplacée." />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="flex min-h-screen items-center justify-center bg-muted">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
          <a href="/" className="text-primary underline hover:text-primary/90">
            Return to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
