# Usa una imagen de Node.js
FROM node:16

# Crea un directorio de trabajo
WORKDIR /app

# Copia los archivos
COPY package*.json ./
RUN npm install
COPY . .

# Expone el puerto
EXPOSE 3002

# Comando para iniciar el servicio
CMD ["node", "index.js"]
