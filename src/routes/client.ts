/* import { Router } from 'express';
import { ClientController } from '../controllers/clientController';
import { authenticateToken } from '../middleware/auth';


const router = Router();

// Liste des clients
router.get('/', ClientController.getAll);         // GET /api/clients
// Création d'un client
router.post('/', ClientController.create);        // POST /api/clients
// Détail d'un client


router.get('/:id', ClientController.getById);     // GET /api/clients/:id

router.put('/:id', ClientController.update);     // PUT /api/clients/:id

router.delete('/:id', ClientController.delete);   // DELETE /api/clients/:id

router.post('/avis', authenticateToken, ClientController.createAvis);

// Récupérer tous les avis du client connecté
router.get('/me', authenticateToken, ClientController.getByClient);

// Récupérer tous les avis (admin)
router.get('/avis/all', ClientController.getAllavis);

// Supprimer un avis
router.delete('/:id', authenticateToken, ClientController.deleteAvisavis);


export default router;   */