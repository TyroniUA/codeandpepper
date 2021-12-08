import { StarShip } from "../models/starships";

interface stateOfAnswersInterface {
  [id: string]: {
    answer: string,
    surveyQuestionId: string
  }
}

const getAllStarShip = async (): Promise<StarShip[]> => {
  const listOfStarShips = await StarShip.findAll()

  return listOfStarShips
}

const getOneStarShip = async (id: string): Promise<StarShip> => {
  const oneStarShip = await StarShip.findByPk(id)
  return oneStarShip;
}

const updateStarShip = async (id: string, starShip: any): Promise<StarShip> => {
  const humanById = await StarShip.findByPk(id);
  const updatedStarShip = await humanById.update({...starShip})
  return updatedStarShip

}

const createStarShip = async (starShip: any) => {
  const createdStarShip = await StarShip.create({
    ...starShip
  })
  return createdStarShip;
}
const deleteStarShip = async (id: any) => {
  const createdStarShip = await StarShip.destroy({
    where:{
      id
    }
  })
  return createdStarShip;
}

export {
  getAllStarShip,
  updateStarShip,
  getOneStarShip,
  createStarShip,
  deleteStarShip
}