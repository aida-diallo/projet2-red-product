import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  const { file } = req.query;
  const filePath = path.join(process.cwd(), 'uploads', file);

  try {
    const fileData = await fs.readFile(filePath);
    res.setHeader('Content-Type', 'image/png');
    res.send(fileData);
  } catch (error) {
    res.status(404).json({ message: 'File not found' });
  }
}

