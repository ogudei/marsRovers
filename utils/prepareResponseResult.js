exports.prepareResponseResult = function (request, response, status, data, err) {
    if (data !== undefined) {
      if (typeof data === 'object') {
        if (Array.isArray(data)) {
          data = { value: data };
        }
      }
      else
        data = { value: data };
    }
    let result = {
      data: data === undefined ? (err === undefined ? { 'value': 'true' } : { 'value': 'false' }) : data,
      success: err === undefined ? true : false,
      error: err === undefined ? [] : [
        {
          code: err.status,
          detail: err.errorDetail
        }
      ]
    };
    return response.status(status).send(result);
  }