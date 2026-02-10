import getCompleteApiPath from '../services/getCompleteApiPath.ts'

const apiPath = getCompleteApiPath('downloads');
  

export const downloadFile = async (filePath: string, filename: string): Promise<void> => {
  const response: Response = await fetch(`${apiPath}/${filePath}`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch file: ${response.statusText}`);
  }
  
  const blob = await response.blob();
  const blobUrl = window.URL.createObjectURL(blob);
  
  const link: HTMLAnchorElement = document.createElement('a');
  link.href = blobUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  window.URL.revokeObjectURL(blobUrl);
};