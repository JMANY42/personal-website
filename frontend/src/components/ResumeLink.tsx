import { downloadFile } from '../api/downloadFile.ts'

interface ResumeLinkProps {
  svg?: boolean;
}

function ResumeLink({ svg = true }: ResumeLinkProps) {
  const handleDownloadResume = async (e: React.MouseEvent<HTMLAnchorElement>): Promise<void> => {
    e.preventDefault();
    try {
      await downloadFile('resume', 'David_Lewis_Resume');
    } catch (error) {
      console.error('Error downloading resume:', error instanceof Error ? error.message : 'Unknown error');
    }
  };

  return (
    <a 
      onClick={handleDownloadResume}
      className="group inline-flex items-center gap-2 text-lg text-accent hover:text-main transition-all duration-300 cursor-pointer"
    >
      {svg && (
        <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
        </svg>
      )}
      Resume
    </a>
  )
}

export default ResumeLink