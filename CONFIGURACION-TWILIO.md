# 📱 Configuración de Twilio WhatsApp - Guía Rápida

## ✅ Credenciales Configuradas

Basado en tu código curl, estas son tus credenciales:

- **Account SID:** `AC75b5c9d17a21b48813a81e6a09a2e716`
- **From (Sandbox):** `whatsapp:+14155238886`
- **To (Destino):** `whatsapp:+573112755960`
- **Content SID:** `HXb5b62575e6e4ff6129ad7c8efe1f983e`

## 🔧 Pasos para Configurar

### 1. Obtener tu Auth Token

1. Ve a https://www.twilio.com/console
2. Inicia sesión en tu cuenta
3. Ve a **Account** → **API Keys & Tokens**
4. Haz clic en **"View"** junto a Auth Token
5. Copia tu **Auth Token** (manténlo seguro)

### 2. Crear archivo .env

1. En la raíz del proyecto, crea un archivo llamado `.env`
2. Copia y pega este contenido:

```env
# Twilio Credentials
VITE_TWILIO_ACCOUNT_SID=AC75b5c9d17a21b48813a81e6a09a2e716
VITE_TWILIO_AUTH_TOKEN=tu_auth_token_aqui
VITE_TWILIO_WHATSAPP_FROM=whatsapp:+14155238886
VITE_TWILIO_WHATSAPP_TO=whatsapp:+573112755960
VITE_TWILIO_CONTENT_SID=HXb5b62575e6e4ff6129ad7c8efe1f983e

# ElevenLabs (Opcional)
VITE_ELEVENLABS_API_KEY=tu_api_key_aqui
VITE_ELEVENLABS_VOICE_ID=tu_voice_id_aqui
```

3. Reemplaza `tu_auth_token_aqui` con tu Auth Token real

### 3. Reiniciar el Servidor

```bash
npm run dev
```

## 🧪 Probar el Sistema

1. Agrega una cita médica para mañana
2. El sistema automáticamente:
   - Mostrará el toast con la notificación
   - Reproducirá la voz de niña
   - Programará el mensaje de WhatsApp para las 9 PM

## 📋 Verificar que Funciona

1. Abre la consola del navegador (F12)
2. Busca mensajes como:
   - `📅 Mensaje de WhatsApp programado para: ...`
   - `✅ Mensaje de WhatsApp enviado exitosamente`

## ⚠️ Notas Importantes

- El número de destino (`+573112755960`) debe estar unido al Sandbox de Twilio
- Para unirte al Sandbox, envía el código que Twilio te da a ese número
- Los mensajes se enviarán automáticamente a las 9:00 PM hora Colombia
- El sistema programa los mensajes cuando detecta citas para mañana

## 🔒 Seguridad

- **NUNCA** subas el archivo `.env` a GitHub
- El archivo `.env` ya está en `.gitignore`
- Mantén tu Auth Token seguro y privado

