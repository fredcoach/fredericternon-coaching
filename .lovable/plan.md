

# Plan : optimiser tes backlinks et ton référencement externe

## Diagnostic actuel (Semrush)

| Indicateur | Valeur | Lecture |
|---|---|---|
| Authority Score | 2/100 | Site jeune, autorité quasi nulle |
| Backlinks | 19 (2 follow / 17 nofollow) | Trop peu, et de mauvaise qualité |
| Domaines référents | 17 | Majoritairement spammy (drjack.world, fiverr-*, *.top, *.icu) |
| Trafic organique FR | Non détecté | Aucun mot-clé positionné pour l'instant |

**Constat** : la plupart des liens actuels sont du "bruit" automatisé. Ils ne portent aucune valeur SEO et certains peuvent même nuire à terme. La priorité n'est pas la quantité mais la **qualité** et la **pertinence sectorielle** (dirigeants de PME, accompagnement, conseil).

---

## Stratégie en 4 piliers

### Pilier 1 — Nettoyer & assainir (1ère semaine)

1. **Exporter la liste complète des 19 backlinks** via Semrush.
2. **Identifier les liens toxiques** (domaines en .top / .icu / .xyz, fermes de liens, sites sans rapport avec le B2B).
3. **Préparer un fichier Disavow** (`disavow.txt`) à soumettre dans Google Search Console pour neutraliser leur impact.
4. **Configurer Google Search Console + Bing Webmaster Tools** si ce n'est pas déjà fait, et soumettre `sitemap.xml`.

### Pilier 2 — Activer ce que tu as déjà (mois 1)

Tes meilleurs leviers de départ sont gratuits et à portée de main :

- **LinkedIn** : signature de profil pointant vers `alphadirigeant.solutions`, et republier tes articles de blog en "Articles LinkedIn" avec lien canonical vers ton site (déjà prévu dans ta stratégie d'indexation).
- **mental-pro.fr** : ajouter un lien follow contextuel d'Alpha PME depuis ton site existant (déjà partiellement fait → vérifier qu'il pointe bien en follow vers les pages clés).
- **Signature email** + signatures dans forums/communautés de dirigeants (BPI Excellence, Réseau Entreprendre, CJD, APM, Germe…).
- **Fiches d'annuaires professionnels qualifiés** (pas n'importe lesquels) :
  - Pages Jaunes Pro
  - Annuaire CCI France
  - Société.com / Pappers (déjà automatique)
  - Annuaire des coachs certifiés (ICF France, SF Coach, EMCC) si tu es certifié
  - Malt, Comet ou Crème de la Crème (profil consultant)

### Pilier 3 — Créer de la matière à liens (mois 1 à 3)

Les backlinks de qualité se **gagnent**, ils ne s'achètent pas. Pour ça il faut donner aux autres une raison de te citer :

- **Contenu "linkable"** sur ton blog : 
  - 1 étude / baromètre annuel ("Baromètre du dirigeant de PME 2026 : les 5 décisions qu'ils repoussent")
  - 1 outil interactif léger (auto-diagnostic — tu l'as déjà → mettre en avant comme ressource citable)
  - 1 guide PDF téléchargeable ("Le guide du dirigeant qui veut sortir de la roue du hamster")
- **Articles invités** (guest posting) ciblés sur 5 à 10 sites :
  - Chefdentreprise.com, Les Echos Solutions, Bpifrance Création, Place des Dirigeants, Maddyness, DigitalCEO, blogs de cabinets RH/conseil PME.
- **Podcasts B2B dirigeants** : se proposer comme invité (Génération Do It Yourself, Le Gratin, La Martingale, Décideurs TV, podcasts CJD/APM). Chaque épisode = 1 backlink + crédibilité.

### Pilier 4 — Partenariats & relations (continu)

- **Échanges de contenu** avec experts complémentaires (avocats d'affaires, experts-comptables, DAF à temps partagé, coachs sportifs business) : tribune croisée, interview croisée, lien réciproque contextuel.
- **Témoignages clients vidéo** déjà sur ton site → demander à chaque client de relayer sur son LinkedIn + site corporate avec lien.
- **Prises de parole** : webinaires, conférences CCI, événements CJD/APM → toujours une page événement avec lien.
- **Relations presse** : pitcher 2-3 angles par trimestre à des journalistes spécialisés PME (Capital, Les Echos Entrepreneurs, Challenges, L'ADN). Outils gratuits : SourceBottle, ResponseSource FR.

---

## Ce que je peux faire côté site (si tu valides)

Pour rendre ton site **plus "linkable"** et faciliter le travail de référencement, je peux :

1. **Créer une page "Presse / Médias"** (`/presse`) avec bio courte, photos HD, logos téléchargeables, sujets d'expertise — facilite les citations journalistes.
2. **Créer une page "Ressources"** (`/ressources`) qui regroupe le diagnostic, le guide PDF, les études — devient la page à citer.
3. **Ajouter du balisage Schema.org Person + Organization** complet (déjà partiel) pour renforcer le Knowledge Graph Google autour de ton nom.
4. **Améliorer le maillage interne** vers `/blog/sortir-roue-hamster-dirigeant` et les autres articles piliers.
5. **Préparer un template "article invité"** (composant React) pour que les liens entrants pointent vers des pages dédiées par partenaire si besoin (campagnes UTM + pages d'atterrissage).

---

## Priorisation suggérée (90 jours)

| Semaine | Action | Effort | Impact |
|---|---|---|---|
| S1 | Disavow des liens toxiques + GSC/Bing | 2h | Protège l'existant |
| S1-2 | Page Presse + page Ressources + balisage Schema | côté Lovable | Base "linkable" |
| S2-4 | Annuaires pro qualifiés (10-15) | 3h | 5-10 backlinks propres |
| M1-2 | 3 articles invités + 2 podcasts visés | 10h | Backlinks d'autorité |
| M2-3 | Baromètre/étude téléchargeable | 8h | Contenu citable durable |
| Continu | LinkedIn (1 post/sem) + republication articles | 1h/sem | Notoriété + signaux |

---

## Détails techniques

- **Connecteur Semrush** : pour suivre l'évolution de ton Authority Score, des nouveaux backlinks et des positions de mots-clés dans un dashboard intégré à ton site (ou un dashboard interne), on peut connecter ton compte Semrush. Cela permettrait un suivi mensuel automatisé.
- **Disavow tool** : fichier `.txt` à soumettre via Google Search Console (pas via le code du site).
- **Outils gratuits utiles** : Ubersuggest (3 requêtes/jour), Ahrefs Free Backlink Checker, Google Alerts sur "Frédéric Ternon" / "Alpha PME" pour repérer les mentions non-liées et demander un lien.

---

## Question avant de lancer

Veux-tu que je commence par **construire la fondation côté site** (pages Presse + Ressources + Schema renforcé + maillage interne) puis qu'on enchaîne avec un brief opérationnel détaillé pour les actions hors-site (annuaires, articles invités, podcasts) ? Ou tu préfères que je te livre d'abord un document opérationnel complet (templates emails de pitch, liste nominative de sites/podcasts/journalistes à contacter) ?

