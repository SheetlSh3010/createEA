exports.paginateResults = (model, p, limit) => {
    const startIndex = (p - 1) * limit;
    const endIndex = p * limit;
  
    const results = {};
  x``
    if (endIndex < model.length) {
      results.next = {
        p: p + 1,
        limit: limit
      };
    }
  
    if (startIndex > 0) {
      results.previous = {
        p: p - 1,
        limit: limit
      };
    }
  
    results.results = model.slice(startIndex, endIndex);
  
    return results;
  };
  