// Custom middleware that logs out the type and path of each request to the server
const clog = (req, res, next) => {
    const fgGreen = '\x1b[42m';
    const fgBlue = '\x1b[44m';
    const fgOrange = '\x1b[43m'
    switch (req.method) {
      case 'GET': {
        console.info(`📗 ${fgGreen}${req.method} request to ${req.path}`);
        break;
      }
      case 'POST': {
        console.info(`📘 ${fgBlue}${req.method} request to ${req.path}`);
        break;
      }
      default:
        console.log(`📙${fgOrange}${req.method} request to ${req.path}`);
    }
                                            
    next();
  };
  
  exports.clog = clog;
  