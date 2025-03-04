// This API route logs a user out.
import withSession from '../lib/withSession';

export async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Set session
      req.session.destroy();
      return res.redirect('/');
    } catch (error) {
      const errorString = JSON.stringify(error);
      console.log(error);
      return res.status(400).json({ errorString });
    }
  } else {
    // Handle any other HTTP method
  }
}

export default withSession(handler);