# ALL · Master-Schaltung · 9×9 QI/IQQ

ALL ist die Oberstation des iki1uc-Systems.
Sie liefert die reine QI/IQQ-Schaltung für alle Module.

──────────────────────────────────────────────
## Schaltung

QI(r,c)  = r*9 + c  
IQQ(r,c) = QI(r,c) mod 3  
ALL(r,c) = IQQ(r,c)

──────────────────────────────────────────────
## Dateien

- ALL.core.js – Master-Engine
- id.html – ALL-Stempel
- index.html – ALL-Matrix
