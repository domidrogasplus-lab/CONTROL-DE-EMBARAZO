# 🎤 Guía: Sistema de Voz de Niña/Bebé

## 📋 Estado Actual

El sistema de notificaciones **ya está funcionando** con voz de niña usando **SpeechSynthesis** (API nativa del navegador).

### ✅ Características Actuales:
- ✅ Voz optimizada para sonar como niña pequeña (pitch: 2.0, rate: 0.65)
- ✅ Detección automática de citas para mañana
- ✅ Mensaje cariñoso personalizado
- ✅ Toast dorado con animación bounce
- ✅ **No requiere configuración adicional** - Funciona inmediatamente

---

## 🚀 Opción Avanzada: ElevenLabs API (Voz Más Realista)

Si quieres una voz **más realista y natural** de niña, puedes usar **ElevenLabs API**.

### 📝 Pasos para Configurar ElevenLabs:

#### 1. Obtener API Key
1. Ve a https://elevenlabs.io
2. Crea una cuenta (tienen plan gratuito con créditos)
3. Ve a tu perfil → API Keys
4. Copia tu API key

#### 2. Buscar Voz de Niña en Español
1. En el dashboard de ElevenLabs, ve a "Voices"
2. Busca una voz de niña pequeña en español
3. Copia el **Voice ID** (ejemplo: `21m00Tcm4TlvDq8ikWAM`)

#### 3. Configurar en el Proyecto

**a) Crear archivo `.env` en la raíz del proyecto:**
```env
VITE_ELEVENLABS_API_KEY=tu_api_key_aqui
VITE_ELEVENLABS_VOICE_ID=tu_voice_id_aqui
```

**b) Modificar `src/utils/voiceService.js`:**

En la función `usarElevenLabs()`, reemplaza:
```javascript
const voiceId = 'TU_VOICE_ID_AQUI';
```

Por:
```javascript
const voiceId = import.meta.env.VITE_ELEVENLABS_VOICE_ID || 'TU_VOICE_ID_AQUI';
```

**c) Modificar `src/components/Notificador.jsx`:**

Cambia esta línea:
```javascript
hablarConVozNina(notificacion.mensaje);
```

Por:
```javascript
// Opción 1: Usar ElevenLabs (si está configurado)
usarElevenLabs(notificacion.mensaje).catch(() => {
  // Fallback a SpeechSynthesis si falla
  hablarConVozNina(notificacion.mensaje);
});

// O mantener SpeechSynthesis:
// hablarConVozNina(notificacion.mensaje);
```

#### 4. Reiniciar el Servidor
```bash
npm run dev
```

---

## 🎯 Comparación de Opciones

| Característica | SpeechSynthesis (Actual) | ElevenLabs API |
|----------------|-------------------------|----------------|
| **Costo** | ✅ Gratis | ⚠️ Requiere créditos |
| **Calidad** | ⭐⭐⭐ Buena | ⭐⭐⭐⭐⭐ Excelente |
| **Configuración** | ✅ Ninguna | ⚠️ Requiere API key |
| **Realismo** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ Muy realista |
| **Velocidad** | ✅ Instantáneo | ⚠️ Requiere conexión |

---

## 💡 Recomendación

**Para empezar:** Usa SpeechSynthesis (ya configurado) - Es gratis y funciona bien.

**Si quieres más realismo:** Configura ElevenLabs cuando tengas tiempo - La voz será más natural.

---

## 🔧 Solución de Problemas

### La voz no suena como niña
- Verifica que tu navegador tenga voces en español instaladas
- En Chrome/Edge: Configuración → Idiomas → Añadir español
- El pitch y rate están optimizados, pero pueden variar según el navegador

### ElevenLabs no funciona
- Verifica que el archivo `.env` esté en la raíz del proyecto
- Asegúrate de que la variable empiece con `VITE_`
- Reinicia el servidor después de crear/modificar `.env`
- Verifica que tu API key sea válida y tenga créditos

---

## 📚 Recursos

- [Documentación SpeechSynthesis](https://developer.mozilla.org/es/docs/Web/API/SpeechSynthesis)
- [ElevenLabs Dashboard](https://elevenlabs.io/app)
- [ElevenLabs API Docs](https://elevenlabs.io/docs)

---

**¡El sistema ya está funcionando! No necesitas hacer nada más para empezar a usarlo.** 🎉

