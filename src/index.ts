import express, { Request, Response, NextFunction } from 'express';
import cors from "cors";
import * as dotenv from "dotenv";
import path from 'path';
import routes from "./routes";
import "./services/whatsappService"; 

dotenv.config();

const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.options("*", cors());
app.use(express.json());

app.use("/api", routes);
try {
  const YAML = require('yamljs');
  const swaggerUi = require('swagger-ui-express');
  const swaggerPath = path.join(__dirname, '../swagger.yaml');
  const swaggerDocument = YAML.load(swaggerPath);

  if (swaggerDocument && Object.keys(swaggerDocument).length > 0) {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {
      customCss: '.swagger-ui .topbar { display: none }',
      customSiteTitle: 'GIE Backend API Documentation',
      swaggerOptions: {
        docExpansion: 'list',
        filter: true,
        showRequestHeaders: true,
        tryItOutEnabled: true
      }
    }));

    app.get('/swagger.yaml', (req: Request, res: Response) => {
      res.setHeader('Content-Type', 'application/yaml');
      res.setHeader('Content-Disposition', 'attachment; filename=swagger.yaml');
      res.sendFile(swaggerPath);
    });

    console.log('✅ Swagger chargé');
  }
} catch (e) {
  console.warn('⚠️ Swagger désactivé:', (e as Error).message);
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
 console.log(`🚀 Serveur démarré sur le port ${PORT}`);
  console.log(`📊 Environnement: ${process.env.NODE_ENV || 'development'}`);
  console.log(`💚 Health: http://localhost:${PORT}/api/health`);
  console.log(`💚 swagger: http://localhost:${PORT}/api-docs`);
});