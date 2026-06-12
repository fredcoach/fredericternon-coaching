"""Generate the Alpha PME guide PDF with logo + illustrations."""
import os
from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor, Color
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.utils import ImageReader
from reportlab.platypus import Paragraph, Frame
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER

# ---- Palette ----
NAVY = HexColor("#0F1B3D")
GOLD = HexColor("#C9A04E")
IVORY = HexColor("#F7F3EA")
INK = HexColor("#1A1A1A")
MUTED = HexColor("#5A5A5A")
RULE = HexColor("#D8D2C2")

PAGE_W, PAGE_H = A4
MARGIN_X = 50
MARGIN_Y = 56

LOGO_LIGHT = "src/assets/alpha-pme-horizontal-light.png"
LOGO_DARK = "src/assets/alpha-pme-horizontal.png"
IMG = "/tmp/guide-images"

import glob
_font_dir = glob.glob("/nix/store/*-liberation-fonts-*/share/fonts/truetype")[0]
pdfmetrics.registerFont(TTFont("LibSans", f"{_font_dir}/LiberationSans-Regular.ttf"))
pdfmetrics.registerFont(TTFont("LibSans-Bold", f"{_font_dir}/LiberationSans-Bold.ttf"))
pdfmetrics.registerFont(TTFont("LibSans-Italic", f"{_font_dir}/LiberationSans-Italic.ttf"))
from reportlab.pdfbase.pdfmetrics import registerFontFamily
registerFontFamily("LibSans", normal="LibSans", bold="LibSans-Bold",
                   italic="LibSans-Italic", boldItalic="LibSans-Bold")
FONT = "LibSans"
FONT_B = "LibSans-Bold"
FONT_O = "LibSans-Italic"

URL = "alphadirigeant.solutions"

# ---- Paragraph styles ----
body_style = ParagraphStyle(
    "body", fontName=FONT, fontSize=10.5, leading=15.5,
    textColor=INK, alignment=TA_LEFT, spaceAfter=8,
)
body_lead = ParagraphStyle(
    "lead", parent=body_style, fontSize=12, leading=17.5,
    textColor=NAVY, spaceAfter=10,
)
quote_style = ParagraphStyle(
    "quote", fontName=FONT_O, fontSize=11.5, leading=16,
    textColor=NAVY, leftIndent=14, rightIndent=14, spaceBefore=6, spaceAfter=6,
)
caption_style = ParagraphStyle(
    "cap", fontName=FONT, fontSize=8.5, leading=11, textColor=MUTED,
)
bullet_label = ParagraphStyle(
    "bl", fontName=FONT_B, fontSize=10.5, leading=14, textColor=NAVY, spaceAfter=2,
)


def footer(c, page_num, total=7):
    # gold rule
    c.setStrokeColor(RULE); c.setLineWidth(0.6)
    c.line(MARGIN_X, MARGIN_Y - 18, PAGE_W - MARGIN_X, MARGIN_Y - 18)
    # logo dark small
    try:
        logo = ImageReader(LOGO_DARK)
        lw = 70
        iw, ih = logo.getSize()
        lh = lw * ih / iw
        c.drawImage(logo, MARGIN_X, MARGIN_Y - 18 - lh - 4,
                    width=lw, height=lh, mask='auto')
    except Exception:
        pass
    c.setFont(FONT, 8); c.setFillColor(MUTED)
    c.drawCentredString(PAGE_W/2, MARGIN_Y - 30,
                        f"Alpha PME — Frédéric Ternon · {URL}")
    c.drawRightString(PAGE_W - MARGIN_X, MARGIN_Y - 30, f"Page {page_num} / {total}")


def chapter_header(c, y, num, title):
    """Draws the chapter number badge + title. Returns new y after header."""
    # gold accent line
    c.setStrokeColor(GOLD); c.setLineWidth(1.2)
    c.line(MARGIN_X, y, MARGIN_X + 36, y)
    c.setFont(FONT_B, 9); c.setFillColor(GOLD)
    c.drawString(MARGIN_X + 44, y - 3, f"CHAPITRE {num}")
    y -= 22
    c.setFont(FONT_B, 19); c.setFillColor(NAVY)
    c.drawString(MARGIN_X, y, title)
    y -= 10
    return y


