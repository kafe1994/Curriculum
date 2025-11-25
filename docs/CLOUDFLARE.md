# Configuración para Cloudflare Pages

## Build Settings
- Build command: (dejar vacío para sitios estáticos)
- Build output directory: /
- Root directory: (dejar vacío)

## Environment Variables (Opcionales)
- No se requieren para este proyecto estático

## Redirects (Opcional)
Si necesitas redirecciones, crea un archivo `_redirects`:
```
# Ejemplo de redirecciones
/old-url /new-url 301
/cv / 200
```

## Custom Headers (Opcional)
Para headers personalizados, crea un archivo `_headers`:
```
/*
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin

/assets/*
  Cache-Control: public, max-age=31536000

*.html
  Cache-Control: public, max-age=3600
```

## Configuración de Dominio Personalizado
1. En Cloudflare Dashboard > Pages > tu-proyecto > Custom domains
2. Agregar dominio personalizado
3. Seguir las instrucciones DNS

## Optimizaciones
- ✅ Imágenes optimizadas
- ✅ CSS/JS minificado
- ✅ Compresión GZIP habilitada
- ✅ Caché apropiado para assets estáticos