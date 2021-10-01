'use strict'

const { gql } = require('apollo-server');
const fs = require('fs');
const path = require('path');
const resolvers = require('../resolvers');

const typeDefDirs = [
  'enums',
  'inputs',
  'interfaces',
  'unions',
  'objects'
]

const RootSchema = fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8')

let loadedTypeDefs = ''
for (let typeDefDir of typeDefDirs) {
  let dirPath = path.join(__dirname, typeDefDir)
  let dirEntries = fs.readdirSync(dirPath)

  for (let entry of dirEntries) {
    let fileContent = fs.readFileSync(path.join(dirPath, entry), 'utf8')
    loadedTypeDefs += fileContent + '\n'
  }
}

const typeDefs = gql(RootSchema + '\n' + loadedTypeDefs)

module.exports = { typeDefs, resolvers }
