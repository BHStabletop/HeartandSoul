# Instagram-Token erneuern (Heart&Soul Feed)

Der Instagram-Feed auf der Startseite nutzt ein **Meta-Langzeit-Token**, das **alle ~60 Tage abläuft**.
Danach zeigt der Feed nichts mehr an, bis ein neues Token hinterlegt ist.

- **Aktuelles Token läuft ab:** ~**19. Dezember 2026**
- **Betrifft:** `IG_ACCESS_TOKEN` (lokal in `.dev.vars` **und** als Cloudflare-Pages-Secret)
- **Nicht betroffen:** `IG_BUSINESS_ID` = `17841409063465302` (bleibt gleich)

## Nützliche Fixwerte

| Wert | Inhalt |
|---|---|
| Meta App | „Heart&Soul Integration" |
| App ID | `1730791041513007` |
| App Secret | Meta-Dashboard → App-Einstellungen → **Grundlegendes** → „App-Geheimnis anzeigen" |
| IG Business ID | `17841409063465302` (Account `bhs.tabletop`) |
| Benötigte Scopes | `instagram_basic`, `pages_show_list`, `business_management` |
| Cloudflare-Projekt | `heartandsoul` |
| Live-URL | https://heartandsoul-90u.pages.dev |

---

## Schritt 1 – Kurzlebiges Token erzeugen (Graph API Explorer)

1. Öffne https://developers.facebook.com/tools/explorer/
2. Oben rechts bei **Meta App** → „Heart&Soul Integration" auswählen.
3. Bei **Permissions** diese drei hinzufügen: `instagram_basic`, `pages_show_list`, `business_management`.
4. **„Generate Access Token"** klicken und den Zugriff bestätigen.
5. Das angezeigte Token kopieren (gilt nur ~1–2 Stunden – im nächsten Schritt verlängern).

## Schritt 2 – In Langzeit-Token (60 Tage) umwandeln

Im Terminal ausführen und `APP_SECRET` + `KURZ_TOKEN` ersetzen:

```bash
curl -s "https://graph.facebook.com/v21.0/oauth/access_token?grant_type=fb_exchange_token&client_id=1730791041513007&client_secret=APP_SECRET&fb_exchange_token=KURZ_TOKEN"
```

Antwort enthält `"access_token": "..."` → **das** ist das neue Langzeit-Token.

## Schritt 3 – Prüfen, dass es gültig ist

`NEU_TOKEN` einsetzen:

```bash
curl -s "https://graph.facebook.com/v21.0/debug_token?input_token=NEU_TOKEN&access_token=NEU_TOKEN" | python3 -m json.tool
```

Erwartung: `"is_valid": true`, Scopes enthalten `instagram_basic`, und `expires_at` liegt ~60 Tage in der Zukunft.

Optional direkt den Feed-Abruf testen:

```bash
curl -s -G "https://graph.facebook.com/v21.0/17841409063465302/media" --data-urlencode "fields=id,permalink,caption" --data-urlencode "limit=5" --data-urlencode "access_token=NEU_TOKEN"
```

## Schritt 4 – Token überall aktualisieren

**a) Lokal** – in `HeartandSoul/.dev.vars` die Zeile `IG_ACCESS_TOKEN=...` durch das neue Token ersetzen.

**b) Produktion (Cloudflare)** – im Projektordner ausführen:

```bash
cd ~/Library/Mobile\ Documents/com~apple~CloudDocs/Claude/HeartandSoul && printf 'Neues Token einfügen und Enter: ' && read TOKEN && printf '%s' "$TOKEN" | npx --yes wrangler@4 pages secret put IG_ACCESS_TOKEN --project-name heartandsoul
```

## Schritt 5 – Neu deployen, damit das neue Secret greift

Entweder einen leeren Commit pushen …

```bash
cd ~/Library/Mobile\ Documents/com~apple~CloudDocs/Claude/HeartandSoul && git commit --allow-empty -m "Rotate Instagram token" && git push origin main
```

… oder im Cloudflare-Dashboard beim letzten Deployment **„Retry deployment"** klicken.

## Schritt 6 – Live prüfen

```bash
curl -s "https://heartandsoul-90u.pages.dev/api/instagram" | python3 -c "import sys,json;d=json.load(sys.stdin);print('Fehler:',d.get('error'),'| Posts:',len(d.get('posts',[])))"
```

Erwartung: `Fehler: None | Posts: 11` (oder wie viele Beiträge gerade `#MyHeartAndSoulMoment` haben).

---

**Tipp:** Nächstes Ablaufdatum notieren (~60 Tage nach dem Erneuern) und wieder eine Erinnerung setzen.
Das Token niemals ins Git committen – `.dev.vars` ist bereits in `.gitignore`.
