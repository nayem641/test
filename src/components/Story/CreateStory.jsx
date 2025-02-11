import React, { useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

export default function CreateStory() {
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [fontSize, setFontSize] = useState(16);
  const [textColor, setTextColor] = useState('rgba(0, 0, 0, 0.8)');
  const [bgColor, setBgColor] = useState('linear-gradient(45deg, #ffffff, #f0e6ff, #ffe6e6, #e6fff0)');
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [fontFamily, setFontFamily] = useState('Roboto');

  const predefinedColors = [
    { gradient: 'linear-gradient(135deg, #f5f7fa, #c3cfe2, #e0eafc, #cfdef3)' },
    { gradient: 'radial-gradient(circle at 50% 50%, #ff758c, #ff7eb3, #ff7eb3, #ff7eb3)' },
    { gradient: 'conic-gradient(from 45deg, #43cea2, #185a9d, #43cea2, #185a9d)' },
    { gradient: 'repeating-radial-gradient(circle at 25% 75%, #2193b0, #6dd5ed, #2193b0, #6dd5ed)' },
    { gradient: 'linear-gradient(225deg, #f6d365, #fda085, #f6d365, #fda085)' },
    { gradient: 'conic-gradient(from 180deg, #2c3e50, #3498db, #2c3e50, #3498db)' },
    { gradient: 'radial-gradient(ellipse at top left, #ee9ca7, #ffdde1, #ee9ca7, #ffdde1)' },
    { gradient: 'linear-gradient(315deg, #96fbc4, #f9f586, #96fbc4, #f9f586)' },
    { gradient: 'repeating-conic-gradient(from 0deg, #00b09b, #96c93d, #00b09b, #96c93d)' },
  ];
  const fontFamilies = [
    'Roboto',    'Dancing Script',
    'Pacifico',
    'Quicksand',
    'Comfortaa',
    'Indie Flower'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ content, image, fontSize, textColor, bgColor });
  };

  const handleDragStart = (e) => {
    setIsDragging(true);
    const startX = e.clientX - position.x;
    const startY = e.clientY - position.y;

    const handleDrag = (e) => {
      setPosition({
        x: e.clientX - startX,
        y: e.clientY - startY
      });
    };

    const handleDragEnd = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleDrag);
      document.removeEventListener('mouseup', handleDragEnd);
    };

    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('mouseup', handleDragEnd);
  };

  const handleWheel = (e) => {
    if (e.ctrlKey) {
      e.preventDefault();
      const newScale = scale + (e.deltaY > 0 ? -0.1 : 0.1);
      const newScaleValue = Math.min(Math.max(0.5, newScale), 3);
      setScale(newScaleValue);
      setFontSize(16 * newScaleValue);
    }
  };

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      margin: '0',
      padding: '10px',

      background: '#ffffff',
      borderRadius: '15px',
      boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Pacifico&family=Quicksand&family=Comfortaa&family=Indie+Flower&display=swap" rel="stylesheet" />
      <IoArrowBack 
        onClick={() =>navigate('/')} 
        style={{
          fontSize: '24px',
          cursor: 'pointer',
          position: 'absolute',
          left: '10px',
          top: '15px',
          color: '#2c3e50'
        }}
      />
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#2c3e50', textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>Create Your Story</h2>
      
      <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
        <div style={{display: 'flex', gap: '15px', marginBottom: '10px', alignItems: 'center', justifyContent: 'space-between'}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center'}}>
              {predefinedColors.map((color, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setBgColor(color.gradient);
                    setImage(null);
                  }}
                  style={{
                    width: '40px',
                    height: '40px',
                    background: color.gradient,
                    cursor: 'pointer',
                    borderRadius: '50%',
                    border: bgColor === color.gradient ? '3px solid #000' : '1px solid #ddd'
                  }}
                />
              ))}
              <label htmlFor="imageUpload" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '50px',
                height: '50px',
                color: '#2c3e50',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '28px'
              }}>
                📷
              </label>
              <input
                id="imageUpload"
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                style={{ display: 'none' }}
              />
            </div>
          </div>
        </div>

        <div style={{display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '5px'}}>
          <button 
            type="button" 
            onClick={() => setFontSize(prev => prev + 2)} 
            style={{
              padding: '8px 15px',
              borderRadius: '8px',
              border: 'none',
              background: 'rgba(108, 117, 125, 0.8)',
              color: 'white',
              cursor: 'pointer',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}>A+</button>
          <button 
            type="button" 
            onClick={() => setFontSize(prev => prev - 2)} 
            style={{
              padding: '8px 15px',
              borderRadius: '8px',
              border: 'none',
              background: 'rgba(108, 117, 125, 0.8)',
              color: 'white',
              cursor: 'pointer',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}>A-</button>
          <button 
            type="button" 
            onClick={() => setIsBold(!isBold)} 
            style={{
              padding: '8px 15px',
              borderRadius: '8px',
              border: 'none',
              background: isBold ? 'rgba(33, 150, 243, 0.8)' : 'rgba(108, 117, 125, 0.8)',
              color: 'white',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}>B</button>
          <button 
            type="button" 
            onClick={() => setIsItalic(!isItalic)} 
            style={{
              padding: '8px 15px',
              borderRadius: '8px',
              border: 'none',
              background: isItalic ? 'rgba(33, 150, 243, 0.8)' : 'rgba(108, 117, 125, 0.8)',
              color: 'white',
              fontStyle: 'italic',
              cursor: 'pointer',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}>I</button>
          <select 
            onChange={(e) => setFontFamily(e.target.value)} 
            style={{
              padding: '8px',
              width: '120px',
              borderRadius: '8px',
              border: 'none',
              background: 'rgba(108, 117, 125, 0.8)',
              color: 'white',
              cursor: 'pointer',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
              appearance: 'none'
            }}>
            {fontFamilies.map(font => (
              <option key={font} value={font} style={{fontFamily: font, background: '#fff', color: '#000'}}>{font}</option>
            ))}
          </select>
          <input
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
            style={{
              width: '40px',
              height: '40px',
              padding: '0',
              border: 'none',
              borderRadius: '20px',
              cursor: 'pointer'
            }}
          />
        </div>

        <div 
          onWheel={handleWheel}
          onMouseDown={handleDragStart}
          style={{
            padding: '20px',
            minHeight: '40vh',
            height: image ? '500px' : 'auto',
            background: image ? 'transparent' : bgColor,
            borderRadius: '15px',
            border: '2px solid #ddd',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            position: 'relative',
            cursor: isDragging ? 'grabbing' : 'grab',
            transform: `translate(${position.x}px, ${position.y}px)`
          }}>
          {image && (
            <img
              src={URL.createObjectURL(image)}
              alt="Background"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '500px',
                objectFit: 'cover',
                borderRadius: '13px'
              }}
            />
          )}
          <textarea
            placeholder="Write your story here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{
              width: '100%',
              minHeight: '40vh',
              height: 'auto',
              backgroundColor: 'transparent',
              color: textColor,
              fontSize: `${fontSize}px`,
              fontWeight: isBold ? 'bold' : 'normal',
              fontStyle: isItalic ? 'italic' : 'normal',
              fontFamily: fontFamily,
              border: 'none',
              resize: 'none',
              outline: 'none',
              position: 'relative',
              zIndex: 1,
              overflow: 'hidden',
            }}
            onInput={(e) => {
              e.target.style.height = 'auto';
              e.target.style.height = Math.max(e.target.scrollHeight, window.innerHeight * 0.4) + 'px';
            }}
          />
        </div>

        <div style={{display: 'flex', gap: '15px', justifyContent: 'center', marginBottom: '0'}}>
          <button type="submit" style={{
            padding: '12px 30px',
            background: 'rgba(108, 117, 125, 0.8)',
            color: 'white',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            transition: 'transform 0.2s',
            ':hover': {
              transform: 'scale(1.05)'
            }
          }}>Publish Story</button>
          
          <button type="button"         onClick={() =>navigate('/')} 
 style={{
            padding: '12px 30px',
            background: 'rgba(220, 53, 69, 0.8)',
            color: 'white',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            transition: 'transform 0.2s',
            ':hover': {
              transform: 'scale(1.05)'
            }
          }}>Cancel</button>
        </div>
      </form>
    </div>
  );
}