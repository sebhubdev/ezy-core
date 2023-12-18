module.exports = (req, res, next) => {
  res.set({
    "Cache-Control": "public, max-age=31536000",
    "Access-Control-Allow-Origin": "*",
  });
  next();
};
