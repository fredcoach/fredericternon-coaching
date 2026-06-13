import { Helmet } from "react-helmet-async";

const Signature = () => {
  return (
    <>
      <Helmet>
        <title>Signature email | Alpha Dirigeant</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div style={{ minHeight: "100vh", background: "#f5f5f5", padding: "40px 20px", fontFamily: "Arial, sans-serif" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <div style={{ background: "#fff3cd", border: "1px solid #ffeaa7", padding: "16px 20px", borderRadius: "8px", marginBottom: "24px", fontSize: "14px", color: "#5d4e00", lineHeight: 1.5 }}>
            <strong>Mode d'emploi :</strong>
            <ol style={{ margin: "8px 0 0 20px", padding: 0 }}>
              <li>Sélectionne toute la zone signature ci-dessous (clique au début, glisse jusqu'à la fin)</li>
              <li>Copie : <strong>Cmd/Ctrl + C</strong></li>
              <li>Gmail → ⚙️ → Voir tous les paramètres → Signature → Créer / coller</li>
              <li>Enregistrer les modifications en bas de la page</li>
            </ol>
          </div>

          <div style={{ background: "#fff", padding: "32px", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
            <p style={{ fontSize: "12px", color: "#999", margin: "0 0 16px 0", textTransform: "uppercase", letterSpacing: "1px" }}>
              ↓ Zone à copier ↓
            </p>

            {/* ============ SIGNATURE START ============ */}
            <table cellPadding={0} cellSpacing={0} border={0} style={{ borderCollapse: "collapse", fontFamily: "Arial, Helvetica, sans-serif", color: "#0f1b3d" }}>
              <tbody>
                <tr>
                  <td style={{ padding: 0, verticalAlign: "top" }}>
                    <p style={{ margin: "0 0 2px 0", fontSize: "15px", fontWeight: "bold", color: "#0f1b3d", lineHeight: 1.3 }}>
                      Frédéric TERNON
                    </p>
                    <p style={{ margin: "0 0 2px 0", fontSize: "13px", color: "#0f1b3d", lineHeight: 1.3 }}>
                      Performance humaine &amp; Pilotage
                    </p>
                    <p style={{ margin: "0 0 10px 0", fontSize: "12px", color: "#888", fontStyle: "italic", lineHeight: 1.3 }}>
                      Conférencier
                    </p>

                    <table cellPadding={0} cellSpacing={0} border={0} style={{ borderCollapse: "collapse", borderTop: "2px solid #b8923d", paddingTop: "10px", marginTop: "4px" }}>
                      <tbody>
                        <tr><td style={{ height: "10px" }}></td></tr>
                        <tr>
                          <td style={{ fontSize: "13px", color: "#0f1b3d", lineHeight: 1.6 }}>
                            📞 <a href="tel:+33767971952" style={{ color: "#0f1b3d", textDecoration: "none" }}>07 67 97 19 52</a>
                            &nbsp;&nbsp;|&nbsp;&nbsp;
                            💬 <a href="https://wa.me/33767971952" style={{ color: "#0f1b3d", textDecoration: "none" }}>WhatsApp</a>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ fontSize: "13px", lineHeight: 1.6, paddingTop: "6px" }}>
                            🎯 <a href="https://alphadirigeant.solutions/ressources" style={{ color: "#b8923d", textDecoration: "none", fontWeight: "bold" }}>
                              Guide gratuit : Sortir de la roue du hamster
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ fontSize: "13px", lineHeight: 1.6, paddingTop: "4px" }}>
                            🌐 <a href="https://alphadirigeant.solutions" style={{ color: "#b8923d", textDecoration: "none" }}>
                              alphadirigeant.solutions
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* ============ SIGNATURE END ============ */}

            <p style={{ fontSize: "12px", color: "#999", margin: "16px 0 0 0", textTransform: "uppercase", letterSpacing: "1px" }}>
              ↑ Zone à copier ↑
            </p>
          </div>

          <p style={{ fontSize: "12px", color: "#888", textAlign: "center", marginTop: "20px" }}>
            Astuce : sur mobile, appuie longuement pour démarrer la sélection.
          </p>
        </div>
      </div>
    </>
  );
};

export default Signature;
