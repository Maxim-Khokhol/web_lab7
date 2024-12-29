import './App.css'
import { useState } from 'react';

function Image() {
    const [imageSrc, setImageSrc] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [imageScale, setImageScale] = useState(1);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImageSrc(reader.result);
                setIsVisible(true);
            };
            reader.readAsDataURL(file);
        }
    };

    const zoomIn = () => {
        setImageScale(imageScale + 0.1);
    };

    const zoomOut = () => {
        if(imageScale > 0.4){
            setImageScale(imageScale - 0.1);
        }
    };

    const deleteImage = () => {
        setImageSrc('');
        setIsVisible(false);
    };

    return (
        <div className="btns">
            <div style={{ marginBottom: "20px", maxHeight: "200px", width:"100%", height: "200px", overflow: "hidden", display: isVisible ? 'flex' : 'none', backgroundColor: "black", justifyContent: 'center' }}>
                <img src={imageSrc} alt="Вибране зображення" style={{ scale:`${imageScale}`, width: '300px', height: 'auto' }} />
            </div>
            <div className="btns-b">
                <button onClick={() => document.getElementById('imageInput').click()}>Додати</button>
                <button onClick={zoomIn}>Збільшити</button>
                <button onClick={zoomOut}>Зменшити</button>
                <button onClick={deleteImage}>Видалити</button>
                <input
                    id="imageInput"
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleImageUpload}
                />
            </div>
        </div>
    );
}

export default Image;
