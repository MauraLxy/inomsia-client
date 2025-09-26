// src/pages/DiaryPage.js
import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function DiaryPage() {
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!content.trim()) {
      setStatus('❌ Please write something before submitting.');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/diary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
      });

      if (res.ok) {
        const data = await res.json();
        setStatus('✅ Diary saved!');
        setContent(''); // Clear textarea
        console.log('Saved:', data);
      } else {
        const errorText = await res.text();
        setStatus(`❌ ${errorText}`);
      }
    } catch (err) {
      console.error(err);
      setStatus('❌ Server error. Try again later.');
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: '2rem' }}>
        <h2>📝 Write a New Diary Entry</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            rows="10"
            cols="60"
            placeholder="Write your thoughts here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{ padding: '1rem', fontSize: '1rem' }}
          />
          <br />
          <button type="submit" style={{ marginTop: '1rem' }}>
            Submit
          </button>
        </form>
        {status && <p style={{ marginTop: '1rem' }}>{status}</p>}
      </div>
    </>
  );
}
