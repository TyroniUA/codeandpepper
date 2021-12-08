import { Human } from "../models/human";

interface stateOfAnswersInterface {
  [id: string]: {
    answer: string,
    surveyQuestionId: string
  }
}

const getAllHuman = async (): Promise<Human[]> => {
  const listOfHumans = await Human.findAll()

  return listOfHumans
}

const getOneHuman = async (id: string): Promise<Human> => {
  const oneHuman = await Human.findByPk(id)
  return oneHuman;
}

const updateHuman = async (id: string, human: any): Promise<Human> => {
  const humanById = await Human.findByPk(id);
  const updatedHuman = await humanById.update({...human})
  return updatedHuman

}

const createHuman = async (human: any) => {
  const createdHuman = await Human.create({
    ...human
  })
  return createdHuman;
}
const deleteHuman = async (id: any) => {
  const createdHuman = await Human.destroy({
    where:{
      id
    }
  })
  return createdHuman;
}

export {
  getAllHuman,
  updateHuman,
  getOneHuman,
  createHuman,
  deleteHuman
}