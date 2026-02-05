import path from 'path';
import fs from 'fs/promises';

export async function getResume(req, res) {
  const DATA_PATH = path.resolve("src/files/resume.pdf");
  
  try {
    // Check if file exists
    await fs.access(DATA_PATH, fs.constants.F_OK);
    
    // File exists, send it
    return res.download(DATA_PATH, 'resume.pdf', (err) => {
      if (err) {
        console.error('Error sending file:', err);
        if (!res.headersSent) {
          return res.status(500).json({ 
            error: 'Failed to download file' 
          });
        }
      }
    });
  } catch (error) {
    console.error('File not found:', error);
    return res.status(404).json({ 
      error: 'Resume not found' 
    });
  }
}