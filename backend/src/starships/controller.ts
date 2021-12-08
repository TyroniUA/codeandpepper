import {Request, Response} from "express";
import { createValidator } from "express-joi-validation";
import {Router} from "express";
import {getAllStarShip, getOneStarShip, createStarShip, updateStarShip, deleteStarShip} from './service';
import * as schema from './schema'
export const router = Router();
export const route = "/starship";
const validator = createValidator();


router.get('/', async(req: Request, res: Response) => {
  const result = await getAllStarShip()

  res.status(200).json({result});
});

router.get('/:id',validator.params(schema.get.params), async(req: Request, res: Response) => {
  const {id} = req.params;
  const result = await getOneStarShip(id)
  
  res.status(200).json({data: result});
})

router.post('/create', validator.body(schema.create.body), async(req: Request, res: Response) => {
  const result = await createStarShip(req.body)
  res.status(201).json({data: result});
})

router.put('/:id',  validator.params(schema.update.params), async(req: Request, res: Response) => {
  const {id} = req.params;
  const result = await updateStarShip(id, req.body)
  res.status(201).json({data: result});
})

router.delete('/:id', validator.params(schema.deleteSchema.params), async (req:Request, res: Response) => {
  const {id} = req.params;
  const result = await deleteStarShip(id)
   res.status(200).json({result});
});