def chapter_image(c, y, path, height=120):
    """Draw a banner image full content width."""
    if not os.path.exists(path):
        return y
    img = ImageReader(path)
    iw, ih = img.getSize()
    w = PAGE_W - 2*MARGIN_X
    h = height
    # crop-fit: maintain aspect, fill width
    c.drawImage(img, MARGIN_X, y - h, width=w, height=h, mask='auto',
                preserveAspectRatio=False)
    return y - h - 14


def draw_paragraphs(c, items, y, width=None):
    """items: list of (text, style). Returns new y."""
    if width is None:
        width = PAGE_W - 2*MARGIN_X
    for text, style in items:
        p = Paragraph(text, style)
        w, h = p.wrap(width, 1000)
        # if not enough space, just draw anyway (caller manages pages)
        p.drawOn(c, MARGIN_X, y - h)
        y -= h + style.spaceAfter
    return y


def quote_box(c, y, text, height=None):
    """Render a quote with left gold bar and soft ivory wash."""
    width = PAGE_W - 2*MARGIN_X
    p = Paragraph(text, quote_style)
    w, h = p.wrap(width - 30, 1000)
    box_h = h + 22
    # ivory wash
    c.setFillColor(HexColor("#FAF6EC"))
    c.rect(MARGIN_X, y - box_h, width, box_h, fill=1, stroke=0)
    # gold left bar
    c.setFillColor(GOLD)
    c.rect(MARGIN_X, y - box_h, 3, box_h, fill=1, stroke=0)
    p.drawOn(c, MARGIN_X + 18, y - box_h + 11)
    return y - box_h - 12


# ====================================================================
# PAGES
# ====================================================================

def page_cover(c):
    # Full bleed navy
    c.setFillColor(NAVY)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    # cover image band
    img = ImageReader(f"{IMG}/cover.jpg")
    band_h = 280
    c.drawImage(img, 0, PAGE_H - band_h - 40, width=PAGE_W, height=band_h,
                preserveAspectRatio=False, mask='auto')
    # gold accent line
    c.setFillColor(GOLD)
    c.rect(0, PAGE_H - band_h - 44, PAGE_W, 3, fill=1, stroke=0)

    # eyebrow
    y = PAGE_H - band_h - 80
    c.setFont(FONT_B, 9); c.setFillColor(GOLD)
    c.drawCentredString(PAGE_W/2, y, "GUIDE PRATIQUE  ·  DIRIGEANTS DE PME")
    y -= 60
    # title
    c.setFont(FONT_B, 38); c.setFillColor(IVORY)
    c.drawCentredString(PAGE_W/2, y, "Sortir de la roue")
    y -= 44
    c.drawCentredString(PAGE_W/2, y, "du hamster")
    y -= 36
    # subtitle
    c.setFont(FONT, 13); c.setFillColor(HexColor("#C8CCD6"))
    c.drawCentredString(PAGE_W/2, y, "Le manuel du dirigeant qui veut reprendre")
    y -= 18
    c.drawCentredString(PAGE_W/2, y, "la main sur son agenda et ses décisions.")

    # author block
    y = 200
    c.setStrokeColor(GOLD); c.setLineWidth(0.8)
    c.line(PAGE_W/2 - 40, y, PAGE_W/2 + 40, y)
    y -= 22
    c.setFont(FONT_B, 12); c.setFillColor(IVORY)
    c.drawCentredString(PAGE_W/2, y, "Par Frédéric Ternon")
    y -= 16
    c.setFont(FONT, 10); c.setFillColor(HexColor("#A8AEBE"))
    c.drawCentredString(PAGE_W/2, y, "Fondateur d'Alpha PME · Accompagnateur de dirigeants")

    # logo bottom
    try:
        logo = ImageReader(LOGO_LIGHT)
        lw = 140
        iw, ih = logo.getSize()
        lh = lw * ih / iw
        c.drawImage(logo, PAGE_W/2 - lw/2, 70, width=lw, height=lh, mask='auto')
    except Exception:
        pass
    c.setFont(FONT, 9); c.setFillColor(HexColor("#8B92A6"))
    c.drawCentredString(PAGE_W/2, 50, URL)
    c.showPage()


