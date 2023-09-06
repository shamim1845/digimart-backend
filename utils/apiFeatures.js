class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
    this.pages = Promise;
  }

  search() {
    const keyWord = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};
    this.query = this.query.find({ ...keyWord });
    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr };

    // Removing some fields for category
    const removeFields = ["keyword", "page", "limit"];

    removeFields.forEach((key) => delete queryCopy[key]);

    // Filter For Price and Rating
    let queryStr = JSON.stringify(queryCopy);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);
    queryStr = JSON.parse(queryStr);

    this.query = this.query.find(queryStr);
    return this;
  }

  pageList(resultPerPage) {
    this.pages = new Promise((resolve, reject) => {
      this.query
        .then((products_pagination) => {
          let pageList = Math.ceil(products_pagination.length / resultPerPage);

          let pages = [];
          for (let i = 1; i <= pageList; i++) {
            pages.push(i);
          }
          resolve(pages);
        })
        .catch((error) => {
          reject(error);
        });
    });
    return this;
  }

  pagination(resultPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;
    const skip = resultPerPage * (currentPage - 1);
    this.query = this.query.limit(resultPerPage).skip(skip);

    return this;
  }
}

module.exports = ApiFeatures;
