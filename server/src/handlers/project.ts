import prisma from '../db'


export const getProjects = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            id: req.user.id
        },
        include: {
            projects: true
        }
    })

    res.json({ data: user.projects })
}

export const getProjectById = async (req, res) => {
    const id = req.params.id
    // Why do we need to index on both id and userid
    // rather than indexing on only id and erroring out
    // in case userId on project is not the one passed
    const project = await prisma.project.findFirst({
        where: {
            id,
            userId: req.user.id
        }
    })
    res.json({ data: project })
}

export const createProject = async (req, res) => {
    const { name } = req.body
    const { id: userId } = req.user
    const project = await prisma.project.create({
        data: {
            name,
            userId
        }
    })
}

export const updateProject = async (req, res) => {
    const { id } = req.params
    const { name } = req.body
    const { id: userId } = req.user
    const updated = await prisma.project.update({
        where: {
            id_userId: {

                id,
                userId
            }
        },
        data: {
            // need to add in update to shemas
            // but that would be a different handler 
            // I would assume unless we are adding a schema
            // in which case, we need to add it to the project
            name
        }
    })
}

export const deleteProject = async (req, res) => {
    const { id } = req.params
    const { id: userId } = req.user
    const deleted = await prisma.project.delete({
        where: {
            id_userId: {
                id,
                userId
            }
        }
    })
}