def page_toc(c):
    y = PAGE_H - MARGIN_Y - 10
    # eyebrow
    c.setFont(FONT_B, 9); c.setFillColor(GOLD)
    c.drawString(MARGIN_X, y, "SOMMAIRE")
    y -= 8
    c.setStrokeColor(GOLD); c.setLineWidth(1)
    c.line(MARGIN_X, y, MARGIN_X + 30, y)
    y -= 30
    c.setFont(FONT_B, 26); c.setFillColor(NAVY)
    c.drawString(MARGIN_X, y, "Sommaire")
    y -= 40

    items = [
        ("01", "Pourquoi vous courez sans avancer"),
        ("02", "Les 5 symptômes de la roue du hamster"),
        ("03", "Le vrai coût (chiffré) de la surcharge"),
        ("04", "Les 3 leviers pour en sortir"),
        ("05", "Le protocole 30 jours"),
        ("06", "Auto-diagnostic : 10 questions"),
        ("07", "Aller plus loin"),
    ]
    for num, title in items:
        c.setFont(FONT_B, 22); c.setFillColor(GOLD)
        c.drawString(MARGIN_X, y, num)
        c.setFont(FONT, 12); c.setFillColor(INK)
        c.drawString(MARGIN_X + 50, y + 6, title)
        # dotted leader
        c.setStrokeColor(RULE); c.setLineWidth(0.4)
        c.setDash(1, 3)
        c.line(MARGIN_X + 50 + c.stringWidth(title, FONT, 12) + 10, y + 7,
               PAGE_W - MARGIN_X, y + 7)
        c.setDash()
        y -= 32

    # à propos box
    y -= 10
    box_w = PAGE_W - 2*MARGIN_X
    box_h = 110
    c.setFillColor(HexColor("#FAF6EC"))
    c.rect(MARGIN_X, y - box_h, box_w, box_h, fill=1, stroke=0)
    c.setFillColor(GOLD)
    c.rect(MARGIN_X, y - box_h, 3, box_h, fill=1, stroke=0)
    c.setFont(FONT_B, 11); c.setFillColor(NAVY)
    c.drawString(MARGIN_X + 18, y - 20, "À propos de ce guide")
    txt = ("Ce document est un extrait de la méthode Alpha PME. Il s'adresse aux dirigeants de PME "
           "jusqu'à 30 personnes qui sentent qu'ils subissent leur entreprise plus qu'ils ne la pilotent.<br/>"
           "<b>Lecture utile :</b> 25 minutes &nbsp;·&nbsp; <b>Mise en pratique :</b> 30 jours.")
    p = Paragraph(txt, ParagraphStyle("ab", fontName=FONT, fontSize=10, leading=14, textColor=INK))
    pw, ph = p.wrap(box_w - 36, 200)
    p.drawOn(c, MARGIN_X + 18, y - 26 - ph)

    footer(c, 2)
    c.showPage()


