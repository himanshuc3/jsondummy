import { Router } from 'express'
import { body, validationResult } from 'express-validator'
import { authorize } from '../auth'
import { handleInputErrors } from '../middleware'
import { createProject, deleteProject, getProjectById, getProjects, updateProject } from '../handlers/project'

const router = Router()

router.get("/projects", authorize, getProjects)
// route/path parameters, different from 
// query parameters used for filtering
router.get("/projects/:id", authorize, body('name'), handleInputErrors, getProjectById)
router.post("/project", createProject)
router.put("/projects/:id", updateProject)
router.delete("/projects/:id", deleteProject)

// put - replace data; patch - modify data
// just a convention

export default router