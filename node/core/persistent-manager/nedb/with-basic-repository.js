module.exports = withBasicRepository = (wrapper, table) => {
  wrapper.save = (obj) => (
    new Promise((resolve, reject) => {
      table.insert(obj, (err, newDoc) => {
        if (err) {
            reject(err);
        } else {
            resolve(newDoc);
        }
      });
    })
  );

  wrapper.update = (obj) => (
    new Promise((resolve, reject) => {
      table.update({ _id: obj._id }, obj, {}, (err, numberFilesModified) => {
        if (err) {
          reject(err);
        } else {
          resolve({ "filesUpdated": numberFilesModified });
        }
      });
    })
  );

  wrapper.search = (obj) => (
    new Promise((resolve, reject) => {
      table.find(obj, (err, docs) => {
        if (err) {
          reject(err);
        } else {
          resolve(docs);
        }
      });
    })
  );

  wrapper.findOne = (obj) => (
    new Promise((resolve, reject) => {
      table.findOne(obj, (err, doc) => {
        if (err) {
          reject(err);
        } else {
          resolve(doc);
        }
      });
    })
  );

  wrapper.list = () => (
    new Promise((resolve, reject) => {
      table.find({}, (err, docs) => {
        if (err) {
          reject(err);
        } else {
          resolve(docs);
        }
      });
    })
  );

  wrapper.paginate = (obj, count, offset, sort) => (
    new Promise((resolve, reject) => {
      table
        .find(obj)
        .sort(sort)
        .skip(offset)
        .limit(count)
        .exec(function (err, docs) {
          if(err) {
            reject(err);
          } else {
            resolve(docs);
          }
        });
    })
  );

  wrapper.remove = (obj) => (
    new Promise((resolve, reject) => {
      table.remove(obj, {}, (err, numberFilesRemoved) => {
        if (err) {
          reject(err);
        } else {
          resolve({ "filesRemoved": numberFilesRemoved });
        }
      })
    })
  );

  wrapper.count = () => (
    new Promise((resolve, reject) => {
      table.count({}, (err, numberFiles) => {
        if (err) {
          reject(err);
        } else {
          resolve({ "numberFiles": numberFiles });
        }
      });
    })
  );

  return wrapper;
}
