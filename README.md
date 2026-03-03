# Vorlagen-Generator (StackBlitz)

## Schnellstart in StackBlitz

### Variante A (funktioniert fast immer): Node/Vite
1. Projekt als ZIP oder aus GitHub in StackBlitz importieren.
2. Links im Terminal (oder automatisch):
   - `npm install`
   - `npm run dev`
3. Preview öffnet auf Port **5173**.

### Variante B: Static
Wenn du ein **Static/HTML**-Template verwendest, muss `index.html` im Projekt-Root liegen.

## Häufigster Fehler
Wenn die Dateien in einem zusätzlichen Ordner liegen (z.B. `vorlagen-generator/index.html` statt `/index.html`), findet StackBlitz die Startseite nicht.
Dieses ZIP ist bereits so korrigiert, dass `index.html` im Root liegt.
