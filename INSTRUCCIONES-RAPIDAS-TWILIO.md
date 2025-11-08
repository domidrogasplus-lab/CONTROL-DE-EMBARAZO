# 🚀 Instrucciones Rápidas - Twilio WhatsApp

## ✅ Tu Sistema ya está Configurado

El código ya está listo para usar tus credenciales de Twilio. Solo necesitas:

## 📝 Paso 1: Crear archivo .env

En la raíz del proyecto, crea un archivo llamado `.env` con este contenido:

```env
VITE_TWILIO_ACCOUNT_SID=AC75b5c9d17a21b48813a81e6a09a2e716
VITE_TWILIO_AUTH_TOKEN=TU_AUTH_TOKEN_AQUI
VITE_TWILIO_WHATSAPP_FROM=whatsapp:+14155238886
VITE_TWILIO_WHATSAPP_TO=whatsapp:+573112755960
VITE_TWILIO_CONTENT_SID=HXb5b62575e6e4ff6129ad7c8efe1f983e
```

**⚠️ IMPORTANTE:** Reemplaza `TU_AUTH_TOKEN_AQUI` con tu Auth Token real de Twilio.

### Cómo obtener tu Auth Token:

1. Ve a https://www.twilio.com/console
2. Inicia sesión
3. Ve a **Account** → **API Keys & Tokens**
4. Haz clic en **"View"** junto a Auth Token
5. Copia el token y pégalo en el archivo `.env`

## 🔄 Paso 2: Reiniciar el Servidor

```bash
npm run dev
```

## ✅ Paso 3: Probar

1. Agrega una cita médica para mañana
2. El sistema automáticamente:
   - ✅ Mostrará el toast dorado
   - ✅ Reproducirá la voz de niña
   - ✅ Programará el WhatsApp para las 9 PM

## 📱 Verificar WhatsApp Sandbox

Asegúrate de que el número `+573112755960` esté unido al Sandbox:

1. Envía un mensaje a `+14155238886` con el código que Twilio te dio
2. Una vez unido, recibirás los mensajes automáticamente

## 🎯 Cómo Funciona

1. **Al agregar una cita para mañana:**
   - El sistema detecta la cita automáticamente
   - Programa el mensaje de WhatsApp para las 9:00 PM hora Colombia

2. **A las 9:00 PM:**
   - Se envía automáticamente el mensaje por WhatsApp
   - Mensaje: "💛 Mami, recuerda tu cita mañana a las [hora] con el [doctor] en [lugar]. Te amo mucho 💛"

3. **Verificación continua:**
   - Cada hora verifica si hay nuevas citas
   - Reprograma recordatorios automáticamente

## 🔍 Ver Logs

Abre la consola del navegador (F12) para ver:
- `📅 Mensaje de WhatsApp programado para: ...`
- `✅ Mensaje de WhatsApp enviado exitosamente`
- `❌ Error...` (si hay algún problema)

## ⚠️ Solución de Problemas

### No se envía el mensaje:
- Verifica que el archivo `.env` esté en la raíz del proyecto
- Verifica que el Auth Token sea correcto
- Asegúrate de que el número esté unido al Sandbox
- Revisa la consola del navegador para ver errores

### El recordatorio no se programa:
- Verifica que la cita tenga fecha y hora válidas
- Asegúrate de que la fecha sea para mañana
- Revisa la consola para ver mensajes de programación

---

**¡Listo! Tu sistema de WhatsApp está completamente integrado.** 📱💛

