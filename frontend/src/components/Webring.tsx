import WebringIcon from './WebringIcon.tsx'

function Webring() {
    const site = 'davidjonathanlewis.com'
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <a href={`https://cs.utdring.com/#${site}?nav=prev`}>←</a>
            <a href={`https://cs.utdring.com/#${site}`} target=''>
                <WebringIcon size={80}/>
            </a>
            <a href={`https://cs.utdring.com/#${site}?nav=next`}>→</a>
        </div>
    )
}

export default Webring;