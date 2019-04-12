const fs = require('fs');
const path = require('path');

module.exports = {
  schemaLoader: type => {
    return new Promise((resolve, reject) => {
      const schemaPath = path.join(__dirname, `../db/types/${type}/${type}.gql`);
      fs.readFile(schemaPath, { encoding: 'utf-8' }, (err, schema) => {
        if (err) {
          reject(err)
        } else {
          resolve(schema)
        }
      })
    })
  }
} 