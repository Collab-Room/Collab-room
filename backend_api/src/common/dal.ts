import { Model } from 'mongoose'
import logger from './logger'

const getOne = (model: Model<any, {}, {}>) =>
  async (props: any, populate_opts: any = '') => {
    logger.info(`Fetching ${model.modelName} with email: ${props.email}`)
    return await model.findOne(props).populate(populate_opts).lean().exec()
  }

const dataAccessLayer = (model: Model<any, {}, {}>) => ({
    getOne: getOne(model),

})
export default dataAccessLayer;