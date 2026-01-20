
interface PictureCard {
    img_path: string;
    caption: string;
}

function PictureCard ({ img_path, caption }: PictureCard) {
    
    return (
        <div className="m-8 p-4 space-y-2 rounded-2xl border border-neutral-800 bg-surface transition hover:-translate-y-1 hover:shadow-xl">
            <img className="aspect-square w-full rounded-2xl"src={img_path}/>
            <p className="text-muted text-sm">{caption}</p>
        </div>
    )
}

export default PictureCard