def page_ch1_2(c):
    y = PAGE_H - MARGIN_Y - 6
    y = chapter_header(c, y, "01", "Pourquoi vous courez sans avancer")
    y = chapter_image(c, y, f"{IMG}/ch1.jpg", height=110)
    y = draw_paragraphs(c, [
        ("La roue du hamster, ce n'est pas travailler beaucoup. C'est travailler beaucoup "
         "sans sentir que l'on progresse. C'est finir une semaine de 60 heures avec la "
         "pénible impression que la pile des urgences n'a pas baissé d'un centimètre.", body_lead),
        ("Ce n'est pas un problème d'organisation personnelle. C'est un problème de pilotage. "
         "Le dirigeant absorbe tout : les décisions opérationnelles, les arbitrages humains, "
         "les questions clients, les choix techniques, les sujets bancaires. Tant qu'il ne refilte "
         "pas ce qui doit remonter à lui de ce qui doit être traité ailleurs, il restera dans la "
         "roue, quoi qu'il fasse.", body_style),
        ("<b>Le piège invisible.</b> Plus le dirigeant est compétent, plus il est tentant pour "
         "l'organisation de lui faire remonter tous les sujets. Cette efficacité de court terme "
         "fabrique une dépendance de long terme : personne ne décide à sa place, parce que "
         "personne n'a appris à le faire.", body_style),
    ], y)
    y = quote_box(c, y,
        "« Si je ne suis pas là, ça s'arrête. » Cette phrase, beaucoup la disent avec une "
        "fierté discrète. C'est pourtant le signal le plus clair qu'on est entré dans la roue.")

    # Chapter 02
    y -= 6
    y = chapter_header(c, y, "02", "Les 5 symptômes de la roue du hamster")
    symptoms = [
        ("Décisions repoussées",
         "Trois sujets reviennent chaque semaine sans être tranchés : un recrutement, un client toxique, un prix à revoir."),
        ("Agenda subi",
         "Plus de 70 % des créneaux de la semaine ont été posés par d'autres (réunions, clients, équipe)."),
        ("Sentiment d'urgence permanent",
         "Tout est prioritaire. Donc rien ne l'est. La hiérarchisation se fait à l'humeur, pas à la stratégie."),
        ("Fatigue qui ne passe plus en weekend",
         "Le repos du dimanche soir ne tient pas 24 h. Le lundi midi, vous êtes déjà à plat."),
        ("Doute lucide",
         "Vous savez objectivement que ça ne peut pas durer comme ça. Et vous n'arrivez pas à changer le système."),
    ]
    for label, txt in symptoms:
        # gold dot
        c.setFillColor(GOLD)
        c.circle(MARGIN_X + 3, y - 5, 2.4, fill=1, stroke=0)
        c.setFont(FONT_B, 10.5); c.setFillColor(NAVY)
        c.drawString(MARGIN_X + 14, y - 8, label)
        y -= 18
        p = Paragraph(txt, ParagraphStyle("s", fontName=FONT, fontSize=10, leading=13.5,
                                          textColor=INK, leftIndent=14))
        pw, ph = p.wrap(PAGE_W - 2*MARGIN_X - 14, 200)
        p.drawOn(c, MARGIN_X, y - ph)
        y -= ph + 6

    footer(c, 3)
    c.showPage()


