import {Router}from "express"
import { StudentRoutes } from "../modules/student/student.route"
import { UserRoutes } from "../modules/user/user.route"
const router=Router()
router.use('/students',StudentRoutes)
router.use('/users',UserRoutes)
export default router