export function getWebSocketURL() {
    // const production_port = window.location.port + 2000 // 3000 -> 5000, 3001 -> 5001
    return import.meta.env.MODE === 'production'
    ? `wss://${window.location.hostname}/api/`
    : `ws://${window.location.hostname}:5000`;
}

export default getWebSocketURL