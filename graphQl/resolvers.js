const Recipie = require('../models/recipies')

module.exports = {
    Query: {
        async recipie(_, { ID }) {
            return await Recipie.findById(ID);
        },
        async getRecipies(_, { amount }) {
            return await Recipie.find().sort({ createdAt: -1 }).limit(amount)
        }
    },
    Mutation: {
        async createRecipie(_, { recipieInput: { name, description } }) {
            const newRecipie = new Recipie({
                name,
                description,
                createdAt: new Date().toISOString(),
                thumbsUp: 0,
                thumbsDown: 0
            })
            const savedRecipie = await newRecipie.save();
            return {
                id: savedRecipie.id,
                ...savedRecipie.doc
            }
        },
        async deleteRecipie(_, { ID }) {
            return (await Recipie.deleteOne({ _id: ID })).deletedCount 
        },
        async editRecipie(_, { ID, recipieInput: { name, description } }) {
            return (await Recipie.updateOne({ _id: ID }, { name, description })).modifiedCount 
        }
    }
}