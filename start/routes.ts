/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
// Rutas de replicate
const ReplicateController = () => import('#controllers/replicate')
router.get('/replicate', [ReplicateController, 'index'])
