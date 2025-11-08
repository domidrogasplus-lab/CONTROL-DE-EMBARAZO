# 🎯 Guía Completa de Configuración - Sistema de Notificaciones

## 📋 Resumen del Sistema

El sistema de notificaciones incluye:
1. ✅ **Voz Realista de Niña** - Usando ElevenLabs API
2. ✅ **Recordatorios por WhatsApp** - Usando Twilio API
3. ✅ **Notificaciones Visuales** - Toast dorado con animación

---

## 🎤 PARTE 1: Configurar Voz de Niña (ElevenLabs)

### Paso 1: Crear Cuenta en ElevenLabs

1. Ve a https://elevenlabs.io
2. Crea una cuenta (tienen plan gratuito con créditos)
3. Verifica tu email

### Paso 2: Obtener API Key

1. Inicia sesión en tu dashboard
2. Ve a tu perfil (arriba derecha) → **API Keys**
3. Haz clic en **"Create API Key"**
4. Copia la API key (guárdala en un lugar seguro)

### Paso 3: Buscar Voz de Niña

1. En el dashboard, ve a **"Voices"**
2. Busca voces en español
3. Prueba voces que suenen como niña pequeña
4. Cuando encuentres una que te guste, copia su **Voice ID**
   - Ejemplo: `21m00Tcm4TlvDq8ikWAM`

### Paso 4: Configurar en el Proyecto

1. Copia el archivo `.env.example` y renómbralo a `.env`
2. Abre el archivo `.env` y completa:

```env
VITE_ELEVENLABS_API_KEY=tu_api_key_aqui
VITE_ELEVENLABS_VOICE_ID=tu_voice_id_aqui
```

3. Guarda el archivo
4. Reinicia el servidor: `npm run dev`

### ✅ Verificar que Funciona

- Agrega una cita médica para mañana
- Deberías escuchar la voz de niña cuando aparezca la notificación
- Si no funciona, revisa la consola del navegador (F12)

---

## 📱 PARTE 2: Configurar WhatsApp (Twilio)

### Paso 1: Crear Cuenta en Twilio

1. Ve a https://www.twilio.com
2. Crea una cuenta gratuita
3. Verifica tu número de teléfono

### Paso 2: Configurar WhatsApp Sandbox

1. En el dashboard de Twilio, ve a **Messaging** → **Try it out** → **Send a WhatsApp message**
2. Sigue las instrucciones para unirte al Sandbox
3. Envía el código que te dan a tu número de WhatsApp
4. Una vez unido, copia el número Sandbox (ej: `+14155238886`)

### Paso 3: Obtener Credenciales

1. En el dashboard, ve a **Account** → **API Keys & Tokens**
2. Copia tu **Account SID**
3. Copia tu **Auth Token** (haz clic en "View" para verlo)

### Paso 4: Crear Backend

**OPCIÓN A: Usar Vercel (Recomendado - Gratis)**

1. Instala Vercel CLI: `npm install -g vercel`
2. Crea una carpeta `api` en la raíz del proyecto
3. Copia el archivo `backend-example/api/whatsapp.js` a `api/whatsapp.js`
4. Instala Twilio: `npm install twilio`
5. Despliega: `vercel`
6. En Vercel Dashboard → Settings → Environment Variables, añade:
   ```
   TWILIO_ACCOUNT_SID=tu_account_sid
   TWILIO_AUTH_TOKEN=tu_auth_token
   TWILIO_WHATSAPP_FROM=whatsapp:+14155238886
   TWILIO_WHATSAPP_TO=whatsapp:+573001234567
   ```
   (Reemplaza con tus valores reales)

**OPCIÓN B: Usar Netlify Functions**

1. Crea carpeta `netlify/functions/whatsapp.js`
2. Adapta el código del ejemplo para Netlify
3. Despliega en Netlify
4. Configura variables de entorno en Netlify Dashboard

**OPCIÓN C: Servidor Propio (Node.js/Express)**

1. Crea un servidor Express
2. Instala Twilio: `npm install twilio express`
3. Crea endpoint `/api/whatsapp`
4. Usa el código del ejemplo como base
5. Despliega en tu servidor

### Paso 5: Configurar URL del Backend

1. Abre el archivo `.env`
2. Añade la URL de tu backend:

```env
VITE_BACKEND_URL=https://tu-proyecto.vercel.app/api/whatsapp
```

3. Guarda y reinicia el servidor

### ✅ Verificar que Funciona

1. Agrega una cita médica para mañana
2. Espera a las 9:00 PM hora Colombia
3. Deberías recibir el mensaje por WhatsApp

---

## 🕒 Zona Horaria de Colombia

El sistema está configurado para enviar mensajes a las **9:00 PM hora Colombia (GMT-5)**.

**Nota:** Si estás probando en otra zona horaria, el sistema calculará la diferencia automáticamente.

---

## 🔒 Seguridad

### ✅ Lo que SÍ debes hacer:

- ✅ Guardar credenciales en `.env` (archivo local)
- ✅ Añadir `.env` a `.gitignore` (ya está incluido)
- ✅ Usar variables de entorno en el servidor para Twilio
- ✅ Nunca subir credenciales a GitHub

### ❌ Lo que NO debes hacer:

- ❌ Poner credenciales directamente en el código
- ❌ Subir el archivo `.env` a GitHub
- ❌ Compartir tus API keys públicamente

---

## 🐛 Solución de Problemas

### La voz no suena

1. Verifica que las credenciales de ElevenLabs estén correctas en `.env`
2. Revisa la consola del navegador (F12) para ver errores
3. Verifica que tengas créditos en tu cuenta de ElevenLabs
4. Prueba con el fallback (SpeechSynthesis) quitando las credenciales temporalmente

### WhatsApp no envía mensajes

1. Verifica que el backend esté desplegado y funcionando
2. Revisa los logs del servidor (Vercel/Netlify)
3. Verifica que todas las variables de entorno estén configuradas
4. Asegúrate de estar unido al Sandbox de Twilio
5. Verifica que el número de destino esté en formato correcto: `whatsapp:+573001234567`

### Los recordatorios no se programan

1. Verifica que las citas tengan fecha y hora válidas
2. Revisa la consola del navegador para ver mensajes de programación
3. Asegúrate de que la zona horaria esté configurada correctamente

---

## 📚 Recursos Adicionales

- [Documentación ElevenLabs](https://elevenlabs.io/docs)
- [Documentación Twilio WhatsApp](https://www.twilio.com/docs/whatsapp)
- [Vercel Serverless Functions](https://vercel.com/docs/functions)
- [Netlify Functions](https://docs.netlify.com/functions/overview/)

---

## 💡 Tips

1. **Para desarrollo local:** Usa `http://localhost:3000/api/whatsapp` en `.env`
2. **Para producción:** Usa la URL de tu backend desplegado
3. **Pruebas:** Usa el Sandbox de Twilio (gratis) antes de pasar a producción
4. **Créditos:** ElevenLabs da créditos gratuitos al registrarte

---

**¡Listo! Tu sistema de notificaciones está completamente configurado.** 🎉

