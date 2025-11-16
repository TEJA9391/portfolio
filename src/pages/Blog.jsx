import React from 'react'

export default function Blog() {
    const posts = [
        {
            title: 'Getting Started with Machine Learning',
            date: 'Nov 15, 2024',
            excerpt: 'A beginner\'s guide to understanding ML fundamentals, common algorithms, and how to build your first model using Python and scikit-learn.'
        },
        {
            title: 'Building Real-time Web Apps with React & Firebase',
            date: 'Nov 10, 2024',
            excerpt: 'Explore how to create responsive web applications with real-time data synchronization using React and Firebase, including authentication and Firestore.'
        },
        {
            title: 'Computer Vision: Detecting Objects with OpenCV',
            date: 'Nov 5, 2024',
            excerpt: 'Learn practical computer vision techniques using OpenCV. Build an object detection system and understand image processing fundamentals.'
        },
        {
            title: 'NLP Basics: From Text to Sentiment',
            date: 'Oct 28, 2024',
            excerpt: 'Deep dive into Natural Language Processing. Learn tokenization, sentiment analysis, and build your own text classification model.'
        }
    ]

    return (
        <main style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '36px 20px' }}>
            <section className="fade-in">
                <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 10 }}>Blog</h1>
                <p style={{ color: 'var(--muted)', marginBottom: 30 }}>Thoughts on AI, web development, and building cool projects</p>

                <div style={{ display: 'grid', gap: 20 }}>
                    {posts.map((post, idx) => (
                        <div key={idx} className="card">
                            <h3 style={{ margin: '0 0 8px 0', fontWeight: 600 }}>{post.title}</h3>
                            <p style={{ margin: '0 0 12px 0', fontSize: 13, color: 'var(--muted)' }}>{post.date}</p>
                            <p style={{ margin: 0, color: 'var(--muted)', lineHeight: 1.6 }}>{post.excerpt}</p>
                            <a href="#" style={{ display: 'inline-block', marginTop: 12, color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>Read more →</a>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}
