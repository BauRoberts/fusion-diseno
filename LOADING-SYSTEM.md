# Sistema de Loading y Transiciones

Este documento describe el sistema de loading screen y transiciones implementado para mejorar la experiencia de usuario mientras se cargan las imágenes.

## 🎯 Objetivo

Evitar que los usuarios vean imágenes cargándose progresivamente, mostrando en su lugar:
1. **Pantalla de carga inicial** con el logo de Fusion
2. **Transiciones suaves** entre páginas
3. **Skeleton placeholders** en las imágenes individuales

## 📁 Componentes Implementados

### 1. PageLoader Component ([page-loader.tsx](src/components/page-loader.tsx))

Este componente envuelve toda la aplicación y gestiona:

#### Loading Inicial (Primera carga)
- **Duración**: 1.5 segundos
- **Visualización**:
  - Logo de Fusion centrado con animación fade-in
  - Barra de progreso animada debajo
  - Fondo blanco sólido
- **z-index**: 9999 (sobre todo)

#### Transiciones entre Páginas
- **Duración**: 0.8 segundos
- **Detección**: Automática mediante `usePathname()` de Next.js
- **Visualización**:
  - Logo más pequeño centrado con pulse animation
  - Fondo blanco semi-transparente con blur
  - z-index: 9998

### 2. OptimizedImage Mejorado ([optimized-image.tsx](src/components/optimized-image.tsx))

Ahora incluye:
- **Skeleton shimmer** mientras carga cada imagen individual
- **Transición suave** de 500ms cuando la imagen se carga
- **Gradient shimmer** animado (gris claro → gris medio → gris claro)

## 🎨 Animaciones CSS ([globals.css](src/app/globals.css))

### Animaciones disponibles:

1. **fade-in**: Aparece con escala y opacidad
   ```css
   animation: fade-in 0.8s ease-out;
   ```

2. **fade-out**: Desaparece con opacidad
   ```css
   animation: fade-out 0.5s ease-out;
   ```

3. **loading-bar**: Barra de progreso deslizante
   ```css
   animation: loading-bar 1.5s ease-in-out infinite;
   ```

4. **shimmer**: Efecto shimmer para skeletons
   ```css
   animation: shimmer 1.5s ease-in-out infinite;
   ```

## 🔧 Integración

### En el Layout Principal

```tsx
import PageLoader from "@/components/page-loader";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <PageLoader>{children}</PageLoader>
      </body>
    </html>
  );
}
```

El componente se integra automáticamente en [layout.tsx:4,35](src/app/layout.tsx#L4,L35).

## ⚙️ Configuración

### Tiempos de Loading

Puedes ajustar los tiempos en [page-loader.tsx](src/components/page-loader.tsx):

```tsx
// Loading inicial
const timer = setTimeout(() => {
  setIsLoading(false);
}, 1500); // 👈 Cambia este valor (en ms)

// Transiciones entre páginas
const timer = setTimeout(() => {
  setIsTransitioning(false);
}, 800); // 👈 Cambia este valor (en ms)
```

### Animaciones de Imagen

En [optimized-image.tsx](src/components/optimized-image.tsx):

```tsx
// Duración de la transición
className={`transition-opacity duration-500`} // 👈 Cambia duration-XXX
```

## 🎭 Estados del Sistema

### 1. Primera Carga (isLoading = true)
```
┌─────────────────────────────────┐
│                                 │
│          [LOGO FUSION]          │
│                                 │
│       ──────────────────        │
│       Barra de progreso         │
│                                 │
└─────────────────────────────────┘
Fondo: Blanco sólido
Duración: 1.5s
```

### 2. Transición de Página (isTransitioning = true)
```
┌─────────────────────────────────┐
│                                 │
│       [LOGO PEQUEÑO]            │
│        (pulsando)               │
│                                 │
└─────────────────────────────────┘
Fondo: Blanco 95% + blur
Duración: 0.8s
```

### 3. Carga de Imágenes Individuales
```
┌─────────────────────────────────┐
│   ▓▓▓░░░░░░░░░░░░░░░░           │
│   Shimmer animation             │
│                                 │
└─────────────────────────────────┘
Mientras: La imagen se descarga
Después: Fade-in suave (500ms)
```

## 🎯 Flujo de Usuario

```
Usuario entra al sitio
    ↓
[Loading Screen - 1.5s]
    ↓
Contenido visible con skeletons
    ↓
Imágenes aparecen gradualmente
    ↓
Usuario navega a otra página
    ↓
[Transición - 0.8s]
    ↓
Nueva página con skeletons
    ↓
Imágenes aparecen gradualmente
```

## ✨ Características

### ✅ Ventajas

1. **UX profesional**: El usuario no ve imágenes cargándose
2. **Feedback visual**: Siempre sabe que algo está pasando
3. **Percepción de velocidad**: El loading inicial crea expectativa
4. **Coherencia**: Todas las transiciones son consistentes
5. **Optimización**: Funciona con el sistema de Cloudinary

### 🎨 Personalización

Para cambiar el diseño del loader:

1. **Color del fondo**: Edita `bg-white` en [page-loader.tsx:13](src/components/page-loader.tsx#L13)
2. **Logo**: Reemplaza `/fusion-negro-2.png`
3. **Barra de progreso**: Edita los colores en línea 23-24
4. **Skeleton color**: Edita `from-gray-100 via-gray-200 to-gray-100` en [optimized-image.tsx:112](src/components/optimized-image.tsx#L112)

## 🚀 Rendimiento

- **Loading inicial**: No bloquea la carga de recursos críticos
- **Transiciones**: Usa CSS animations (GPU acelerado)
- **Skeletons**: Elementos ligeros (divs con gradients)
- **Zero dependencies**: Solo React y Next.js

## 📝 Notas Importantes

1. **No afecta SEO**: El contenido está presente en el HTML
2. **Compatible con SSR**: Funciona con exportación estática
3. **Accesibilidad**: Las imágenes mantienen sus alt texts
4. **Progressive enhancement**: Si JS falla, el contenido se muestra igual

## 🔮 Mejoras Futuras (Opcional)

1. **Porcentaje real de carga**: Trackear imágenes cargadas vs totales
2. **Skip button**: Permitir saltar el loading inicial
3. **Animaciones personalizadas**: Diferentes para cada sección
4. **Prefetch inteligente**: Precargar siguiente página anticipadamente
5. **Analytics**: Trackear tiempos de carga para optimizar