def page_ch3_4(c):
    y = PAGE_H - MARGIN_Y - 6
    y = chapter_header(c, y, "03", "Le vrai coût (chiffré) de la surcharge")
    y = chapter_image(c, y, f"{IMG}/ch3.jpg", height=100)
    y = draw_paragraphs(c, [
        ("On parle souvent du coût humain de la roue du hamster. Rarement de son coût financier. "
         "Voici un calcul que je fais systématiquement en Session CADRAGE avec les dirigeants "
         "que j'accompagne.", body_style),
    ], y)

    # Table
    rows = [
        ("Poste", "Estimation moyenne / an"),
        ("Décisions repoussées (manque à gagner)", "15 à 60 k€"),
        ("Sur-effort opérationnel (heures dirigeant mal utilisées)", "20 à 40 k€"),
        ("Turnover lié au flou managérial", "10 à 30 k€ / départ"),
        ("Marges perdues sur clients toxiques non sortis", "5 à 25 k€"),
        ("TOTAL prudent (PME 10-30 pers.)", "50 à 150 k€"),
    ]
    col1_x = MARGIN_X
    col2_x = PAGE_W - MARGIN_X - 130
    row_h = 22
    table_w = PAGE_W - 2*MARGIN_X
    # header
    c.setFillColor(NAVY)
    c.rect(MARGIN_X, y - row_h, table_w, row_h, fill=1, stroke=0)
    c.setFont(FONT_B, 9.5); c.setFillColor(IVORY)
    c.drawString(col1_x + 10, y - 14, rows[0][0])
    c.drawString(col2_x + 10, y - 14, rows[0][1])
    y -= row_h
    for i, (a, b) in enumerate(rows[1:]):
        is_total = (i == len(rows) - 2)
        if i % 2 == 0:
            c.setFillColor(HexColor("#FAF6EC"))
            c.rect(MARGIN_X, y - row_h, table_w, row_h, fill=1, stroke=0)
        if is_total:
            c.setFillColor(HexColor("#F0E6CC"))
            c.rect(MARGIN_X, y - row_h, table_w, row_h, fill=1, stroke=0)
            c.setFont(FONT_B, 10); c.setFillColor(NAVY)
        else:
            c.setFont(FONT, 10); c.setFillColor(INK)
        c.drawString(col1_x + 10, y - 14, a)
        if is_total:
            c.setFillColor(GOLD)
        c.drawString(col2_x + 10, y - 14, b)
        y -= row_h
    # bottom rule
    c.setStrokeColor(RULE); c.setLineWidth(0.4)
    c.line(MARGIN_X, y, PAGE_W - MARGIN_X, y)
    y -= 16

    y = draw_paragraphs(c, [
        ("Ce coût n'apparaît dans aucun tableau de bord. Pourtant il est, dans 90 % des cas, "
         "<b>supérieur au prix d'un accompagnement structuré</b>.", body_style),
    ], y)

    # CH04
    y -= 4
    y = chapter_header(c, y, "04", "Les 3 leviers pour en sortir")
    y = chapter_image(c, y, f"{IMG}/ch4.jpg", height=90)
    levers = [
        ("Pilotage",
         "Reprendre la main sur son agenda. Bloquer 4 heures par semaine pour le travail stratégique — non négociables, posées avant le reste."),
        ("Décision",
         "Lister les 3 décisions repoussées. Pour chacune : une date butoir, un coût estimé du non-choix, une option par défaut si vous ne tranchez pas."),
        ("Organisation",
         "Faire l'organigramme réel (qui décide quoi). Identifier les 3 nœuds où tout remonte au dirigeant. En déléguer un sous 30 jours."),
    ]
    col_w = (PAGE_W - 2*MARGIN_X - 20) / 3
    for i, (name, desc) in enumerate(levers):
        x = MARGIN_X + i * (col_w + 10)
        c.setFillColor(GOLD)
        c.rect(x, y - 3, 24, 2, fill=1, stroke=0)
        c.setFont(FONT_B, 12); c.setFillColor(NAVY)
        c.drawString(x, y - 20, name)
        p = Paragraph(desc, ParagraphStyle("lv", fontName=FONT, fontSize=9.5,
                                          leading=13, textColor=INK))
        pw, ph = p.wrap(col_w - 4, 200)
        p.drawOn(c, x, y - 24 - ph)

    footer(c, 4)
    c.showPage()


def page_ch5(c):
    y = PAGE_H - MARGIN_Y - 6
    y = chapter_header(c, y, "05", "Le protocole 30 jours")
    y = chapter_image(c, y, f"{IMG}/ch5.jpg", height=130)
    y = draw_paragraphs(c, [
        ("Quatre semaines, quatre actions. Aucune ne demande plus de 2 heures de mise en œuvre. "
         "<b>L'effet compose à partir de la semaine 3.</b>", body_lead),
    ], y)

    weeks = [
        ("Semaine 1 — Mesurer",
         "Tracez votre semaine type : où passent réellement vos heures ? Catégorisez en pilotage / opérationnel / interruption."),
        ("Semaine 2 — Trancher",
         "Choisissez UNE décision repoussée. Posez une date. Décidez avant la date, même imparfaitement."),
        ("Semaine 3 — Bloquer",
         "Mettez 2 créneaux de 2 h dans l'agenda pour la stratégie. Les défendre comme une réunion client."),
        ("Semaine 4 — Déléguer",
         "Identifiez UN sujet qui remonte systématiquement à vous. Nommez un responsable, écrivez le cadre, lâchez."),
    ]
    for label, txt in weeks:
        # card
        card_h = 60
        c.setFillColor(HexColor("#FAF6EC"))
        c.rect(MARGIN_X, y - card_h, PAGE_W - 2*MARGIN_X, card_h, fill=1, stroke=0)
        c.setFillColor(GOLD)
        c.rect(MARGIN_X, y - card_h, 3, card_h, fill=1, stroke=0)
        c.setFont(FONT_B, 11); c.setFillColor(NAVY)
        c.drawString(MARGIN_X + 18, y - 18, label)
        p = Paragraph(txt, ParagraphStyle("w", fontName=FONT, fontSize=10, leading=13.5, textColor=INK))
        pw, ph = p.wrap(PAGE_W - 2*MARGIN_X - 36, 200)
        p.drawOn(c, MARGIN_X + 18, y - card_h + 8)
        y -= card_h + 10

    footer(c, 5)
    c.showPage()


