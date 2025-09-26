import './WriteDiary.css';
import Navbar from '../components/Navbar';
import { useState } from 'react';

export default function WriteDiary() {
  const [type, setType] = useState('journal');
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [content, setContent] = useState('');
  const [collection, setCollection] = useState('');
  const [privacy, setPrivacy] = useState('private');
  
  const handlePublish = async () => {
    if (!content.trim()) {
        alert("Content cannot be empty");
        return;
    }

    try {
        const res = await fetch('http://localhost:5000/diary', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content })
        });

        if (res.ok) {
        // const data = await res.json();
        alert("✅ Diary published!");
        setContent(""); // reset input
        } else {
        alert("❌ Failed to publish");
        }
    } catch (err) {
        console.error(err);
        alert("❌ Error connecting to backend");
    }
    };

  return (
    <div className="write-page">
      <Navbar />
      <div className="form-container">
        <div className="form-row">
          <label>Type</label>
          <div className="type-options">
            <label><input type="radio" name="type" value="journal" checked={type === 'journal'} onChange={() => setType('journal')} /> Journal</label>
            <label><input type="radio" name="type" value="novel" checked={type === 'novel'} onChange={() => setType('novel')} /> Novel</label>
          </div>
        </div>

        <div className="form-row">
            <label>Date</label>
            <div className="input-with-icon">
                <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                />
            </div>
        </div>

        <div className="form-row align-top">
          <label>Content</label>
          <textarea 
            placeholder="Input..." 
            value={content} 
            onChange={(e) => setContent(e.target.value)} />
        </div>

        <div className="form-row">
          <label>Collection</label>
          <select value={collection} onChange={(e) => setCollection(e.target.value)}>
            <option value="">Select</option>
            <option value="travel">Travel</option>
            <option value="daily">Daily</option>
            <option value="ideas">Ideas</option>
          </select>
        </div>

        <div className="form-row">
          <label>Privacy</label>
          <select value={privacy} onChange={(e) => setPrivacy(e.target.value)}>
            <option value="private">private</option>
            <option value="public">public</option>
          </select>
        </div>

        <div className="form-actions">
          <button className="preview">preview</button>
          <button className="publish" onClick={handlePublish}>publish</button>
        </div>
      </div>
    </div>
  );
}
