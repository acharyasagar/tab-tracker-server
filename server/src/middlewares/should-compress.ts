import * as compression from 'compression'
import * as express from 'express'

export = (req: express.Request, res: express.Response): boolean => {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false
  }

  // fallback to standard filter function
  return compression.filter(req, res)
}
