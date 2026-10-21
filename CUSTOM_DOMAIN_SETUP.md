# Eigene Domain anbinden: heartandsoul-tableware.com

**Status: aufgeschoben** – kann jederzeit erledigt werden. Die Seite läuft bis dahin unter
https://heartandsoul-90u.pages.dev (voll funktionsfähig).

## Gewählter Weg: DNS bleibt bei united-domains (www + Apex-Weiterleitung)

Grund: So bleibt die **E-Mail** auf der Domain komplett unberührt
(MX = `mx00.udag.de` / `mx01.udag.de`). Kein Nameserver-Umzug nötig.

Ergebnis: `www.heartandsoul-tableware.com` wird von Cloudflare Pages ausgeliefert,
die nackte Domain `heartandsoul-tableware.com` leitet per 301 auf `www` weiter.

---

## Teil A – Cloudflare Pages

1. https://dash.cloudflare.com/70ef4cd2e2fd7f624775dd0bb31d2d2c/pages/view/heartandsoul
2. Tab **Custom domains** → **Set up a custom domain**
3. `www.heartandsoul-tableware.com` eingeben → Continue
4. Cloudflare zeigt als CNAME-Ziel: **`heartandsoul-90u.pages.dev`**
   (Fenster offen lassen; SSL stellt Cloudflare automatisch aus, sobald der DNS-Eintrag steht.)

## Teil B – united-domains (udag)

**B1 – DNS-Eintrag (Expert-DNS):**

| Typ | Name/Host | Ziel/Wert |
|-----|-----------|-----------|
| CNAME | `www` | `heartandsoul-90u.pages.dev` |

(den bestehenden `www`-A-Eintrag dabei ersetzen)

**B2 – Domain-Weiterleitung (Apex):**

- Von: `heartandsoul-tableware.com`
- Nach: `https://www.heartandsoul-tableware.com`
- Typ: **301 (permanent)**, möglichst „Weiterleitung mit SSL"

> ⚠️ MX-Einträge (`mx00/mx01.udag.de`) und andere bestehende Einträge NICHT anfassen –
> nur den `www`-Eintrag ändern und die Apex-Weiterleitung hinzufügen.

## Teil C – Prüfen (nach dem Speichern)

```bash
dig +short www.heartandsoul-tableware.com        # sollte auf heartandsoul-90u.pages.dev / Cloudflare zeigen
curl -sI https://www.heartandsoul-tableware.com  # 200, Cloudflare
curl -sI https://heartandsoul-tableware.com      # 301 -> https://www...
```

DNS-Änderungen können einige Minuten bis Stunden dauern, bis sie überall greifen.
