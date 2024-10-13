const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    if (error.isJoi) {
      const errorMessage = error.details[0].message;
      return res.status(400).json({
        success: false,
        error: errorMessage,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  }
};

module.exports = { asyncHandler };


/*
  const asyncHandler=(requestHandler)=>{
      (req,resp,next)=>{
          Promise.resolve(requestHandler(req,resp,next)).catch((err)=>next(err))
      }
  }
  export {asyncHandler}
  */
