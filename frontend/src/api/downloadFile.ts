import getCompleteApiPath from '../services/getCompleteApiPath.ts'

const apiPath = getCompleteApiPath('downloads');
  

export const downloadFile = async (filePath: string, filename: string): Promise<void> => {
  const response: Response = await fetch(`${apiPath}/${filePath}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch file: ${response.statusText}`);
  }
  const blob = await response.blob();
  const file = new File([blob], filename, { type: 'application/pdf' });
  const blobUrl = window.URL.createObjectURL(file);
  window.open(blobUrl, '_blank');
};