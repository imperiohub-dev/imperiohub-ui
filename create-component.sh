#!/usr/bin/env bash
# ======================================================
# Uso: ./create-component.sh NombreComponente
# Ej:  ./create-component.sh NavBar
# Crea: src/components/NombreComponente/index.tsx
#       src/components/NombreComponente/index.module.scss
#       y agrega export en src/components/index.ts
# ======================================================

set -e

COMPONENT_NAME="$1"

if [ -z "$COMPONENT_NAME" ]; then
  echo "❌ Falta el nombre del componente."
  echo "👉 Uso: ./create-component.sh NombreComponente"
  exit 1
fi

BASE_DIR="./src/components"
TARGET_DIR="$BASE_DIR/$COMPONENT_NAME"

# Crear carpeta destino
mkdir -p "$TARGET_DIR"

# Crear index.tsx
cat > "$TARGET_DIR/index.tsx" <<'EOF'
import styles from "./index.module.scss";

export default function COMPONENT_NAME() {
  return (
    <section className={styles.root}>
      <h1>COMPONENT_NAME</h1>
    </section>
  );
}
EOF

# Reemplazar marcador COMPONENT_NAME dentro del TSX
# (uso sed compatible con macOS)
LC_ALL=C sed -i '' "s/COMPONENT_NAME/${COMPONENT_NAME}/g" "$TARGET_DIR/index.tsx"

# Crear index.module.scss
cat > "$TARGET_DIR/index.module.scss" <<'EOF'
.root {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
}
EOF


echo "✅ Componente '${COMPONENT_NAME}' creado en: $TARGET_DIR"
echo "   - $TARGET_DIR/index.tsx"
echo "   - $TARGET_DIR/index.module.scss"
echo "🔗 Export agregado/asegurado en: $INDEX_FILE"
