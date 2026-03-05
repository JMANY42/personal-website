import WebringIcon from './WebringIcon.tsx'

function Webring() {
    const site = 'davidjonathanlewis.com'
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <a href={`https://cs.utdring.com/#${site}?nav=prev`}>←</a>
            <a href={`https://cs.utdring.com/#${site}.com`} target=''>
                <WebringIcon size={48}/>
            </a>
            <a href={`https://cs.utdring.com/#${site}.com?nav=next`}>→</a>
        </div>
// Replace 'your-site-here' with your actual site URL
    )
}

export default Webring;