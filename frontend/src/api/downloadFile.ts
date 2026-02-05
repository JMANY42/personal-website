const apiPath = '/api/downloads'
const fullApiPath = import.meta.env.MODE === 'production'
  ? apiPath
  : 'http://localhost:5000'+apiPath;
  

export const downloadFile = async (path: string, filename: string): Promise<void> => {
  const response: Response = await fetch(`${fullApiPath}/${path}`);
  
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