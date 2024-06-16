import { Router } from 'express'
import { body, validationResult } from 'express-validator'
import { authorize } from '../auth'
import { handleInputErrors } from '../middleware'
import { createNewUser, signInUser } from '../handlers/user'

const router = Router()

router.post('/user', createNewUser)
router.post('/signin', signInUser)

export default router