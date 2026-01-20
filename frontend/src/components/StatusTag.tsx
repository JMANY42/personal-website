const StatusTag: React.FC<{ status: string }> = ({ status }) => {
    let statusClassName = 'bg-gray-500/20 text-gray-300 border border-gray-400';
    switch(status){
        case 'Development':
            statusClassName = 'bg-amber-200/20 text-yellow-300 border border-amber-300';
            break;
        case 'Completed':
            statusClassName = 'bg-green-500/20 text-green-300 border border-green-400';
            break;
        case 'On Hold':
            statusClassName = 'bg-gray-500/20 text-gray-300 border border-gray-400';
            break;
        case 'Launched':
            statusClassName = 'bg-green-500/20 text-green-300 border border-green-400';

    }

    return (
        <p className={`px-2 py-1 text-sm rounded-full ${statusClassName}`}>{status}</p>
    )
}

export default StatusTag