def page_ch6(c):
    y = PAGE_H - MARGIN_Y - 6
    y = chapter_header(c, y, "06", "Auto-diagnostic : 10 questions")
    y = chapter_image(c, y, f"{IMG}/ch6.jpg", height=80)
    y = draw_paragraphs(c, [
        ("Répondez par <b>OUI</b> ou <b>NON</b>. Comptez vos OUI à la fin.", body_style),
    ], y)

    questions = [
        "Je commence la semaine sans liste claire des 3 sujets que je dois trancher.",
        "Je finis souvent ma journée sans avoir avancé sur le sujet le plus important.",
        "J'ai au moins une décision que je repousse depuis plus de 3 mois.",
        "Mes équipes me posent des questions dont elles devraient connaître la réponse.",
        "Je travaille le soir ou le weekend, régulièrement, par défaut.",
        "Je n'ai pas de moment fixe et protégé pour penser à mon entreprise.",
        "Je connais des clients dont je sais qu'ils me coûtent plus qu'ils ne me rapportent.",
        "L'organigramme de mon entreprise n'existe pas, ou n'est pas à jour.",
        "Je sens une fatigue qui ne passe plus avec un weekend de repos.",
        "Je sais que ça ne peut pas durer comme ça, et je ne vois pas par quoi commencer.",
    ]
    for i, q in enumerate(questions, 1):
        # checkbox
        c.setStrokeColor(NAVY); c.setLineWidth(0.8); c.setFillColor(IVORY)
        c.rect(MARGIN_X, y - 11, 10, 10, fill=0, stroke=1)
        c.setFont(FONT_B, 9); c.setFillColor(GOLD)
        c.drawString(MARGIN_X + 18, y - 8, f"{i:02d}.")
        c.setFont(FONT, 10); c.setFillColor(INK)
        c.drawString(MARGIN_X + 38, y - 8, q)
        y -= 18

    y -= 8
    # Lecture
    box_h = 92
    c.setFillColor(NAVY)
    c.rect(MARGIN_X, y - box_h, PAGE_W - 2*MARGIN_X, box_h, fill=1, stroke=0)
    c.setFillColor(GOLD)
    c.rect(MARGIN_X, y - box_h, 3, box_h, fill=1, stroke=0)
    c.setFont(FONT_B, 11); c.setFillColor(GOLD)
    c.drawString(MARGIN_X + 18, y - 18, "Lecture")
    txt = ("<font color='#F0E6CC'><b>0 à 2 OUI :</b> situation maîtrisée. Le guide reste utile en prévention.<br/>"
           "<b>3 à 5 OUI :</b> entrée dans la roue. Le protocole 30 jours suffit souvent.<br/>"
           "<b>6 à 10 OUI :</b> roue installée. Un regard extérieur structuré est probablement "
           "le meilleur retour sur investissement de votre année.</font>")
    p = Paragraph(txt, ParagraphStyle("l", fontName=FONT, fontSize=10, leading=14, textColor=IVORY))
    pw, ph = p.wrap(PAGE_W - 2*MARGIN_X - 36, 200)
    p.drawOn(c, MARGIN_X + 18, y - 26 - ph)

    footer(c, 6)
    c.showPage()


