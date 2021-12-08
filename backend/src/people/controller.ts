import {Request, Response} from "express";
import { createValidator } from "express-joi-validation";
import {Router} from "express";
import {getAllHuman, getOneHuman, createHuman, updateHuman, deleteHuman} from './service';
import * as schema from './schema'
export const router = Router();
export const route = "/human";
const validator = createValidator();


router.get('/', async(req: Request, res: Response) => {
  const result = await getAllHuman()

  res.status(200).json({result});
});

router.get('/:id',validator.params(schema.get.params), async(req: Request, res: Response) => {
  const {id} = req.params;
  const result = await getOneHuman(id)
  
  res.status(200).json({data: result});
})

router.post('/create', validator.body(schema.create.body), async(req: Request, res: Response) => {
  const result = await createHuman(req.body)
  res.status(201).json({data: result});
})

router.put('/:id',  validator.params(schema.update.params), async(req: Request, res: Response) => {
  const {id} = req.params;
  const result = await updateHuman(id, req.body)
  res.status(201).json({data: result});
})

router.delete('/:id', validator.params(schema.deleteSchema.params), async (req:Request, res: Response) => {
  const {id} = req.params;
  const result = await deleteHuman(id)
   res.status(200).json({result});
});
