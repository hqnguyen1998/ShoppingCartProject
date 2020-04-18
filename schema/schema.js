const graphql = require('graphql');
const CollectionSchema = require('../models/Collection');
const ItemSchema = require('../models/Item');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
} = graphql;

const ItemType = new GraphQLObjectType({
  name: 'ItemType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    img: { type: GraphQLString },
    color: { type: GraphQLString },
    price: { type: GraphQLInt },
    itemLeft: { type: GraphQLInt },
    quantity: { type: GraphQLInt },
    collectionId: {
      type: CollectionType,
      resolve(parent, _) {
        return CollectionSchema.findById(parent.collectionId);
      },
    },
  }),
});

const CollectionType = new GraphQLObjectType({
  name: 'CollectionType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    url: { type: GraphQLString },
    posts: {
      type: new GraphQLList(ItemType),
      resolve(parent, _) {
        return ItemSchema.find({ collectionId: parent.id });
      },
    },
  }),
});

const RootQueryType = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    getItemById: {
      type: ItemType,
      args: { id: { type: GraphQLID } },
      resolve(_, args) {
        return ItemSchema.findById(args.id);
      },
    },
    getItems: {
      type: new GraphQLList(ItemType),
      resolve() {
        return ItemSchema.find({}).sort({ created_at: -1 });
      },
    },
    getCollectionById: {
      type: CollectionType,
      args: { id: { type: GraphQLID } },
      resolve(_, args) {
        return CollectionSchema.findById(args.id);
      },
    },
    getCollections: {
      type: new GraphQLList(CollectionType),
      resolve() {
        return CollectionSchema.find({});
      },
    },
  },
});

const MutationType = new GraphQLObjectType({
  name: 'MutationType',
  fields: {
    createItem: {
      type: ItemType,
      args: {
        name: { type: GraphQLString },
        img: { type: GraphQLString },
        color: { type: GraphQLString },
        price: { type: GraphQLInt },
        itemLeft: { type: GraphQLInt },
        quantity: { type: GraphQLInt },
        collectionId: { type: GraphQLID },
      },
      async resolve(_, args) {
        const createNewItem = await new ItemSchema(args).save();

        return createNewItem;
      },
    },
    updateItem: {
      type: ItemType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        img: { type: GraphQLString },
        color: { type: GraphQLString },
        price: { type: GraphQLInt },
        itemLeft: { type: GraphQLInt },
        quantity: { type: GraphQLInt },
        collectionId: { type: GraphQLID },
      },
      async resolve(_, args) {
        return ItemSchema.findByIdAndUpdate({ _id: args.id }, args, {
          new: true,
        });
      },
    },
    createCollection: {
      type: CollectionType,
      args: {
        name: { type: GraphQLString },
        url: { type: GraphQLString },
      },
      async resolve(_, args) {
        const createNewCollection = await new CollectionSchema(args).save();

        return createNewCollection;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation: MutationType,
});