def page_ch7(c):
    y = PAGE_H - MARGIN_Y - 6
    y = chapter_header(c, y, "07", "Aller plus loin")
    y = chapter_image(c, y, f"{IMG}/ch7.jpg", height=110)
    y = draw_paragraphs(c, [
        ("Ce guide pose les bases. Si vous voulez le mettre en pratique sur votre situation, "
         "voici les trois prochaines étapes possibles, par ordre d'engagement.", body_style),
    ], y)

    steps = [
        ("1.", "L'auto-diagnostic en ligne",
         "<b>47 €</b> · 10 min",
         "Version interactive du diagnostic, avec restitution personnalisée.",
         "alphadirigeant.solutions/diagnostic"),
        ("2.", "La Session Flash Décision",
         "<b>350 €</b> · 1 h",
         "Une heure pour traiter UNE décision précise que vous repoussez. Sortie avec un plan d'action écrit.",
         "alphadirigeant.solutions/flash-decision"),
        ("3.", "La Session CADRAGE",
         "Accompagnement complet",
         "Le format long : 3 repères (Pilotage, Décision, Organisation) appliqués à votre PME, sur plusieurs semaines.",
         "Échange préalable : 30 min sur calendly.com/ternon/alpha-pme"),
    ]
    for num, title, price, desc, link in steps:
        card_h = 78
        c.setFillColor(HexColor("#FAF6EC"))
        c.rect(MARGIN_X, y - card_h, PAGE_W - 2*MARGIN_X, card_h, fill=1, stroke=0)
        c.setFillColor(GOLD)
        c.rect(MARGIN_X, y - card_h, 3, card_h, fill=1, stroke=0)
        c.setFont(FONT_B, 22); c.setFillColor(GOLD)
        c.drawString(MARGIN_X + 16, y - 28, num)
        c.setFont(FONT_B, 12); c.setFillColor(NAVY)
        c.drawString(MARGIN_X + 50, y - 18, title)
        p = Paragraph(price, ParagraphStyle("pr", fontName=FONT, fontSize=10, leading=13, textColor=GOLD))
        pp, hh = p.wrap(200, 30)
        p.drawOn(c, PAGE_W - MARGIN_X - 16 - pp, y - 18)

        p = Paragraph(desc, ParagraphStyle("d", fontName=FONT, fontSize=9.5, leading=12.5, textColor=INK))
        pw, ph = p.wrap(PAGE_W - 2*MARGIN_X - 70, 200)
        p.drawOn(c, MARGIN_X + 50, y - 22 - ph)

        c.setFont(FONT_O, 9); c.setFillColor(MUTED)
        c.drawString(MARGIN_X + 50, y - card_h + 10, link)
        y -= card_h + 10

    # Contact box
    y -= 6
    box_h = 100
    c.setFillColor(NAVY)
    c.rect(MARGIN_X, y - box_h, PAGE_W - 2*MARGIN_X, box_h, fill=1, stroke=0)
    c.setFillColor(GOLD)
    c.rect(MARGIN_X, y - box_h, 3, box_h, fill=1, stroke=0)
    c.setFont(FONT_B, 12); c.setFillColor(GOLD)
    c.drawString(MARGIN_X + 18, y - 22, "Vous voulez en parler ?")
    c.setFont(FONT, 10); c.setFillColor(IVORY)
    c.drawString(MARGIN_X + 18, y - 44, "WhatsApp direct : 07 67 97 19 52")
    c.drawString(MARGIN_X + 18, y - 60, f"Site : {URL}")
    c.drawString(MARGIN_X + 18, y - 76, "Préparation mentale : mental-pro.fr")

    # Copyright
    y -= box_h + 14
    c.setFont(FONT, 7.5); c.setFillColor(MUTED)
    cw = PAGE_W - 2*MARGIN_X
    p = Paragraph(
        "© Alpha PME — Frédéric Ternon. Vous pouvez partager ce guide librement (par email, en téléchargement, "
        "en lien sur votre site ou votre LinkedIn), à condition de ne pas le modifier et de citer la source : "
        "alphadirigeant.solutions.",
        ParagraphStyle("c", fontName=FONT, fontSize=7.5, leading=10, textColor=MUTED))
    pw, ph = p.wrap(cw, 200)
    p.drawOn(c, MARGIN_X, y - ph)

    footer(c, 7)
    c.showPage()


def build(path):
    c = canvas.Canvas(path, pagesize=A4)
    c.setTitle("Sortir de la roue du hamster — Alpha PME")
    c.setAuthor("Frédéric Ternon")
    c.setSubject("Guide pratique pour dirigeants de PME")
    page_cover(c)
    page_toc(c)
    page_ch1_2(c)
    page_ch3_4(c)
    page_ch5(c)
    page_ch6(c)
    page_ch7(c)
    c.save()


if __name__ == "__main__":
    out = "public/ressources/guide-sortir-roue-hamster-alpha-pme.pdf"
    build(out)
    print(f"Wrote {out}")
