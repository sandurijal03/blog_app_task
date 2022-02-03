const errorHandler = (error) => {
  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    return 'Malformatted Id.';
  } else {
    return error.message;
  }
};

export default errorHandler;
